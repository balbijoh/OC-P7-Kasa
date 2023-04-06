import Header from '../components/Header'
import Footer from '../components/Footer'
import { Montserrat } from 'next/font/google'

const fontMontserrat = Montserrat({
  subsets: ['latin'],
})

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
      <Footer />
    </>
  )
}

export default Home
