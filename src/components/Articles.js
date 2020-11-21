import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Articles = ({ posts }) => {
  return (
    <div className="md:w-8/12 w-full mb-8 mt-8 md:mt-0">
      <h1 className="text-xl text-gray-800  tracking-wider px-4">
        Latest Posts
      </h1>
      <article className="">
        {posts.map(post => {
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
            <div
              className="grid md:grid-cols-2 gap-4 grid-cols-1 bg-white rounded-lg p-4 my-4 shadow-lg hover:shadow-xl"
              key={id}
            >
              <div>
                <Image fluid={image} />
              </div>
              <div className="flex flex-col">
                <header className="flex justify-between">
                  <h1 className="text-lime-600 dark:text-lime-100 font-bold text-xl mb-2">
                    {title}
                  </h1>
                  <h1 className="text-lime-600">
                    Reading Time:
                    <span> {readTime} min</span>
                  </h1>
                </header>
                <p>{excerpt}</p>

                <div className="self-start">
                  <Link
                    to={`/posts/${slug}`}
                    className="my-2 text-gray-500 inline-block tracking-wider hover:text-gray-700"
                  >
                    Read more
                  </Link>
                </div>

                <div className="flex flex-col justify-end h-full">
                  <div className="bg-gradient-to-r from-lime-200 to-lime-500 h-0.5 w-full"></div>
                  <footer className="flex justify-between mt-1">
                    <h1 className="bg-gray-200 text-gray-700 rounded-full px-4">
                      {category}
                    </h1>
                    <h1>{date}</h1>
                  </footer>
                </div>
              </div>
            </div>
          )
        })}
      </article>
    </div>
  )
}

export default Articles
