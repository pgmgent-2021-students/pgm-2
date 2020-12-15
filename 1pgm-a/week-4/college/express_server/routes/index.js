//custom module
//paden van onze api
const express = require('express');
const router  = express.Router();
const path = require('path');
const fs = require('fs')

router.get('/',(req,res)=>{
    res.status(200).json({
        title:"it works!",
        body:'hello api router'
    })
})

router.get('/users',(req,res)=>{
    const pathOfDataFile = path.join(__dirname,'..','public','data','users.json')

    fs.readFile(pathOfDataFile, (err,data) => {
        if(err){
            res.status(501).json({
                title:"error",
                message:err
            })
        }
        
        res.status(200).json(JSON.parse(data).results)
    })
})

router.get('/users/:userId',(req,res)=>{
    const id = req.params.userId
    const pathOfDataFile = path.join(__dirname,'..','public','data','users.json')

    fs.readFile(pathOfDataFile, (err,data) => {
        if(err){
            res.status(501).json({
                title:"error",
                message:err
            })
        }
        
        const user = JSON.parse(data).results.find(u => u.login.uuid === id);

        if(user){//user bestaat
            res.status(200).json(user)

        }else{
            res.status(404).json({
                code:404,
                message:'user does not exist',
                id:id
            })
        }
    })
})

//exporteren van module
module.exports = router
