import React from "react"
import PostsList from "../components/postsList"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

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
            excerpt(pruneLength: 280)
            timeToRead
            slug
            frontmatter {
              title
              author
              image {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              slug
              tags {
                name
              }
              date(formatString: "MMMM D, YYYY")
              featured
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <GatsbySeo
        language="en"
        title="Blog"
        description={`A blog by Graham Hemsley`}
        openGraph={{
          type: "website",
          title: "Blog",
          locale: "en_US",
          site_name: "Blog",
          url: "https://www.grahamhemsley.com/",
          description: "A blog by Graham Hemsley",
          images: [
            {
              url: "https://www.grahamhemsley.com/preview.jpg",
              width: 1280,
              height: 720,
              alt: "Preview of a blog by Graham Hemsley",
            },
          ],
        }}
      />{" "}
      <PostsList location={location} data={data} />
    </>
  )
}

export default Home
