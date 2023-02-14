import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
                    <Head>
        <Html lang='pt-BR'>


               
<link rel="alternate" hreflang="pt" href="https://coflow.com.br">
<link rel="alternate" hreflang="en" href="https://en.coflow.com.br">
<script type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
<script>
    Weglot.initialize({
        api_key: 'wg_5764ae89f976da1ab84bcc66aa1f92526'
    });
</script>

            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}