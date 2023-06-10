import React from 'react';
import Livro from '../classes/modelo/Livro';
import ControleEditora from '../classes/controle/ControleEditora';

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr>
            <td>{livro.codigo}</td>
            <td>{livro.titulo}</td>
            <td>{nomeEditora}</td>
            <td>{livro.resumo}</td>
            <td>{livro.autores.join(', ')}</td>
            <td>
                <button onClick={excluir}>Excluir</button>
            </td>
        </tr>
    );
};