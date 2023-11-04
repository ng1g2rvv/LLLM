import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>LLLM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="LLLM" />
        <p className="description">
          You know, your best Law LLM
        </p>
      </main>

      <Footer />
    </div>
  )
}
