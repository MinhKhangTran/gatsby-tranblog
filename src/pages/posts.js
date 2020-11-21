import React from "react"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Articles from "../components/Articles"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          slug
          title
          readTime
          category
          date(formatString: "MMM ,Do YYYY")
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
        id
      }
    }
  }
`
const Posts = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data

  return (
    <Layout>
      <SEO title="Posts" />
      <div className="w-11/12 mx-auto flex md:flex-no-wrap flex-wrap justify-between">
        <AboutMe />
        <Articles posts={posts} />
      </div>
    </Layout>
  )
}

export default Posts
