import React, { useState, createContext, useContext } from "react"
import { nanoid } from "nanoid"

const AppContext = createContext()

export default function ShoppingCartContext({ children }) {
  const [quantity, setQuantity] = useState(1)
  const [item, setItem] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [openCart, setOpenCart] = useState(false)
  const [newItemAdded, setNewItemAdded] = useState(false)

  function addToCart(product, quantity) {
    const isInside = cartItems.find((prod) => prod.name === product.name)

    setQuantity((prev) => prev + quantity)
    setTotalPrice((prev) => prev + product.price * quantity)
    if (isInside) {
      setCartItems((prev) => {
        return prev.map((cartProd) => {
          return cartProd.name === product.name
            ? { ...cartProd, quantity: cartProd.quantity + quantity }
            : { cartProd }
        })
      })
    } else {
      product.quantity = quantity
      setCartItems((prev) => [...prev, { ...product }])
    }
    setTotalQuantity((prev) => {
      return prev >= 99 ? 99 : prev + quantity
    })
    setQuantity(1)
    setNewItemAdded(true)
  }

  function incrementQuant() {
    setQuantity((prev) => prev + 1)
  }
  function decrementQuant() {
    setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))
  }
  function removeItem(id) {
    setCartItems((prev) =>
      prev.filter((prod) => {
        return prod.id != id
      })
    )
  }

  function openCt() {
    setOpenCart(true)
    setNewItemAdded(false)
    setTotalQuantity(0)
  }
  function closeCt() {
    setOpenCart(false)
    console.log("ran")
  }

  return (
    <AppContext.Provider
      value={{
        quantity,
        totalQuantity,
        incrementQuant,
        decrementQuant,
        addToCart,
        cartItems,
        removeItem,
        openCt,
        closeCt,
        openCart,
        cartItems,
        newItemAdded,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
