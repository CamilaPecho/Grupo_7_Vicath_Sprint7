const db = require('../../src/database/models');
const { Op } = require("sequelize");
const fs = require('fs');
const path = require('path');

const adminController = {
    eliminarUsuario: (req,res) =>{
        
        db.user.findByPk(req.params.id)
        .then(function(user)
        {
            //return res.send(path.resolve(__dirname, '../../public/images/users', user.avatar))
            fs.unlinkSync(path.resolve(__dirname, '../../public/images/users', user.avatar));

            db.user.destroy({
                where: {
                    id: req.params.id
                },
                force: true
            })
            .then(function(usuario)
            {
                return res.redirect("/admin/users")
            })
            .catch(function(error)
            {
                console.log(error)
            })
        })
        .catch(err => {
            console.log(err)
        })
        
    },

    listarUsuarios: (req,res) =>{
        db.user.findAll(
            {
                include: [{association: "rol"}]
            }
        )
        .then(function(usuarios)
        {
            
            return res.render("./users/listUsers", {usuarios})
        })
        .catch(function()
        {
            console.log("no sirve pa")
        })

    }
}

module.exports = adminController;