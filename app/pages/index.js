import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { supabase } from './api/supabase'

export default function Home({
  articles
}) {
  return (
    <Layout>
      <Head>
        <title>WebTech</title>
        <meta name="description" content="Web technologies blogging application" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="style/global.css"></link>
      </Head>
      <h1 class="text-center font-bold text-4xl text-gray-900 dark:text-white font-mono">
        Welcome to <a href="https://www.adaltas.com">web technologies!</a>
      </h1>
      <br/><br/>
      <ul>
        <li class="text-xl text-gray-900 dark:text-white underline font-mono">
          <Link href="/articles">
            View our articles
          </Link>
        </li>
        <li class="text-xl text-gray-900 dark:text-white underline font-mono">
          <Link href="/about">
            About us
          </Link>
        </li>
        <li class="text-xl text-gray-900 dark:text-white underline font-mono">
          <Link href="/contact">
            Contact us
          </Link>
        </li>
      </ul>
<br/><br/>
      <p className="text-center font-bold text-3xl text-gray-900 dark:text-white font-mono">Our last Articles ! </p>
  <ul>
    {articles.slice(-3).map(article => (
      <li key={article.id} className="my-5">
        <h2 className="font-bold mb-1"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
        <p>{article.message}</p>
      </li>
    ))}
  </ul>
</Layout>
  )
}

export async function getServerSideProps(ctx) {
  let articles = []
  let { data, error, status } = await supabase
    .from('articles')
    .select(`*`)
  if (!error) articles = data // handle errors
  return {
    props: {
      articles: articles
    }
  };
}