
import styled from "styled-components"

import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero
} from './components'

const Container = styled.div`
  background-color: black;
  height: 100vh
`
const Wrapper = styled.div`
  height: 10vh;
  width: full
`

function App() {
  return (
    <Container>
      <Wrapper>
        <Navbar />
      </Wrapper>
    </Container>
  );
}

export default App;
