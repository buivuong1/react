module.exports = React.createClass({
        propTypes: {
                type: React.PropTypes.string.isRequired,
                placeholder: React.PropTypes.string,
                className: React.PropTypes.string
        },
        getDefaultProps: function(){
                return {
                        type: 'web'
                }
        },
        render: function(){
                var type = this.props.type;
                if(type === 'web'){
                    return (
                        <input type="password"
                                ref="input"
                                placeholder={this.props.placeholder}
                                onChange={this._onChange}
                                className={this.props.className}/>
                    )
                }
        }
})