import { Montserrat } from 'next/font/google'

import { useFetch } from '../utils/hooks'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import AboutBanner from '../assets/about-banner.png'

import style from '../css/main.module.css'

const fontMontserrat = Montserrat({ subsets: ['latin'] })

function About() {
  const { data, isLoading, error } = useFetch(`./datas/collapses.json`)

  if (error) {
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
        <main>
            <span>Une erreur est survenue. Merci de réessayer ultérieurement.</span>
        </main>
        <Footer />
      </>
    )  
	}

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
        <Banner src={AboutBanner} pageClass={style.banner_aboutContainer} />

        {isLoading ? (
          <></>
        ) : (
          <section className={style.collapse_section}>        
              {data.map(({ id, title, content }) => ( 
                <div className={style.collapse_container} key={id} id={id}>
                  <Collapse title={title} content={<p className={style.collapse_content}>{content}</p>} />
                </div>
              ))}
          </section>
        )}

      </main>
      <Footer />
    </>
  )
}

export default About