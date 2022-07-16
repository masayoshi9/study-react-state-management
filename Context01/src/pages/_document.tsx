import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.rawgit.com/kimeiga/bahunya/css/bahunya-0.1.2.css"
          // href="https://cdn.jsdelivr.net/gh/kimeiga/bahunya/dist/bahunya.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
