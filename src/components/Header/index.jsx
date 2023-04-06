import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import HeaderLogo from '../../assets/header-logo.svg'
import colors from '../../utils/style/colors'

const StyledLink = styled(Link)`
    color: ${colors.primary};
    font-size: 24px;
    font-weight: 500;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

const StyledLogo = styled(Image)`
    width: 210px;
    height: 68px;
`

const HeaderContainer = styled.header`
  padding: 40px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavContainer = styled.nav`
    width: 275px;
`

const NavList = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-inline-start: 0;
`

function Header() {
    return (
        <HeaderContainer>
            <Link href='/'>
                <StyledLogo src={HeaderLogo} alt='Logo de Kasa' />
            </Link>
            <NavContainer>
                <NavList>
                    <li>
                        <StyledLink href='/'>Accueil</StyledLink>
                    </li>
                    <li>
                        <StyledLink href='/about'>A propros</StyledLink>
                    </li>
                </NavList>
            </NavContainer>
        </HeaderContainer>
    )
}

export default Header