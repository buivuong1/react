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
import Icon from '../../../modules/icon'
import Divider from '../../../modules/divider'
import Segment from '../../../modules/segment'
import Alert from '../../../modules/alert'
import validate from 'validate.js'
import ServiceSize from '../../../services/size'

class SizeAdd extends Component{
    constructor(props){
        super(props)
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
        this.formClicked = 0
        this.field = 'field_'
    }
    static modules = [
        'form',
        'button',
        'sweetalert',
        'label',
        'divider',
        'segment',
        'icon'
    ]
    _onChangeField(refField){
        if(this.formClicked > 0){
            const value = this.refs[refField].getValue()
            const isValid = validate.single(value, this.formValidate[refField])
            this._triggerFieldError(isValid, refField)
        }
    }
    _onAddSize(){
        this.formClicked++
        const formJSON = {
            name: this.refs.name.getValue(),
            desc: this.refs.desc.getValue()
        }
        const isValid = validate(formJSON, this.formValidate)
        if(typeof isValid === 'undefined'){
            const self = this
            this.refs.buttonAdd.showLoader()
            ServiceSize.add(formJSON)
            .then(()=>{
                window.location.href = '/admin/size/list'
            })
            .catch(error=>{
                self.refs.buttonAdd.hideLoader()
                Alert.error('Loi server')
            })
        }else{
            this._triggerFormError(isValid)
        }
    }
    _triggerFormError(validate){
        for(let keyError in validate){
            let keyValue = validate[keyError]
            const keyErrorField = this.field+keyError
            this.refs[keyErrorField].addError()
            this.refs[keyErrorField].showError(keyValue[0])
        }
    }
    _triggerFieldError(validate, refField){
        if(typeof validate === 'undefined'){
            this.refs[this.field+refField].removeError()
            this.refs[this.field+refField].hideError()
        }else{
            this.refs[this.field+refField].addError()
            this.refs[this.field+refField].showError(validate[0])
        }
    }
    _backToSizeList(){
        window.location.href = '/admin/size/list'
    }
    render(){
        return (
            <Grid>
                <Helmet title="Size Add"/>
                <Row>
                    <Column>
                        <Segment>
                            <Button className="small primary" onClick={this._backToSizeList.bind(this)}>
                                <Icon className="fast backward"/>
                                Tro ve danh sach
                            </Button>
                            <Divider className="hidden"/>
                            <Form type="div">
                                <Field ref={this.field+'name'}>
                                    <label>Kich thuoc</label>
                                    <InputText ref="name" placeholder="Kich thuoc"
                                        onChange={this._onChangeField.bind(this, 'name')}/>
                                </Field>
                                <Field ref={this.field+'desc'}>
                                    <label>Mo ta ngan</label>
                                    <TextArea ref="desc" placeholder="Mo ta ngan"
                                        onChange={this._onChangeField.bind(this, 'desc')}/>
                                </Field>
                                <Button className="fluid" onClick={this._onAddSize.bind(this)} ref="buttonAdd">Them</Button>
                            </Form>
                        </Segment>
                    </Column>
                </Row>
            </Grid>
        )
    }
}

export default SizeAdd