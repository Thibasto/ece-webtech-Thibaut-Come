import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import { useState } from 'react'
import { supabase } from './api/supabase'

export default function AddArticle() {
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [timestamp, setTimestamp] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Insert the new article into the database
    await supabase.from('articles').insert({ title, message })

    // Redirect to the articles page
    window.location.href = '/articles'
  }

  return (
    <Layout>
      <Head>
        <title>WebTech - Add article</title>
        <meta name="description" content="WebTech add article page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 class="text-center font-bold text-4xl text-gray-900 dark:text-white font-mono">
        Add a new article
      </h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto my-10">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
              Title:
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="title" type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
            <p className="text-red-500 text-xs italic">Please enter a title for the article.</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
              Message:
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" value={message} onChange={(event) => setMessage(event.target.value)} />
            <p className="text-red-500 text-xs italic">Please enter a message for the article.</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="timestamp">
              Timestamp:
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="timestamp" type="datetime-local" value={timestamp} onChange={(event) => setTimestamp(event.target.value)} />
            <p className="text-red-500 text-xs italic">Please enter a timestamp for the article.</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>
            Submit
          </button>
          <Link href="/articles">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Cancel</button>
          </Link>
        </div>
        </form>
        </Layout>
        )
}