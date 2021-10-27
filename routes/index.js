var crypto = require('crypto')
    //     User = require('../models/user.js')
var User = require('../models/user')
    // module.exports = router;
module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', { title: 'Express' });
    })
    app.get('/newbmw', function(req, res) {
        res.send('Hello newbmw')
    })

    app.get('/reg', function(req, res) {
        res.render('reg', { title: '用户注册' });
    })
    app.post('/reg', function(req, res) {
        var name = req.body.name
        var password = req.body.password
        var password_re = req.body.password_re
        var email = req.body.email

        if (password != password_re) {
            req.flash('error', '两次输入的密码不一致')
            return res.redirect('/reg')
        }
        const md5 = crypto.createHash('md5');
        var passwordMd5 = md5.update(req.body.password).digest('hex')
        var param = {
            name: name,
            password: passwordMd5,
            email: email
        }

        User.create(param, function(err, doc) {
            if (err) {
                console.log(err)
            }
            console.log(param)
            return res.redirect('/reg')
        })
    })

    app.get('/login', function(req, res) {
        res.render('login', { title: '用户登录' });
    })
    app.post('/login', function(req, res) {})

    app.get('/post', function(req, res) {
        res.render('post', { title: '用户发表' });
    })
    app.post('/post', function(req, res) {})

}