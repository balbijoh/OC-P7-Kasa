import Link from 'next/link'
import style from '../../css/main.module.css'
// import styled from 'styled-components'


function Card({ id, title, cover }) {
	return (
		<li key={id} className={style.card_container}>
            <div className={style.card_divImg}>
			    <img src={cover} className={style.card_img} alt={`Image de ${title}`} />
            </div>
            <div className={style.card_divText}>
			    <p className={style.card_text}>{title}</p>
            </div>
		</li>
	)
};

export default Card;