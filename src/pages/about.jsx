import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

import style from '../css/main.module.css'
import { Montserrat } from 'next/font/google'

const fontMontserrat = Montserrat({
  subsets: ['latin'],
})

function About() {
  return (
    <>
      <style jsx global>{`
          html {
            font-family: ${fontMontserrat.style.fontFamily};
            min-width: 330px;
          }
          body {
            margin: 0;
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
        <Banner page='about' />
        
      </main>
      <Footer />
    </>
  )
}

export default About