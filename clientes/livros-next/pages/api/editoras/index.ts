
import { NextApiRequest, NextApiResponse } from 'next';
import controleEditora from './../../../classes/controle/ControleEditora';
import Head from 'next/head'
import type { NextPage } from 'next'
import { Menu } from '../../../componentes/Menu'


export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            const { codEditora } = req.query;
            const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
            res.status(200).json({ nome: nomeEditora });
        } else {
            res.status(405).end();
        }
    } catch (e) {
        res.status(500).json({ erro: 'Erro no servidor' });
    }
}


