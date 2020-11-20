import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

const query = graphql`
  {
    allMdx(sort: { order: DESC, fields: frontmatter___date }, limit: 3) {
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

const Articles = () => {
  const {
    allMdx: { nodes },
  } = useStaticQuery(query)
  console.log(nodes)
  return (
    <div className="flex-grow ml-4 bg-white rounded-lg p-4">
      <h1>Latest Posts</h1>
      <article>
        {nodes.map(post => {
          const {
            frontmatter: {
              image: {
                childImageSharp: { fluid: image },
              },
              slug,
              title,
              readTime,
              category,
              date,
            },
            excerpt,
            id,
          } = post
          return (
            <div key={id}>
              <div>
                <Image fluid={image} />
              </div>
              <div>
                <h1>{title}</h1>
                <h1>{readTime}</h1>
                <h1>{category}</h1>
                <h1>{date}</h1>
              </div>
            </div>
          )
        })}
      </article>
    </div>
  )
}

export default Articles
