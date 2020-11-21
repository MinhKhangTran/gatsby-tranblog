import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export const query = graphql`
  {
    allMdx {
      distinct(field: frontmatter___category)
    }
  }
`

const Categories = () => {
  const {
    allMdx: { distinct: categories },
  } = useStaticQuery(query)
  return (
    <div className="breite mt-4 mb-6 space-x-8 text-xl text-gray-800 p-2 tracking-wider">
      {categories.map((category, index) => {
        return (
          <Link to={`/${category}`} key={index}>
            {category}
          </Link>
        )
      })}
    </div>
  )
}

export default Categories
