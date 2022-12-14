import React from "react"
import styled, { keyframes, css } from "styled-components"
import { Button } from "../styles/spiceStyles"
import { useAppContext } from "../context/ShoppingCartContext"
import { AiOutlinePlusSquare } from "react-icons/ai"
import { AiOutlineMinusSquare } from "react-icons/ai"
import { RiDeleteBack2Line } from "react-icons/ri"
import { nanoid } from "nanoid"
import { urlFor } from "./client"

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
  padding: 2em 1em;
`

const CartCont = styled.div`
  color: black;
  position: fixed;
  left: 20%;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  overflow-y: scroll;
  display: grid;
  grid-auto-rows: 1fr;
  padding: 2em;
  place-items: center;
  gap: 1rem;
  z-index: 6;
  ${(props) =>
    props.empty &&
    css`
      grid-template-rows: 5px 50px;
      place-content: center;
    `}

  h3 {
    font-size: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 0.7rem;
  }
`
const CartBg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 5;

  animation: ${appearOpac} 0.2s ease;
`

const Item = styled.div`
  display: flex;
  gap: 1em;
  width: 70%;
  display: grid;
  grid-template-columns: 35px 1fr;
`
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  width: 100%;
`
const Icons = styled(Desc)`
  flex-direction: row;
  gap: 0.7em;
  justify-content start;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 3em;
`

export default function Cart({ items, allItems }) {
  const cartValue = items
  const value = useAppContext()
  const cartItemsEls = items?.map((item) => {
    return (
      <Item key={nanoid()}>
        <img src={urlFor(item?.image[0])} alt={item.name} />
        <Desc>
          <Flex>
            <h3>{item.name}</h3>
            <RiDeleteBack2Line
              onClick={() => {
                value.removeItem(item._id)
              }}
            />
          </Flex>
          <p>{item.details}</p>
          <Flex>
            <Icons>
              <AiOutlineMinusSquare
                onClick={() => {
                  value.decrementQuant(value.openCart, item._id)
                }}
              />
              <p>{item.quantity}</p>
              <AiOutlinePlusSquare
                onClick={() => {
                  value.incrementQuant(value.openCart, item._id)
                }}
              />
            </Icons>
            <p>${item.price}</p>
          </Flex>
        </Desc>
      </Item>
    )
  })
  return (
    <Wrapper>
      {items?.length >= 1 ? (
        <CartCont>
          {cartItemsEls}
          <p>{value.totalPrice}</p>
        </CartCont>
      ) : (
        <>
          <CartCont empty>
            <p>It appears your cart is empty</p>
            <Button onClick={value.closeCt}>continue browsing</Button>
          </CartCont>
        </>
      )}
      <CartBg onClick={value.closeCt} />
    </Wrapper>
  )
}
