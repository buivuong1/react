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

class TypeEdit extends Component{
    static modules = [
        'segment',
        'form',
        'label',
        'transition',
        'dropdown',
        'button',
        'sidebar',
        'menu',
        'icon',
        'breadcrumb'
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
        const self = this
        ServiceTable.listAll()
        .then(response=>{
            self.refs.table_id.init(response.data)
            self._onServiceTypeDetail()
        })
    }
    _onServiceTypeDetail(){
        const self = this
        ServiceType.detail({id: this.props.params.id})
        .then((detail)=>{
            if(Array.isArray(detail.data)){
                const data = detail.data[0]
                for(let key in data){
                    if(typeof self.refs[key] !== 'undefined')
                        self.refs[key].setValue(data[key])
                }
            }
        })
    }
    _onChangeField(refField){
        if(this.formClicked > 0){
            const value = this.refs[refField].getValue()
            const isValid = validate.single(value, this.formValidate[refField])
            this._triggerFieldError(isValid, refField)
        }
    }
    _onEditType(){
        this.formClicked++
        const formJSON = {
            id: this.props.params.id,
            name: this.refs.name.getValue(),
            table_id: this.refs.table_id.getValue(),
            desc: this.refs.desc.getValue()
        }
        const isValid = validate(formJSON, this.formValidate)
        if(typeof isValid === 'undefined'){
            const self = this
            this.refs.buttonEdit.showLoader()
            ServiceType.edit(formJSON)
            .then(()=>{
                window.location.href = '/admin/type/list'
            })
            .catch(error=>{
                self.refs.buttonEdit.hideLoader()
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
                    <Helmet title="Type Edit"/>
                    <Row>
                        <Column>
                            <Segment className="basic">
                                <CoreBreadcrumb>
                                    <a className="section">He he</a>
                                </CoreBreadcrumb>
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
                                    <Button className="fluid" onClick={this._onEditType.bind(this)} ref="buttonEdit">Sua</Button>
                                </Form>
                            </Segment>
                        </Column>
                    </Row>
                </Grid>
            </CoreAdmin>
        )
    }
}

export default TypeEdit