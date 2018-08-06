import React from "react"
import { css } from "emotion";
import Link from "gatsby-link";

const containerStyle = css`
  left: 0;
  top: 0;
  position: fixed;
  width: 100vw;
  height: 90px;
  background: rgba(255, 255, 255, 0.99);
  z-index: 1;
  display: flex;
  justify-content: center;

  @media(max-width: 576px){
    height: 60px;
  }
`

const homeStyle = css`
  @media(max-width: 576px){
    display: none;
  }
  float: right;
  margin: 20px;
`

const listStyle = css`
  display: inline-block;
  @media(min-width: 769px){
    margin: 20px;
  }
  @media(min-width: 768px){
    margin: 20px 15px;
  }
`

const ListLink = props =>
  <li style={{ display: `inline-block`, margin: '20px 15px' }}>
    <Link to={props.to}>
      <div style={{ marginBottom: 10, display: 'inline-block', color: 'black' }}>
        {props.children}
      </div>
    </Link>
  </li>

const Navigation = () =>
  <span style={{ float: `left` }}>
    <ListLink to="/developer-projects">
      Developer Projects
    </ListLink>
    <ListLink to="/ux-ui">
      UX/UI
    </ListLink>
    <ListLink to="/author">
      Author
    </ListLink>
    <ListLink to="/blog">
      Blog
    </ListLink>
  </span>

const HomeNavigation = ({ data }) => 
  <ul className={homeStyle}>
    <Link to="/">
      <div style={{ display: `flex`, alignItems: `center`, flexDirection: `column` }}>
        <h3 style={{ display: `inline`, marginBottom: 5 }}>{data.site.siteMetadata.title}</h3>
        <h5>Web Developer | UX/UI</h5>
      </div>
    </Link>
  </ul>

export default ({ data }) =>
  <header className={containerStyle}>
    <nav style={{ width: 1000 }}>
      <Navigation />
      <HomeNavigation data = { data }/>
    </nav>
  </header>