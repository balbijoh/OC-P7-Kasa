import { useFetch } from '../utils/hooks'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'

import style from '../css/main.module.css'
import { Montserrat } from 'next/font/google'

const fontMontserrat = Montserrat({
  subsets: ['latin'],
})


function About() {
  const { data, isLoading, error } = useFetch(`./datas/collapses.json`)

  if (error) {
		return <span>Une erreur est survenue. Merci de réessayer ultérieurement.</span>
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

        {isLoading ? (
          <></>
        ) : (
          <section className={style.collapse_section}>        
              {data.map(({ id, title, content }) => ( 
                <div className={style.collapse_container} key={id} id={id}>
                  <Collapse title={title} content={content} />
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