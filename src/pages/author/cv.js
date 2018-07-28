import React from "react"
import { css } from "react-emotion"
import Link from "gatsby-link"
import shortid from "shortid"

const articleStyle = css`
  @media(min-width: 769px){
    margin-bottom: 5vw;
  }
  @media(max-width: 768px){
    margin-bottom: 15vw;
  }
`

const titleStyle = css`
  @media(min-width: 769px){
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
  }
  @media(max-width: 768px){
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
`

const descriptorStyle = css`
  @media(min-width: 769px){
    display: inline;
    font-size: 1.15em;
    margin-left: 30px;
    font-weight: 200;
  }
  @media(max-width: 768px){
    display: block;
    font-size: 1.15em;
    font-weight: 200;
  }
`

const dateStyle = css`
@media(min-width: 769px){
    font-size: 1.15em;
    margin: 10px 0;
    text-align: right;
  }
  @media(max-width: 768px){
    font-size: 1.15em;
    text-align: right;
    margin: 0;
  }
  @media(max-width: 568px){
    font-size: .95em;
    text-align: left;
    margin: 0;
  }
`

const groupListStyle = css`
  @media(min-width: 569px){
    display: flex;
  }
  @media(max-width: 568px){
    display: block;
  }
`

const List = ({ label, content, children }) =>
  <li style={{ listStyleType: 'none', margin: '5px 0', letterSpacing: '0.1em' }}>
    <span>{label}</span>
    <span style={{ marginLeft: 20}}>{content}</span>
    {children}
  </li>

const Article = ({ title, descriptor, date, children }) => {
  const Title = title
    ? <div className={titleStyle}>
        <div>
          <span style={{ fontSize: '1.4em', fontWeight: '200' }}>{title}</span>
          <span className={descriptorStyle}>{descriptor || ""}</span>
        </div>
        <h3 className={dateStyle}>{date || ""}</h3>
      </div>
    : null
  return (
    <article className={articleStyle}>
      { Title }
      <div style={{ lineHeight: '1.8em', letterSpacing: '.025em' }}>{children}</div>
    </article>

  )
}
const Section = ({ title, children }) => {
  const Title = title
    ? <div>
        <h2 style={{ marginBottom: 5}}>{ title }</h2>
        <hr/>
      </div>
    : null
  return (
    <section>
      { Title }
      <div>{ children }</div>
    </section>
  )
}

const PersonalStatement = () =>
  <Section>
    <Article
      children="An eccentric self-taught developer. Highly adaptable to tech adoption, stemming  from my curiousity to study and master new technologies, crucial to an ever changing ecosystem. My innate ethos leads me to empower others, by volunteering at Tech Meetups and supporting my team as whole, by building useful use interfaces and development tools."
    />
  </Section>

const Experience = () => 
  <Section title="Experience">
    <Article
      title="UX Design Contractor"
      descriptor="Safe Build Int LTD"
      date="Feb 2018 - March 2018"
      children="I collaborated with both local and overseas UX professionals to conduct user research, on potential problems users will have with the Safe Build app"
    />
    <Article
      title="Supervisor"
      descriptor="Q's Cafe Bolton"
      date="Oct 2016 - May 2017"
      children="I recruited staff, promoted food standards that needed to be kept, at all times. I took extra care catering to the needs of all customers"
    />
  </Section>

