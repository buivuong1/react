import React, {Component} from 'react'
import CoreAdmin from '../core'
import Helmet from 'react-helmet'
import Grid from '../../../modules/base/grid'
import Row from '../../../modules/base/row'
import Column from '../../../modules/base/column'
import Segment from '../../../modules/segment'
import Form from '../../../modules/form'
import CoreBreadcrumb from '../core/breadcrumb'
import Field from '../../../modules/form/field'
import InputText from '../../../modules/input/text'
import TextArea from '../../../modules/input/textarea'
import Button from '../../../modules/button'
import Dropdown from '../../../modules/input/dropdown'
import ServiceTable from '../../../services/table'
import ServiceType from '../../../services/type'
import validate from 'validate.js'

class TypeAdd extends Component{
    static modules = [
        'segment',
        'form',
        'label',
        'dropdown',
        'button',
        'sidebar',
        'menu',
        'icon',
        'breadcrumb',
        'transition'
    ]
    constructor(props){
        super(props)
        this.formValidate = {
            name: {
                presence: {
                    message: '^Ten bat buoc nhap'
                },
                length: {
                    maximum: 60
                }
            },
            table_id: {
                presence: {
                    message: '^Bang bat buoc chon'
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
    componentDidMount(){
        const breadcrumb = [
            {name: 'Danh sach loai', url: '/admin/type/list'},
            {name: 'Them loai', active: true}
        ]
        this.refs.breadcrumb.init(breadcrumb)
        const self = this
        ServiceTable.listAll()
        .then(response=>{
            self.refs.table_id.init(response.data)
        })
    }
    _onChangeField(refField){
        if(this.formClicked > 0){
            const value = this.refs[refField].getValue()
            const isValid = validate.single(value, this.formValidate[refField])
            this._triggerFieldError(isValid, refField)
        }
    }
    _onAddType(){
        this.formClicked++
        const formJSON = {
            name: this.refs.name.getValue(),
            table_id: this.refs.table_id.getValue(),
            desc: this.refs.desc.getValue()
        }
        const isValid = validate(formJSON, this.formValidate)
        if(typeof isValid === 'undefined'){
            const self = this
            this.refs.buttonAdd.showLoader()
            ServiceType.add(formJSON)
            .then(()=>{
                window.location.href = '/admin/type/list'
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
    render(){
        return (
            <CoreAdmin>
                <Grid>
                    <Helmet title="Type Add"/>
                    <Row>
                        <Column>
                            <Segment className="basic">
                                <CoreBreadcrumb ref="breadcrumb"/>
                                <br/><br/>
                                <Form type="div">
                                    <Field type="group" className="two">
                                        <Field ref={this.field+'name'}>
                                            <label>Loai</label>
                                            <InputText ref="name" placeholder="Loai"
                                                onChange={this._onChangeField.bind(this, 'name')}/>
                                        </Field>
                                        <Field ref={this.field+'table_id'}>
                                            <label>Chon bang</label>
                                            <Dropdown ref="table_id" defaultText="Chon bang" code="id" display="name"
                                                className="selection" onChange={this._onChangeField.bind(this, 'table_id')}/>
                                        </Field>
                                    </Field>
                                    <Field ref={this.field+'desc'}>
                                        <label>Mo ta ngan</label>
                                        <TextArea ref="desc" placeholder="Mo ta ngan"
                                            onChange={this._onChangeField.bind(this, 'desc')}/>
                                    </Field>
                                    <Button className="fluid" onClick={this._onAddType.bind(this)} ref="buttonAdd">Them</Button>
                                </Form>
                            </Segment>
                        </Column>
                    </Row>
                </Grid>
            </CoreAdmin>
        )
    }
}

export default TypeAdd