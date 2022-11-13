import Head from "next/head"
import styles from "../styles/Home.module.css"
import { client } from "../components/client"
import Product from "../components/product"
import styled from "styled-components"
import Hero from "../components/Hero"
import About from "../components/About"
import Items from "../components/Items"

const H2 = styled.h2`
  color: black;
  text-align: center;
`

export default function Home({ spiceProducts }) {
  const productsRendered = spiceProducts.map((prod) => (
    <Product key={prod._id} spice={prod} />
  ))
  const winterProducts = spiceProducts
    .filter((product) => product.winterSpice)
    .map((prod) => <Product key={prod._id} spice={prod} />)

  const summerProducts = spiceProducts
    .filter((product) => !product.winterSpice)
    .map((prod) => <Product key={prod._id} spice={prod} />)

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
