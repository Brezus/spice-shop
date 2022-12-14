import React from "react"
import styled, { css } from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"
import { TiChevronLeft } from "react-icons/ti"
import { CartCont } from "../styles/spiceStyles"
import { TiShoppingCart } from "react-icons/ti"
import { useAppContext } from "../context/ShoppingCartContext"
import Cart from "./Cart"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.cartOpend ? "hidden" : "initial")};
    position: relative;
  }
`

const Navigation = styled.nav`
  background-color: "rgba(0, 0, 0, 0.3)"};
  position: absolute;
  left: 0;
  right: 0;
  top: 3rem;
  display: flex;
  justify-content: ${(props) => (props.details ? "start" : "space-around")};
  border: ${(props) => (props.details ? "none" : "1px solid white;")};
  align-items: center;
  width: ${({ theme }) => theme.width};
  margin-inline: auto;
  padding-inline: 1em;
  border-radius: ${({ theme }) => theme.bRadius};
  font-family: ${({ theme }) => theme.ffM};


  ul {
    display: flex;
    list-style: none;
    gap: 1em;

    li {
      font-size: .8em;
    }
  }
`

const H1 = styled.h1`
  cursor: pointer;
  z-index: 2;
  color: ${(props) => (props.dark ? "black" : "white")};
  font-size: 1.1rem;
`

const Li = styled.li`
  z-index: 2;
`

export default function Nav() {
  const { openCt, newItemAdded, newItemsQuant, cartItems, openCart } =
    useAppContext()
  const {
    query: { spice },
  } = useRouter()

  const router = useRouter()
  console.log(router?.route)
  console.log(router)

  const chevronStyles = {
    fontSize: "2rem",
    color: "black",
    cursor: "pointer",
    position: "relative",
    left: "-85%",
  }

  const chevronContStyles = { zIndex: "2" }

  const homeNavigation = (
    <Navigation>
      <Link href={"/"}>
        <H1>feelin spicy</H1>
      </Link>
      <ul>
        <Link href="#about-us">
          <Li style={{ cursor: "pointer" }}>about us</Li>
        </Link>
        <Link href="#spices">
          <Li style={{ cursor: "pointer" }}>spices</Li>
        </Link>
        <Link href="/auth/Login">
          <Li style={{ cursor: "pointer" }}>log-in</Li>
        </Link>
      </ul>
      <CartCont onClick={openCt}>
        <TiShoppingCart />
        {newItemAdded >= 1 && (
          <p>{newItemsQuant >= 99 ? newItemsQuant + "+" : newItemsQuant}</p>
        )}
      </CartCont>
    </Navigation>
  )

  const detailsNavigation = (
    <Navigation details>
      <Link href={"/"}>
        <div style={chevronContStyles}>
          <TiChevronLeft style={chevronStyles} />
        </div>
      </Link>
    </Navigation>
  )

  const renderNav = (router) => {
    switch (router?.pathname) {
      case "/":
        return homeNavigation
      case "/[product]/[spice]":
        return detailsNavigation
      case "/auth/Login":
        return null
    }
  }

  return (
    <div>
      <GlobalStyle cartOpend={openCart} />
      {renderNav(router)}
    </div>
  )
}
