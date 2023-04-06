import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import FooterLogo from '../../assets/footer-logo.svg'
import colors from '../../utils/style/colors'

const FooterContainer = styled.footer`
    background-color: ${colors.backgroundFooter};
    width: 100%;
    height: 209px;
    position: absolute;
    bottom: 0px;
`

const DivLogo = styled.div`
    width: 100%;
    text-align: center;
    margin-top: 66px;
`

const DivText = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 29px;
    color: ${colors.textLight};
`

const StyledLogo = styled(Image)`
    width: 122px;
    height: 40px;
`


function Footer() {
    return (
        <FooterContainer>
            <DivLogo>
                <Link href='/'>
                    <StyledLogo src={FooterLogo} alt='Logo de Kasa' />
                </Link>
            </DivLogo>
            <DivText>
                <p>© 2020 Kasa. All rights reserved</p>
            </DivText>
        </FooterContainer>
    )
}

export default Footer