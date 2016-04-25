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
import ServiceSize from '../../../services/size'
import Alert from '../../../modules/alert'

class SizeList extends Component{
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
        ServiceSize.listAll()
        .then(response=>{
            self.setState({
                list: response.data
            })
            self.refs.table.init()
            self.refs.segment.hideLoader()
        })
    }
    _goToSizeAdd(){
        window.location.href = '/admin/size/add'
    }
    _onDeleteSize(item){
        Alert.confirm('Ban co chac muon xoa khong ?')
        .then(()=>{
           ServiceSize.delete({id: item.id})
           .then(()=>{
                swal.close()
                window.location.reload()
           })
        })
    }
    _goToSizeEdit(item){
        window.location.href = '/admin/size/edit/'+item.id
    }
    render(){
        const list = this.state.list
        return (
            <Grid>
                <Helmet title="Size List"/>
                <Row>
                    <Column>
                        <Segment ref="segment" className="loading">
                            <Button className="small primary" onClick={this._goToSizeAdd.bind(this)}>
                                <Icon className="add"/>
                                Them kich thuoc
                            </Button>
                            <Divider className="hidden"/>
                            <Table ref="table">
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Ten kich thuoc</th>
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
                                                        <a onClick={this._goToSizeEdit.bind(this, item)}>Sua</a>
                                                        &nbsp;|&nbsp;
                                                        <a onClick={this._onDeleteSize.bind(this, item)}>Xoa</a>
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

export default SizeList