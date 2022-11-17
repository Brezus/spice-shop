import React, { useContext } from "react"
import { client } from "../../components/client"
import {
  Button,
  VolumeCont,
  VolumeBtns,
  Quant,
  ButtonsCont,
  InfoCont,
  SmallDetailsP,
  DetailsP,
  PriceP,
  NameP,
  DetailsCont,
  CartCont,
} from "../../styles/spiceStyles"
import Display from "../../components/Display"
import Script from "next/script"
import { useAppContext } from "../../context/ShoppingCartContext"
import Cart from "../../components/Cart"
import { TiShoppingCart } from "react-icons/ti"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.cartOpend ? "hidden" : "initial")};
  }
`

export default function ProductDetails({ selectedSpice, products }) {
  const { details, detailsLong, image, name, price } = selectedSpice
  const value = useAppContext()
  return (
    <>
      <GlobalStyle cartOpend={value.openCart} />
      <DetailsCont>
        <Display data={{ image, selectedSpice }} />
        <InfoCont>
          <SmallDetailsP>{details}</SmallDetailsP>
          <NameP>{name}</NameP>
          <DetailsP>{detailsLong}</DetailsP>
          <PriceP>${price}.00</PriceP>
          <ButtonsCont>
            <Button
              onClick={() => value.addToCart(selectedSpice, value.quantity)}
            >
              add to cart
            </Button>
            <VolumeCont>
              <VolumeBtns
                onClick={() => {
                  value.decrementQuant(value.openCart)
                }}
              >
                -
              </VolumeBtns>
              <Quant>{value.quantity}</Quant>
              <VolumeBtns
                onClick={() => {
                  value.incrementQuant(value.openCart)
                }}
              >
                +
              </VolumeBtns>
            </VolumeCont>
          </ButtonsCont>
        </InfoCont>
        <CartCont onClick={value.openCt}>
          <TiShoppingCart />
          {value.newItemAdded >= 1 && (
            <p>
              {value.totalQuantity}
              {value.totalQuantity >= 99 && "+"}
            </p>
          )}
        </CartCont>
      </DetailsCont>
      {value.openCart && <Cart items={value.cartItems} allItems={products} />}
    </>
  )
}

export async function getStaticPaths() {
  const query = `*[_type == "spiceProducts"] {
    slug {
      current
    }
  }`
  const products = await client.fetch(query)

  const paths = products.map((spiceProduct) => {
    return {
      params: {
        product: `${
          spiceProduct.winterSpice ? "winter-spice" : "summer-spice"
        }`,
        spice: spiceProduct.slug.current,
      },
    }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params: { spice } }) {
  const query = `*[_type == 'spiceProducts' && slug.current == '${spice}'][0]`
  const selectedSpice = await client.fetch(query)

  const productsQuery = `*[_type == "spiceProducts"]`
  const products = await client.fetch(productsQuery)
  return {
    props: {
      selectedSpice,
      spice,
      products,
    },
  }
}
