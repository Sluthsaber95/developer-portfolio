import React from "react";
import { css } from "emotion";
import Link from "gatsby-link";

const navOptionsLink = css`
  display: inline-block;
  margin-right: 1rem;
`
const navOption = css`
  margin-bottom: 10px;
  displa: inline-block;
  color: black;
`
const navBar = css`
  margin: 0 auto;
  max-width: 700px;
  padding: 10px;
`

const ListLink = props =>
  <li className={navOptionsLink}>
    <Link to={props.to}>
      <div className={navOption}>
        {props.children}
      </div>
    </Link>
  </li>

export default ({ children, data }) =>

  <div className={navBar}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h3>
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/about">
            About
        </ListLink>
        <ListLink to="/contact/">
            Contact
        </ListLink>
      </ul>
    </header>
    {children()}
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