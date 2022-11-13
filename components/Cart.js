import React from "react"
import styled, { keyframes } from "styled-components"
import { Button } from "../styles/spiceStyles"
import { useAppContext } from "../context/ShoppingCartContext"

const appearOpac = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`
const appearLeft = keyframes`
  from {
    left: 100%;
  }
  to {
    left: 20%;
  }
`

const Wrapper = styled.section`
  position: relative;
`

const CartCont = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  position: fixed;
  left: 20%;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  z-index: 2;

  p {
    font-size: 1.2rem;
    font-weight: 400;
  }
`
const CartBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;
  animation: ${appearOpac} 0.2s ease;
`

export default function Cart({ items }) {
  const value = useAppContext()
  // console.log(value)
  // console.log(items)
  return (
    <Wrapper>
      <CartCont>
        <p>It appears your cart is empty</p>
        <Button onClick={value.closeCt}>continue browsing</Button>
      </CartCont>
      <CartBg onClick={value.closeCt} />
    </Wrapper>
  )
}
