import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1 className="text-3xl font-bold underline">WEBTECH WEBSITE</h1>
      </header>
      <main className={styles.main}>
        <h2>MENU</h2>
        <ul>
          <li><a href="/about">about</a></li>
          <li><a href="/contacts">contacts</a></li>
          <li><a href="/articles">articles</a></li>
        </ul>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
