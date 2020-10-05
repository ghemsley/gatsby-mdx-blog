import React from "react"
import PostsList from "../components/postsList"
import { useStaticQuery, graphql } from "gatsby"

const Home = ({ location }) => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/^(?!(.+pages))/gi" } }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 260)
            timeToRead
            slug
            frontmatter {
              title
              author
              image {
                childImageSharp {
                  fluid(maxWidth: 640) {
                    ...GatsbyImageSharpFluid_withWebp
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
              slug
              tags {
                name
              }
              date(formatString: "MMMM D, YYYY")
            }
          }
        }
      }
    }
  `)
  return <PostsList location={location} data={data} />
}

export default Home
