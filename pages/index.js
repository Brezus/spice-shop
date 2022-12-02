import Head from "next/head"
import styles from "../styles/Home.module.css"
import { client } from "../components/client"
import Product from "../components/product"
import styled, { withTheme } from "styled-components"
import Hero from "../components/Hero"
import About from "../components/AboutUs"
import Items from "../components/Items"
import Cart from "../components/Cart"
import { useAppContext } from "../context/ShoppingCartContext"

const H2 = styled.h2`
  color: black;
  text-align: center;
`

export default function Home({ spiceProducts }) {
  const { cartItems } = useAppContext()
  const productsRendered = spiceProducts.map((prod) => (
    <Product key={prod?._id} spice={prod} />
  ))
  const winterProducts = spiceProducts
    .filter((product) => product.winterSpice)
    .map((prod) => <Product key={prod?._id} spice={prod} />)

  const summerProducts = spiceProducts
    .filter((product) => !product.winterSpice)
    .map((prod) => <Product key={prod?._id} spice={prod} />)
  const divStyles = {
    background: "white",
    minHeight: "100vh",
    position: "absolute",
    left: "20%",
    right: "0",
    top: "0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
  return (
    <>
      <Head>
        <title>feelin spicy</title>
      </Head>
      <Hero />
      <About />
      <div id="spices">
        <H2>Our Collection</H2>
        <Items>{winterProducts}</Items>
        <Items>{summerProducts}</Items>
      </div>
      <Cart style={divStyles} items={spiceProducts} />
    </>
  )
}

export async function getServerSideProps() {
  const spiceProducts = await client.fetch(`*[_type == "spiceProducts"]`)
  return {
    props: {
      spiceProducts,
    },
  }
}
