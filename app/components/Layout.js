
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Layout({children}){
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
