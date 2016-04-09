module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        uid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING
        },
        last_login_at: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.ENUM('active', 'spam', 'unactive'),
            defaultValue: 'unactive'
        },
        login_type: {
            type: DataTypes.ENUM('facebook', 'google', 'local'),
            defaultValue: 'local'
        },
        type: {
            type: DataTypes.ENUM('admin', 'client'),
            defaultValue: 'client'
        },
        token_login: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4
        },
        expire_at: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: true,
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        tableName: 'User',
        classMethods: {
            associate: function(models){
                
            }
        }
    })

    return User;
}