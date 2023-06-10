// pages/api/editoras/[codEditora].ts
import { NextApiRequest, NextApiResponse } from 'next';
import controleEditora from './../../../classes/controle/ControleEditora';


export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { codEditora } = req.query;
        const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
        res.status(200).json({ nome: nomeEditora });
    }
}

