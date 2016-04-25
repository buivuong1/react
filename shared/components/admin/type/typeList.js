import React, {Component} from 'react'
import CoreAdmin from '../core'
import CoreBreadcrumb from '../core/breadcrumb'
import Helmet from 'react-helmet'
import Grid from '../../../modules/base/grid'
import Row from '../../../modules/base/row'
import Column from '../../../modules/base/column'
import Button from '../../../modules/button'
import Icon from '../../../modules/icon'
import Divider from '../../../modules/divider'
import Header from '../../../modules/header'
import Segment from '../../../modules/segment'
import Table from '../../../modules/table'
import ServiceType from '../../../services/type'
import Alert from '../../../modules/alert'

class TypeList extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
    }
    static modules = [
        'menu',
        'icon',
        'datatable',
        'table',
        'moment',
        'segment',
        'header',
        'button',
        'divider',
        'sweetalert',
        'sidebar'
    ]
    componentDidMount(){
        const breadcrumb = [
            {name: 'Danh sach loai', active: true}
        ]
        this.refs.breadcrumb.init(breadcrumb)
        const self = this
        ServiceType.listAll()
        .then(response=>{
            self.setState({
                list: response.data
            })
            self.refs.table.init()
            self.refs.segment.hideLoader()
        })
    }
    _goToTypeAdd(){
        window.location.href = '/admin/type/add'
    }
    _onDeleteType(item){
        Alert.confirm('Ban co chac muon xoa khong ?')
        .then(()=>{
           ServiceType.delete({id: item.id})
           .then(()=>{
                swal.close()
                window.location.reload()
           })
        })
    }
    _goToTypeEdit(item){
        window.location.href = '/admin/type/edit/'+item.id
    }
    render(){
        const list = this.state.list
        return (
            <CoreAdmin>
                <Grid>
                    <Helmet title="Type List"/>
                    <Row>
                        <Column>
                            <Segment ref="segment" className="basic loading">
                                <CoreBreadcrumb ref="breadcrumb"/>
                                <Divider className="hidden"/>
                                <Header type="h1" className="left floated">Danh sach loai</Header>
                                <Button className="small primary right floated" onClick={this._goToTypeAdd.bind(this)}>
                                    <Icon className="add"/>
                                    Them loai
                                </Button>
                                <Divider className="hidden clearing"/>
                                <Table ref="table">
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Loai</th>
                                            <th>Ten bang</th>
                                            <th>Ngay tao</th>
                                            <th>Thao tac</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            list.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index+1}</td>
                                                        <td>{item.name}</td>
                                                        <td>{item.table_name}</td>
                                                        <td>{moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')}</td>
                                                        <td>
                                                            <a onClick={this._goToTypeEdit.bind(this, item)}>Sua</a>
                                                            &nbsp;|&nbsp;
                                                            <a onClick={this._onDeleteType.bind(this, item)}>Xoa</a>
                                                        </td>
                                                    </tr>
                                                )
                                            }, this)
                                        }
                                    </tbody>
                                </Table>
                            </Segment>
                        </Column>
                    </Row>
                </Grid>
            </CoreAdmin>
        )
    }
}

export default TypeList