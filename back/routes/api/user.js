const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController');



router.get('/', userController.getAll);
router.post('/', userController.create);
router.put('/:id', userController.updateUser);
router.get('/:id', userController.get);
router.delete('/:id', userController.deleteUser);
router.post('/novoCurso', userController.novoCurso)
router.post('/check', userController.checkConteudo)

module.exports = router;
