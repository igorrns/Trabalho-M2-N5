import { NextApiRequest, NextApiResponse } from 'next';
import controleLivro from '../../../classes/controle/ControleLivros';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            res.status(200).json(controleLivro.obterLivros());
        } else if (req.method === 'POST') {
            const livro = req.body;
            controleLivro.incluir(livro);
            res.status(200).json({ message: 'Livro incluído com sucesso!' });
        } else {
            res.status(405).end(`Método ${req.method} Não Permitido`);
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro no servidor', error: error });
    }
}


