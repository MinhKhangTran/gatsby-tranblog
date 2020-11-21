import React from "react"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import Articles from "../components/Articles"

const Home = ({ data }) => {
  const {
    allMdx: { nodes: posts },
  } = data
  console.log(posts)
  return (
    <Layout>
      <div className="w-11/12 mx-auto flex md:flex-no-wrap flex-wrap justify-between">
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
