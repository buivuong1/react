import React, {Component} from 'react'
import Helmet from 'react-helmet'
import Grid from '../../../modules/base/grid'
import Row from '../../../modules/base/row'
import Column from '../../../modules/base/column'
import Button from '../../../modules/button'
import Icon from '../../../modules/icon'
import Divider from '../../../modules/divider'
import Segment from '../../../modules/segment'
import Table from '../../../modules/table'
import ServiceTable from '../../../services/table'
import Alert from '../../../modules/alert'

class TableList extends Component{
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
        'button',
        'divider',
        'sweetalert'
    ]
    componentDidMount(){
        const self = this
        ServiceTable.listAll()
        .then(response=>{
            self.setState({
                list: response.data
            })
            self.refs.table.init()
            self.refs.segment.hideLoader()
        })
    }
    _goToTableAdd(){
        window.location.href = '/admin/table/add'
    }
    _onDeleteTable(item){
        Alert.confirm('Ban co chac muon xoa khong ?')
        .then(()=>{
           ServiceTable.delete({id: item.id})
           .then(()=>{
                swal.close()
                window.location.reload()
           })
        })
    }
    _goToTableEdit(item){
        window.location.href = '/admin/table/edit/'+item.id
    }
    render(){
        const list = this.state.list
        return (
            <Grid>
                <Helmet title="Table List"/>
                <Row>
                    <Column>
                        <Segment ref="segment" className="loading">
                            <Button className="small primary" onClick={this._goToTableAdd.bind(this)}>
                                <Icon className="add"/>
                                Them bang
                            </Button>
                            <Divider className="hidden"/>
                            <Table ref="table">
                                <thead>
                                    <tr>
                                        <th>STT</th>
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
                                                    <td>{moment(item.created_at).format('YYYY-MM-DD HH:mm:ss')}</td>
                                                    <td>
                                                        <a onClick={this._goToTableEdit.bind(this, item)}>Sua</a>
                                                        &nbsp;|&nbsp;
                                                        <a onClick={this._onDeleteTable.bind(this, item)}>Xoa</a>
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
        )
    }
}

export default TableList