import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Grid from '../../../modules/base/grid'
import Row from '../../../modules/base/row'
import Column from '../../../modules/base/column'
import Form from '../../../modules/form'
import Field from '../../../modules/form/field'
import InputText from '../../../modules/input/text'
import TextArea from '../../../modules/input/textarea'
import Button from '../../../modules/button'
import validate from 'validate.js'
import ServiceSize from '../../../services/size'

class SizeAdd extends Component{
    constructor(props){
        super(props)
        this._onAddSize = this._onAddSize.bind(this)
        this.formValidate = {
            name: {
                presence: {
                    message: '^Ten  bat buoc nhap'
                },
                length: {
                    maximum: 20
                }
            },
            desc: {
                length: {
                    maximum: 250
                }
            }
        }
    }
    static modules = [
        'form',
        'button',
        'sweetalert',
        'label'
    ]
    _onAddSize(){
        const formJSON = {
            name: this.refs.name.getValue(),
            desc: this.refs.desc.getValue()
        }
        const isValid = validate(formJSON, this.formValidate)
        if(typeof isValid === 'undefined'){
            ServiceSize.add(formJSON)
            .then(()=>{
                alert('Success')
            })
            .catch(error=>{
                console.log(error)
            })
        }else{
            this._triggerError(isValid)
            swal({
                title: 'Loi',
                text: 'Moi ban sua cac loi mau do trong form',
                type: 'error',
                confirmButtonText: 'Dong'
            })
        }
    }
    _triggerError(validate){
        for(let keyError in validate){
            let keyValue = validate[keyError]
            const keyErrorField = 'field_'+keyError
            this.refs[keyErrorField].hasError()
            this.refs[keyErrorField].showError(keyValue[0])
        }
    }
    render(){
        return (
            <Grid>
                <Helmet title="Size Add"/>
                <Row>
                    <Column>
                        <Form type="div">
                            <Field ref="field_name">
                                <label>Kich thuoc</label>
                                <InputText ref="name" placeholder="Kich thuoc"/>
                            </Field>
                            <Field ref="field_desc">
                                <label>Mo ta ngan</label>
                                <TextArea ref="desc" placeholder="Mo ta ngan"/>
                            </Field>
                            <Button className="fluid" onClick={this._onAddSize}>Them</Button>
                        </Form>
                    </Column>
                </Row>
            </Grid>
        )
    }
}

export default SizeAdd