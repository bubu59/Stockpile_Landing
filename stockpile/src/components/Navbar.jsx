import styled from "styled-components"
import { stockpile } from "../assets"

const Container = styled.div`

`
const Logo = styled.img`
    width: 124px;
    height: 64px
`
const Links = styled.div``

const Navbar = () => {
    return (
        <Container>
            <Logo src={stockpile} />
        </Container>
    )
}

export default Navbar
