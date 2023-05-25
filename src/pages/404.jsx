import Link from 'next/link'

import Header from '../components/Header'
import Footer from '../components/Footer'

import style from '../css/main.module.css'

function Error404() {
  return (
    <>
      <Header />
      <main className={style.content_padding}>
        <div className={style.error_content}>
            <p className={style.error_notFound}>404</p>
            <p className={style.error_text}>Oups ! La page que vous demandez n'existe pas.</p>
            <Link className={style.error_link} href='/'>Retourner sur la page d'accueil</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Error404