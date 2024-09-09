const express = require('express');
const PessoaController = require('./controllers/pessoaController');
const router = express.Router();

router.post('/pessoas', PessoaController.create);
router.get('/pessoas', PessoaController.getAll);
router.get('/pessoas/:id', PessoaController.getById);
router.put('/pessoas/:id', PessoaController.update);
router.delete('/pessoas/:id', PessoaController.delete);

module.exports = router;