const Projects = () => {
  const Title = ({ name }) =>
    <h3 style={{ marginBottom: 15, color: 'rgb(35,157,222)' }}>
      { name }
    </h3>
  return (
    <Section title="Personal Projects">
      <Article>
        <Link to="/developer-projects/javascript-inventory">
          <Title name="JavaScript Inventory" />
        </Link>
        Neatly packaged API compendium of all tools that I have used in the past. Conveniently catalogs and convey best practices, all readily available to my fellow peers . Uses the open-source docusaurus.io. based on the recently popular JAM stack.
      </Article>
      <Article>
        <Link to="/developer-projects/portfolio">
          <Title name="Personal Portfolio" />
        </Link>
        Built on the popular React static site generator Gatsby.js. This was used as it supported optimised lazy loading coupled with GraphQL, Gatsby-plugins to query and transform Markdown data, an elegant way to maintain a responsive, fast static site in the long-term.
      </Article>
      <Article>
        <Link to="/developer-projects/component-storybook">
          <Title name="Component Storybook" />
        </Link>
        Equipping Storybook.js API helped me to visualise the UI component construction process, a useful communication tool to have in my arsenal. It aided to bridge the gap for teams to speculate, design and develop individual UI components, test whether it holistically fits the business logic and improves the user experience.
      </Article>
      <Article>
        <Link to="/developer-projects/component-storybook">
          <Title name="Google Calculator Clone" />
        </Link>
        This project helped to bolster my unit testing skills, where Mocha.js was heavily depended on for trying as many conceivable mathematical operations as possible. The final build using HTML, CSS, vanilla JS, constantly Benchmarked against the real Google Calculator.
      </Article>
    </Section>
  )
}

const Volunteering = () =>
  <Section title="Volunteering">
    <Article
      title="Coder"
      descriptor="FreeCodeCamp Manchester"
      date="Every Week, since April 2017"
      children="Most recently, I promoted tool adoption to fellow members, that reduce communicational friction between designers and developers; with the overall focus to improve team work experience."
    />
    <Article
      title="Collaborator"
      descriptor="Manchester Coding Week"
      date="18th, 22nd - 25th September 2017"
      children="The team and I helped students code their first webpage. I encouraged students, to mentor, inspire and to provide emotional support to their peers."
    />
    <Article
      title="Strathclyde University Representative"
      date="September 2014 - June 2015"
      children="I worked with fellow engineering representatives, to resolve a dispute between the Chemical Engineering staff and students on how to best structure the course, for all stakeholders to get the most benefit."
    />
  </Section>

const WebDevelopment = () =>
  <Article
    title="Self Taught Web Developer"
    date="Since April 2017"
  >
    <div className={groupListStyle}>
      <div style={{ marginTop: '0em', marginLeft: 0 }}>
        <List label="HTML" />
        <List label="CSS" />
        <List label="JavaScript - ES3 - ES8 Standards" />
        <List label="React 16" />
        <List label="Redux" />
        <List label="React Testing - Jest, Enzyme" />
      </div>
      <div style={{ marginTop: '0em', marginLeft: 0 }}>
        <List label="Bash Terminal" />
        <List label="GraphQL - used with Gatsby" />
        <List label="Git" />
        <List label="Docker" />
        <List label="UI Testing Tool - Cypress.io" />
        <List label="UX/UI Fundamentals" />
      </div>
    </div>
  </Article >

const Alevel = () =>
  <Article
    title="A level"
    descriptor="St Bede's College Manchester - ABB"
    date="June 2013"
  >
  </Article>

const GCSE = () =>
  <Article
    title="GCSE"
    descriptor={`St Bede's College Manchester - 9 Grades A* - B`}
    date="June 2011"
  />

const Languages = () =>
  <Article
    title="4 Languages"
    descriptor="English, Vietnamese, Turkish, German"
  />

const Education = () =>
  <Section title="Education & Skills">
    <WebDevelopment />
    <Alevel />
    <GCSE />
    <Languages />
  </Section>

const Footer = () => {
  console.log(__dirname)
  return (
  <article style={{ marginBottom: '10vw'}}>
    <hr />
      <a style={{ letterSpacing: '0.03em'}} href="/static/Anthony%20Tran%20CV.bcc48b0c.pdf">
        Anthony Tran Curriculum Vitae PDF
      </a>
  </article>
  )
}

export default () =>
  <section>
    <PersonalStatement />
    <Experience />
    <Volunteering />
    <Projects />
    <Education />
    <Footer />
  </section>
