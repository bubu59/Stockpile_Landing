
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
  background-color: black
`

function App() {
  return (
    <Container>
      <Navbar />
    </Container>
  );
}

export default App;
