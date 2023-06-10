const mongoose = require('./conexao.js');

const LivroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
    anoPublicacao: Number,
}, { collection: 'livros' });

module.exports = mongoose.model('Livro', LivroSchema);


