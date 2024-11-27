var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('alma', {title:'Alma'});

    })

    module.exports = router;