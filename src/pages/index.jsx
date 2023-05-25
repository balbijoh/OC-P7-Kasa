import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import CardsSet from '../components/CardsSet'
import HomeBanner from '../assets/home-banner.png'

import style from '../css/main.module.css'

function Home() {
  return (
    <>
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
