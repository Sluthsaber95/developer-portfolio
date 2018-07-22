import React from "react"
import { css } from "emotion"
import Link from "gatsby-link"

const mainHeader = css`
  display: inline-block;
  border-bottom: 1px solid;
`


export default ({ data }) => {
  const images = [
    require('./google-calculator/google-calc.png'),
    require('./youtube-video-player/video-rick-morty.png'),
  ];
  return (
    <div>
      <h1 className={mainHeader}>
        Amazing Pandas Eating Things
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }, i) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3 style={{ marginBottom: 10 }}>
              {node.frontmatter.title}{" "}
              <span style={{ color: '#BBB' }}>— {node.frontmatter.date}</span>
            </h3>
            <img src={images[i]} />
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query DevelopmentProjectQuery {
    allMarkdownRemark( filter: { frontmatter: { type: { eq: "development" }}}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            type
            img
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