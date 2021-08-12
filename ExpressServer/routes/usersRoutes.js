const express = require('express');
const router =  express.Router();

const routeController = require('../common/routeController');
const userController = require('../controller/userController');
const messageController = require('../controller/messageController');
const {required} = require('../middlewares/auth');
//las rutas del usuario

//acceso protejido con middlewares
router.get('/diary', (req, res) =>{
    routeController.handleRequest(req, res,messageController.getAllUsers)
})
router.get('/sentmsg', (req, res) =>{
    routeController.handleRequest(req, res,messageController.getAllMsgSent)
})
router.get('/receivedmsg', (req, res) =>{
    routeController.handleRequest(req, res,messageController.getAllMsgReceived)
})
// router.get('/:id', (req, res) =>{
//     routeController.handleRequest(req, res,userController.getById)
// })
router.post('/newmsg', (req, res) =>{
    routeController.handleRequest(req, res,messageController.createMessage)
})
router.put('/deleted:id', (req, res) =>{
    routeController.handleRequest(req, res,messageController.updatedMessage)
})

// router.delete('/:id',[required], (req, res) =>{
//     routeController.handleRequest(req, res,userController.deleted)
// })

module.exports = router;
