const express = require('express');
const utils = require('utility');
const Router = express.Router();
const models = require('./model');
const User = models.getModel('user')
const _filter = {'pwd': 0, '__v': 0}

Router.get('/list', (req, res) => {
   // User.remove({}, (e, d) => {})
   User.find({}, (err, doc) => {
      return res.json(doc)
   })
});
Router.post('/login', (req, res) => {
  const {user, pwd} = req.body;
  User.findOne({user, pwd:md5Pwd(pwd)}, _filter, (err, doc) =>{
    if(!doc) {
      return res.json({code:1, msg: '用户名或者密码错误'})
    }

    res.cookie('userid', doc._id);
    return res.json({code:0, data:doc})
  })
})
Router.post('/register', (req, res) => {
   const {user, pwd, type} =req.body
   User.findOne({user: user}, _filter, (err, doc) => {
      if(doc) {
         return res.json({code:1, msg:'用户名重复'})
      }
      const userModel = new User({user, type, pwd:md5Pwd(pwd)})
     userModel.save((e, d) => {
        if(e) {
          return res.json({code:1, msg:'后端出错'})
        }
        const {user, type, _id} = d;
        res.cookie('userid', _id)
       return res.json({code:0, data:{user, type, _id}})

     })

   })
})
Router.get('/info', (req, res) => {
  const {userid} = req.cookies
  if(!userid) {
    return res.json({code:1})
  }
  User.findOne({_id:userid}, _filter, (err, doc) => {
    if(err) {
      return res.json({code:1, msg: '后端出错了'})
    }

    if(doc) {
      return res.json({code:0, data: doc})
    }
  })
});

function md5Pwd(pwd) {
  const salt = 'nxy_is_nv_94934jksdf94943@304#$@~~'
  return utils.md5(utils.md5(pwd + salt));
}

module.exports = Router;