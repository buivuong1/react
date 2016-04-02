var models = require('./models');
var bcrypt = require('bcrypt');

var password = bcrypt.genSaltSync(10);

models.users.create({
    type: 'admin',
    status: 'active',
    email: 'buivuongdhmo@gmail.com',
    password: password
})
.then(function(created){
    console.log(created);
})