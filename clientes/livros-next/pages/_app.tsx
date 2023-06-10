import 'bootstrap/dist/css/bootstrap.css';
import '../pages/styles/global.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css';



function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <meta name='viewport'
                    content='width=device-width, inicial-scale=1' />
            </Head>

            <Component {...pageProps} />
        </>
    )
}

export default MyApp