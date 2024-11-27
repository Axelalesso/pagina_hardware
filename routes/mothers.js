var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('mothers', {title:'Mothers'});

    })

    module.exports = router;