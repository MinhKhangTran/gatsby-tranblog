import React from "react"
import Image from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "minh-khang-tran 1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const AboutMe = () => {
  const data = useStaticQuery(query)
  const {
    file: {
      childImageSharp: { fluid: image },
    },
  } = data
  return (
    <article className="md:w-1/4 w-full space-x-4 bg-white rounded-lg shadow-xl pt-6 px-6 pb-4 self-start">
      <div className="space-y-1 flex flex-col items-center">
        <div className="bg-gradient-to-tr from-lime-200 to-lime-500 p-0.5 inline-block rounded-full">
          <div className="bg-gray-50 block rounded-full p-1">
            <Image
              className="h-32 w-32 object-cover object-top rounded-full"
              fluid={image}
            />
          </div>
        </div>
      </div>

      <h1 className="text-center text-lime-400 text-xl">Minh Khang Tran</h1>
      <p className="text-gray-500 tracking-wider mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, expedita
        dignissimos! Quasi velit eum dignissimos ea sapiente. Modi, velit eos?
      </p>
      <div className="flex justify-center">
        <button className="mt-4 mb-2 bg-lime-400 text-white font-semibold tracking-wider rounded-full px-3 text-xl hover:bg-lime-600 hover:text-lime-200 transition transition-all duration-300 ease-in-out">
          <Link to="/newsletter">Follow</Link>
        </button>
      </div>
    </article>
  )
}

export default AboutMe
