import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>Welcome to GOV.UK</title>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <style>
            {`
              * {
                margin: 0;
                box-sizing: border-box;
              }

              body {
                font-family: Arial;
                color: white;
                -webkit-font-smoothing: antialiased;
              }
            `}
          </style>
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}
