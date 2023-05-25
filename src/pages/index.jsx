import { Montserrat } from 'next/font/google'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import CardsSet from '../components/CardsSet'
import HomeBanner from '../assets/home-banner.png'

import style from '../css/main.module.css'

const fontMontserrat = Montserrat({ subsets: ['latin'] })

function Home() {
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
        <Banner src={HomeBanner} pageClass={style.banner_homeContainer} text="Chez vous, partout et ailleurs" />
        <CardsSet />
      </main>
      <Footer />
    </>
  )
}

export default Home
