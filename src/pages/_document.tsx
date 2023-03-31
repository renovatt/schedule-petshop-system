import { ServerStyleSheet } from "styled-components";
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Wildemberg Renovato de Lima" />
        <meta name="description" content="Cute Pet - Sistema de Agendamentos para PetShop" />
        <meta name="keywords" content="petshop, sistema para petshop, Pet Shop" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Cute Pet" />
        <meta property="og:description" content="Sistemas de Agendamentos para PetShop" />
        <meta property="og:image" content="https://schedule-petshop-system.vercel.app/web-1.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}