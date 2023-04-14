import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import style from '../css/main.module.css'
import { Montserrat } from 'next/font/google'

const fontMontserrat = Montserrat({
  subsets: ['latin'],
})


function Error404() {
  return (
    <>
      <style jsx global>{`
          html {
            font-family: ${fontMontserrat.style.fontFamily};
            min-width: 330px;
          }
          body {
            margin: 0;
            min-height: 100vh;
          }
          main {
            padding: 0 100px;
          }          
          a {
            text-decoration: none;
          }
          ul {
            list-style: none;
          }
        `}
      </style>

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