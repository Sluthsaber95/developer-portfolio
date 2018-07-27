import React from "react"
import { css } from "react-emotion"
import Link from "gatsby-link"
import shortid from "shortid"
import freecodecampGang from "./freecodecamp-gang.jpg"

const wrapperResponsive = css`
  @media(min-width: 768px){  
    display: flex;
  }
  @media(max-width: 767px){
    display: block;
  }
`
const articleResponsive = css`
  @media(min-width: 768px){
    margin: 10vw 0 0 7.5vw;
  }
  @media(max-width: 767px){
    margin: 20vw 0;
  }
`

const List = ({ label, content, children }) => 
  <li style={{ listStyleType: 'none', margin: '10px 0', letterSpacing: '0.02em'}}>
    <span style={{ fontWeight: 600, fontSize: '1.1em'}}>{ label || "" }</span>
    { content }
    { children }
  </li>
const Bold = ({ children }) => 
  <span style={{ fontWeight: 600 }}>{` ${children}`}</span>

const Paragraph = ({ children }) => 
  <p style={{ lineHeight: '2em', letterSpacing: '0.02em' }}>{ children }</p>

const Article = ({ title, children }) =>
  <article style={{ margin: '10vw 0 0 0' }}>
    <h2>{ title || ""}</h2>
    { children }
  </article>

const Introduction = () => 
  <Article>
    <h1 style={{ textAlign: 'center', marginTop: '10vw'}}>
      I wager you've taken an interest in my work
      </h1>
    <h3 style={{ textAlign: 'center', marginBottom: '5vw'}}>
      That's fine and all, but lets break the ice a little first
      </h3>
    <Paragraph>
      I'm Anthony. I'm a Web Developer, who's been tinkering with
      websites, engineering UI projects as a hobby for the past year.
      I'm a coding evangelist, passionate about spreading the good
      news on <Bold>Programming Craftsmenship</Bold> and
      <Bold>Intuitive Design</Bold>. Evident from my volunteering at 
      <a href="http://girlgeekupnorth.co.uk/workshops-announced-manchester-national-coding-week-2017/"> Manchester Coding Week 2017</a> and 
      <a href="https://www.meetup.com/CodeUp-Salford/?_cookie-check=HoivwCkbkRphQWqQ">
       Salford Codeup</a>, where I taught beginners the very basics in web development; 
      HTML, CSS and JavaScript.
      </Paragraph>
      <img src={freecodecampGang}   />     
    <Paragraph>
      I've joined the local JavaScript coding group <a href="https://www.facebook.com/groups/free.code.camp.manchester/">
       FreeCodeCamp Manchester</a>, to code projects, learn and discuss with
      professional developers on the latest trends, even trade best
      practices on tech stacks. All this has lead me to finally, spread
      my wings, and turn this cherished hobby into a artisanal profession.
    </Paragraph>
  </Article>

const MetaData = () =>
  <Article title="Metadata">
    <ul style={{ marginLeft: 0 }}>
      {
        [{ label: 'Specialisation', content: 'Frontend JavaScript Development' },
        { label: 'Preferred Framework', content: 'React 16 & Gatsby' },
        { label: 'Favourite JS Feature', content: 'Object Destructuring' },
        { label: 'Design Tools', content: 'Sketch and Affinity' },
        ].map(x => {
          const key = shortid.generate()
          return <List key={key} label={`${x.label}: `} content={x.content} />
        })
      }
    </ul>
  </Article>

const Miscellaneous = () =>
  <article className={articleResponsive}>
    <h2>Miscellaneous</h2>
      <Link to="/author/cv">
        <List content="Curriculum Vitae"/>
      </Link>
      <a href="https://github.com/anthonytranDev">
        <List content="GitHub"/>
      </a>
      <a href="https://stackoverflow.com/users/7243494/a-tran">
        <List content="StackOverflow" />
      </a>
      <a href="https://medium.com/@anthonytran.dev">
        <List content="Medium" />
      </a>
      <a href="https://www.codewars.com/users/Anthony%20Tran">
        <List content="CodeWars"/>
      </a>
  </article>

const References = () =>
  <Article title="References">
    <ul style={{ marginLeft: 0 }}>
      <List content="FreeCodeCamp Manchester Founder & Organiser - " >
        <a href="https://twitter.com/JD_aka_Techy">@JD_aka_techy</a>
      </List>
      <List content="Manchester Coding Week 2017 Organiser - ">
        <a href="https://twitter.com/ms_s_ashcroft">@ms_s_ashcroft</a>
      </List>
    </ul>
  </Article>

export default () =>
  <section>
    <Introduction />
    <article className={wrapperResponsive}>
      <MetaData />
      <Miscellaneous />
    </article>
    <References />
  </section>
