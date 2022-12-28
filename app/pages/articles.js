import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { supabase } from './api/supabase'

export default function Articles({
  articles
}) {
  const supabaseClient = useSupabaseClient();
  const session = useSession();
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title text-4xl font-bold text-gray-800'>
        Web technologies articles
      </h1>
      <p className="italic my-5 text-lg text-gray-700">This page fetches data at build time, excellent for SEO.</p>
      {session ? (
  <Link href="/addArticle">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">    Add article     </button>
  </Link>
) :     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">   Log in to add an article     </button>
}

      <ul className="my-10">
        {articles.map(article => (
          <li key={article.id} className="my-5">
            <h2 className="font-bold mb-1 text-2xl"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
            <p className="text-lg text-gray-700">{article.message}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  console.log("test")
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
