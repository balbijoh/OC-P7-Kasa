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
  const collapseContents = [
    {
        'id': 'coll1',
        'title': 'Fiabilité',
        'content': `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`
    },
    {
        'id': 'coll2',
        'title': 'Respect',
        'content': `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
    },
    {
        'id': 'coll3',
        'title': 'Service',
        'content': `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
    },
    {
        'id': 'coll4',
        'title': 'Sécurité',
        'content': `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
    },
  ]


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

        <section className={style.collapse_section}>
            {collapseContents.map(({ id, title, content }) => ( 
              <div className={style.collapse_container} key={id} id={id}>
                <Collapse title={title} content={content} />
              </div>
            ))}
        </section>

      </main>
      <Footer />
    </>
  )
}

export default About