import React from "react"
import Layout from "../components/Layout"
import AboutMe from "../components/AboutMe"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Image from "gatsby-image"

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image, date, readTime },
      body,
    },
  } = data
  return (
    <Layout>
      <div className="w-11/12 mx-auto flex md:flex-nowrap flex-wrap justify-between">
        <AboutMe />
        <div className="md:w-8/12 w-full mb-8 md:mt-0 mt-8">
          <Image fluid={image.childImageSharp.fluid} />
          <div className="flex justify-between my-2">
            <h1 className="text-lime-600 font-bold text-xl mb-2">{title}</h1>
            <h1 className="text-lime-600">Reading Time: {readTime}min</h1>
          </div>
          <MDXRenderer>{body}</MDXRenderer>
          <div className="bg-gradient-to-r from-lime-200 to-lime-500 h-0.5 w-full mt-8"></div>
          <div className="flex justify-between my-2">
            <h1>{date}</h1>
            <h1 className="bg-gray-200 text-gray-700 rounded-full px-4">
              {category}
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

// einzelne query für content mdx
export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        category
        title
        readTime
        date(formatString: "MMM Do, YYYY")
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
