const RoleModel = require("../model/role-model")



//db insert
module.exports.addRole = function(req, res) {
    console.log(req.body.roleName);

    let role = new RoleModel({
        roleName: req.body.roleName
    })

    role.save(function(err, success) {
        if (err) {
            console.log(err);
            res.jason({ msg: "SMW", status: -1, data: req.body })
        } else {
            res.json({ msg: "role added", status: 200, data: success })
        }
    })
}

//find

module.exports.getAllRoles = function(req, res) {

    RoleModel.find(function(err, roles) {
        if (err) {
            res.json({ msg: "Something went wrong!!!", status: -1, data: err })
        } else {
            res,
            json({ msg: "roles....", status: 200, data: roles })
        }
    })
}