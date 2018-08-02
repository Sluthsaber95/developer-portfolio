import React from "react"
import { css } from "react-emotion"
import Link from "gatsby-link"

import IconPhone from "./icon-phone.svg"
import IconEmail from "./icon-email.svg"
import IconTwitter from "./icon-twitter.svg"

const footerStyle = css`
  height: 400px;
  @media(max-width: 768px){
    height: 300px;
  }
`

const contentStyle = css`
  width: 1000px;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media(max-width: 768px){
    margin-top: 50px;
    display: flex;
    justify-content: none;
    align-items: left;
    flex-direction: column;
  }
`

const collectionStyle = css`
  @media(min-width: 1824px){
    text-align: left;
  }
  @media(max-width: 1823px){
    text-align: left;
  }
  @media(max-width: 768px){
    margin: 20px 0;
  }
`

const Line = () => 
  <div style={{ width: '100vw', height: 2, background: 'rgba(0, 0, 0, 0.1)'}}></div>

const Anchor = ({ link, children }) => 
  <a style={{ color: 'rgba(0, 0, 0, 0.5)' }} href={ link || ""}>
    { children }
  </a>

const List = ({ label, content, children }) => {
  const ListFormat =  label
    ? (
      <div>
        <span>{label || ""}</span>
        <span style={{ marginLeft: 20 }}>{content}</span>
        { children }
      </div>
    ) 
    : <div>{children}</div>

  return (
    <li style={{ listStyleType: 'none', margin: '5px 0', letterSpacing: '0.1em' }}>
      { ListFormat }
    </li>
  )
}

const ListLink = ({ to, children }) =>
  <List>
    <Link to={ to }>
      <div style={{ marginBottom: 10, display: 'inline-block', color: 'rgba(0, 0, 0, 0.5)' }}>
        { children }
      </div>
    </Link>
  </List>

const ListIcon = ({ icon, children }) =>
  <article style={{ display: 'flex', alignItems: 'center'}}>
    <img src={icon} style={{ width: 24, height: 24, opacity: 0.3, margin: 0}}/>
    <div style={{ letterSpacing: '0.05em', margin: '5px 10px', color: 'rgba(0, 0, 0, 0.5)' }}>
      { children }
    </div>
  </article>

const Collection = ({ title, children }) =>
  <article className={collectionStyle}>
    <h4 style={{ marginBottom: 15, fontWeight: 400, letterSpacing: '0.125em'}}>{ title }</h4>
    <ul style={{ marginLeft: 0 }}>
      { children }
    </ul>
  </article>

const Miscellaneous = () =>
  <Collection title="Miscellaneous">
    <List>
      <Anchor to="https://github.com/anthonytranDev">Github</Anchor>
    </List>
    <List>
      <Anchor to="https://stackoverflow.com/users/7243494/a-tran">StackOverFlow</Anchor>
    </List>
    <List>
      <Anchor to="https://medium.com/@anthonytran.dev">Medium</Anchor>
    </List>
    <List>
      <Anchor to="https://www.codewars.com/users/Anthony%20Tran">CodeWars</Anchor>
    </List>
  </Collection>

const Contact = () => 
  <Collection title="Contact Me">
    <ListIcon icon={IconPhone}>
      +44 7548 127060
    </ListIcon>
    <ListIcon icon={IconEmail}>
      <Anchor 
        link="mailto:anthonytran.dev@gmail.com"
        children="anthonytran.dev@gmail.com" 
      />
    </ListIcon>
    <ListIcon icon={IconTwitter}>
      <Anchor
        link="https://twitter.com/AnthonytranDev"
        children="@anthonytrandev"
      />
    </ ListIcon>
  </Collection>

const DLC = () =>
  <Collection title="DLC">
    <List>
      <Anchor>Curriculum Vitae</Anchor>
    </List>
    <List>
      <Anchor>Education Grades</Anchor>
    </List>
  </Collection>

export default () => 
  <footer className={footerStyle}>
    <Line />
    <section style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
      <div className={contentStyle}>
        <Miscellaneous />
        <DLC />
        <Contact />
      </div>
    </section>
  </footer>