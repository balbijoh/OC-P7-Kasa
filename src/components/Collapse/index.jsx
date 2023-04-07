import { useContext } from 'react'
import { CollapseContext } from '../../utils/context'
import style from '../../css/main.module.css'

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


function Collapse() {
    const { clickCollapse, collapse } = useContext(CollapseContext)

    return (
        <div className={style.collapse_container}>
            <div className={style.collapse_bar} onClick={() => clickCollapse()}></div>
            {collapse === 'open' ? (
                <div className={style.collapse_content}></div>
                ) : (
                <div></div>
            )}
        </div>
    )
}