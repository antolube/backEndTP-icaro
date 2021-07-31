const express = require('express');
const router =  express.Router();

const routeController = require('../common/routeController');
const userController = require('../controller/userController');
const messageController = require('../controller/messageController');
const {required} = require('../middlewares/auth');
//las rutas del usuario

//acceso protejido con middlewares
// router.get('/', (req, res) =>{
//     routeController.handleRequest(req, res,userController.getAll)
// })
// router.get('/:id',[required], (req, res) =>{
//     routeController.handleRequest(req, res,userController.getById)
// })
router.post('/newmsg', (req, res) =>{
    routeController.handleRequest(req, res,messageController.createMessage)
})
// router.patch('/:id',[required], (req, res) =>{
//     routeController.handleRequest(req, res,userController.updated)
// })

// router.delete('/:id',[required], (req, res) =>{
//     routeController.handleRequest(req, res,userController.deleted)
// })

module.exports = router;
