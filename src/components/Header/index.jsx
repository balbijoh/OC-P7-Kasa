import Link from 'next/link'
import Image from 'next/image'
import HeaderLogo from '../../assets/header-logo.svg'
import style from '../../css/main.module.css'

function Header() {
    return (
        <header className={style.header_content}>
            <Link href='/'>
                <Image src={HeaderLogo} alt='Logo de Kasa' className={style.header_logo} />
            </Link>
            <nav className={style.header_navContainer}>
                <ul className={style.header_navList}>
                    <li>
                        <Link href='/' className={style.header_navLink}>Accueil</Link>
                    </li>
                    <li>
                        <Link href='/about' className={style.header_navLink}>A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header