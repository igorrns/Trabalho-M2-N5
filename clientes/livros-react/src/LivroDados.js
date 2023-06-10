import React, { useState } from 'react';
import './App.css';
import './index.css';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import ControleLivro from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

function LivroDados() {
    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(0);
    const history = useHistory();

    function tratarCombo(evento) {
        setCodEditora(Number(evento.target.value));
    }

    const incluir = (evento) => {
        evento.preventDefault();
        // Implemente a lógica de inclusão do livro aqui
        history.push('/');
    };

    return (
        <main className="livro-dados-container">
            <h1>Incluir Livro</h1>
            <form className="livro-dados-form" onSubmit={incluir}>
                <input
                    type="text"
                    placeholder="Título"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <textarea
                    placeholder="Resumo"
                    value={resumo}
                    onChange={(e) => setResumo(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Autores"
                    value={autores}
                    onChange={(e) => setAutores(e.target.value)}
                />
                <select value={codEditora} onChange={tratarCombo}>
                    {/* Adicione as opções das editoras aqui */}
                </select>
                <button type="submit">Incluir</button>
            </form>
        </main>
    );
}

export default LivroDados;