const express = require('express');
const router = express.Router();
const { obterLivros, incluir, excluir } = require('../modelo/livro-dao');

router.get('/', async (req, res) => {
    const livros = await obterLivros();
    res.json(livros);
});

router.post('/', async (req, res) => {
    try {
        const livro = req.body;
        const novoLivro = await incluir(livro);
        res.json({ message: 'Livro adicionado com sucesso', data: novoLivro });
    } catch (error) {
        res.json({ message: 'Falha ao adicionar o livro', error: error.message });
    }
});

router.delete('/:codigo', async (req, res) => {
    try {
        const codigo = req.params.codigo;
        await excluir(codigo);
        res.json({ message: 'Livro excluído com sucesso' });
    } catch (error) {
        res.json({ message: 'Falha ao excluir o livro', error: error.message });
    }
});

module.exports = router;
