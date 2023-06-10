import type { NextPage } from "next";
import Head from 'next/head';
import { Menu } from '../componentes/Menu';

const Home: NextPage = () => {
    return (
        <div className="container">
            <Head>
                <title>Loja Next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Menu />

            <main className="styles.main">
                <h1 className="styles.title">
                    Página Inicial
                </h1>
            </main>
        </div>
    )
}

export default Home;