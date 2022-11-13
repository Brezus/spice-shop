import React from "react"
import styled, { css } from "styled-components"
import { useRouter } from "next/router"
import Link from "next/link"
import { TiChevronLeft } from "react-icons/ti"

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
  const {
    query: { spice },
  } = useRouter()

  const chevronStyles = {
    fontSize: "2rem",
    color: "black",
    cursor: "pointer",
    position: "relative",
    left: "-85%",
  }

  const chevronContStyles = { zIndex: "2" }

  return (
    <>
      {spice ? (
        <Navigation details>
          <Link href={"/"}>
            <div style={chevronContStyles}>
              <TiChevronLeft style={chevronStyles} />
            </div>
          </Link>
        </Navigation>
      ) : (
        <Navigation>
          <Link href={"/"}>
            <H1>feelin spicy</H1>
          </Link>
          <ul>
            <Link href={"/"}>
              <Li style={{ cursor: "pointer" }}>home</Li>
            </Link>
            <Link href="#about-us">
              <Li style={{ cursor: "pointer" }}>about us</Li>
            </Link>
            <Link href="#spices">
              <Li style={{ cursor: "pointer" }}>spices</Li>
            </Link>
          </ul>
        </Navigation>
      )}
    </>
  )
}
