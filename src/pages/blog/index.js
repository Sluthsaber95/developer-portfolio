import React from 'react'
import { filterYear } from '../../utils'

const Bold = ({ children }) =>
  <span style={{ fontWeight: 600, color: '#000' }}>{` ${children}`}</span>

const Header = ({ url, title }) =>
  <h3 style={{ marginBottom: 10 }}>
    <a href={url}>
      <span style={{ color: '#000', fontWeight: '600' }}>
        {title}
      </span>
    </a>
  </h3>

const Description = ({ excerpt }) =>
  <p style={{ margin: '0.5em 0' }}>{excerpt}</p>

const MetaData = ({ date, duration }) =>
  <div>
    <span><h4 style={{ display: 'inline' }}>{filterYear(date)}</h4></span>
    <span><h4 style={{ display: 'inline', marginLeft: '1em' }}>{duration} min read</h4></span>
  </div>

export default ({ data }) => {
  return (
    <section>
      <h1 style={{ display: 'inline-block', borderBottom: '1px solid' }}>
        Blog
      </h1>
      <p>Please note that all these blog posts are hosted on <a href="https://medium.com/@anthonytran.dev"><Bold>Medium</Bold></a>, where they are intended to be reached by a later audience - prefer to place under the scrutiny of the general public, to get some feedback.</p>
      <hr/>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <article key={node.id}>
          <Header url={node.frontmatter.url} title={node.frontmatter.title} />
          <Description excerpt={node.excerpt} />
          <MetaData date={node.frontmatter.date} duration={node.frontmatter.read_time} />
        </article>
      ))}
    </section>
  );
};

export const query = graphql`
  query BlogPostQuery{
    allMarkdownRemark( filter: { frontmatter: { type: { eq: "blog" }}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMM")
            type
            read_time
            url
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`;