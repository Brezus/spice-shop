import "../styles/globals.css"
import Layout from "../components/Layout"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import { vars } from "../styles/vars"
import ShoppingCartContext from "../context/ShoppingCartContext"

const Wrapper = styled.div`
  color: white;
  background: ${({ theme }) => theme.bgCol};
  font-family: ${({ theme }) => theme.ffM};
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={vars}>
        <Wrapper>
          <Layout>
            <ShoppingCartContext>
              <Component {...pageProps} />
            </ShoppingCartContext>
          </Layout>
        </Wrapper>
      </ThemeProvider>
    </>
  )
}

export default MyApp
