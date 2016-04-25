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
import ServiceTable from '../../../services/table'

class TableEdit extends Component{
    constructor(props){
        super(props)
        this.formValidate = {
            name: {
                presence: {
                    message: '^Ten  bat buoc nhap'
                },
                length: {
                    maximum: 30
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
    componentDidMount(){
        const self = this
        ServiceTable.detail({id: this.props.params.id})
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
    _onEditTable(){
        this.formClicked++
        const formJSON = {
            id: this.props.params.id,
            name: this.refs.name.getValue(),
            desc: this.refs.desc.getValue()
        }
        const isValid = validate(formJSON, this.formValidate)
        if(typeof isValid === 'undefined'){
            const self = this
            this.refs.buttonEdit.showLoader()
            ServiceTable.edit(formJSON)
            .then(()=>{
                window.location.href = '/admin/table/list'
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
    _backToTableList(){
        window.location.href = '/admin/table/list'
    }
    render(){
        return (
            <Grid>
                <Helmet title="Table Edit"/>
                <Row>
                    <Column>
                        <Segment>
                            <Button className="small primary" onClick={this._backToTableList.bind(this)}>
                                <Icon className="fast backward"/>
                                Tro ve danh sach
                            </Button>
                            <Divider className="hidden"/>
                            <Form type="div">
                                <Field ref={this.field+'name'}>
                                    <label>Ten bang</label>
                                    <InputText ref="name" placeholder="Ten bang"
                                        onChange={this._onChangeField.bind(this, 'name')}/>
                                </Field>
                                <Field ref={this.field+'desc'}>
                                    <label>Mo ta ngan</label>
                                    <TextArea ref="desc" placeholder="Mo ta ngan"
                                        onChange={this._onChangeField.bind(this, 'desc')}/>
                                </Field>
                                <Button className="fluid" onClick={this._onEditTable.bind(this)} ref="buttonEdit">Sua</Button>
                            </Form>
                        </Segment>
                    </Column>
                </Row>
            </Grid>
        )
    }
}

export default TableEdit