import React from "react"
import { css } from "emotion"
import Link from "gatsby-link"

import NavBar from "./NavBar"
const containerStyle = css`
  margin: 0 auto;
  max-width: 1000px;
  padding: 50px 20px;
`
const displayStyle = css`
  @media(min-width: 1824px){
    margin-top: 70px;
    min-height: 800px;
  }
  @media(max-width: 1823px){
    margin-top: 70px;
    min-height: 800px;
  }
  @media(max-width: 768px){
    margin-top: 40px;
  }
  @media(max-width: 568px){
    margin-top: 20px;
  }
`

const DisplayPage = ({ children }) =>
  <section className={displayStyle}>
    {children()}
  </section>

export default ({ children, data }) =>
  <div>
    <div className={containerStyle}>
      <NavBar data={data} />
      <DisplayPage children={children} />
    </div>
  </div>

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`