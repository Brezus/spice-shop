import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { client } from "../components/client"
import WinterSpice from "../components/WinterSpice"

export default function Home({ spiceProducts }) {
  console.log(spiceProducts)
  return <>{/* <WinterSpice wSpices={spiceProducts} /> */}</>
}

export async function getStaticProps() {
  const spiceProducts = await client.fetch(`*[_type == "spiceProducts"]`)

  return {
    props: {
      spiceProducts,
    },
  }
}
