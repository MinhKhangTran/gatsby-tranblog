import React from "react"

import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa"

export const navbar = [
  { id: 1, text: "home", url: "/" },
  { id: 2, text: "posts", url: "/posts" },
  { id: 3, text: "newsletter", url: "/newsletter" },
]

export const socials = [
  {
    id: 1,
    text: "instagram",
    url: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    id: 2,
    text: "twitter",
    url: "https://twitter.com/",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    text: "github",
    url: "https://github.com/",
    icon: <FaGithub />,
  },
]
