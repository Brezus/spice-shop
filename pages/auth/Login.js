import React from "react"
import styled from "styled-components"

const LoginMain = styled.main`
  height: 100vh;
  display: flex;
  place-items: center;
  justify-content: center;
  color: black;
`

export default function Login() {
  return (
    <LoginMain>
      <button>sign in with google</button>
      <button>sign in with github</button>
    </LoginMain>
  )
}
