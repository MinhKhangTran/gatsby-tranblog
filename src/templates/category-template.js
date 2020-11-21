import React from "react"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import { graphql } from "gatsby"

import Articles from "../components/Articles"

const CategoryTemplate = props => {
  console.log(props)
  const {
    allMdx: { nodes: posts },
  } = props.data
  return (
    <Layout>
      <div className="w-11/12 mx-auto flex md:flex-nowrap flex-wrap justify-between">
        <AboutMe />
        <Articles posts={posts} />
      </div>
    </Layout>
  )
}

// get single pages with unique id category
export const query = graphql`
  query GetCategories($category: String) {
    allMdx(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          category
          date(formatString: "MMM Do, YYYY")
          readTime
          title
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        excerpt
      }
    }
  }
`

export default CategoryTemplate
