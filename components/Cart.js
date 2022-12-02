import React from "react"
import styled, { keyframes } from "styled-components"
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
  z-index: 5;
  height: 100vh;
  width: 40%;
  position: fixed;
  right: 0;
  top: 0;
`

const CartCont = styled.div`
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1em;
  padding: 2em;
  height: 100%;
  // position: fixed;
  // left: 20%;
  // top: 0;
  // right: 0;
  // bottom: 0;
  background: white;
  z-index: 2;
  // overflow-y: scroll;
  // z-index: 6;
  // min-height: 100vh;

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
  z-index: 1;
  animation: ${appearOpac} 0.2s ease;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  width: 70%;
  justify-content: start;

  img {
    width: 12%;
  }
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
      <div key={nanoid()}>
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
      </div>
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
          <CartCont>
            <p>It appears your cart is empty</p>
            <Button onClick={value.closeCt}>continue browsing</Button>
          </CartCont>
        </>
      )}
      {/* <CartBg onClick={value.closeCt} /> */}
    </Wrapper>
  )
}
// return (
//   <Wrapper>
//     {items?.length >= 1 ? (
//       <CartCont>
//         {cartItemsEls}
//         <p>{value.totalPrice}</p>
//       </CartCont>
//     ) : (
//       <>
//         <CartCont>
//           <p>It appears your cart is empty</p>
//           <Button onClick={value.closeCt}>continue browsing</Button>
//         </CartCont>
//       </>
//     )}
//     <CartBg onClick={value.closeCt} />
//   </Wrapper>
// )
// }
