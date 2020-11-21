import React from "react"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Articles from "../components/Articles"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

const Home = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  console.log(posts)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="w-11/12 mx-auto flex md:flex-nowrap flex-wrap justify-between">
        <AboutMe />
        <Articles posts={posts} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 5) {
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
export default Home
