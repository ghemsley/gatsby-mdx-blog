import React from "react"
import { graphql } from "gatsby"
import PostsList from "../components/postsList"
import { GatsbySeo } from "gatsby-plugin-next-seo"

export default function Tag({ location, pageContext, data }) {
  const { tag } = pageContext
  const { totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <>
      <GatsbySeo
        title={tag}
        description={`Pages tagged with ${tag}`}
        openGraph={{
          title: tag,
          description: `Pages tagged with ${tag}`,
          url: `https://www.grahamhemsley.com${location.pathname}`,
          article: {
            authors: ["https://www.grahamhemsley.com/author"],
            tags: [tag],
          },
          images: [
            {
              url: `https://www.grahamhemsley.com/preview.jpg`,
              width: 1280,
              height: 720,
              alt: 'A blog by Graham Hemsley',
            },
          ],
        }}
      />
      <h1 className="page-header" id="page-header">
        {tagHeader}
      </h1>
      <PostsList location={location} data={data} />
    </>
  )
}

export const pageQuery = graphql`
  query TagQuery($tag: String!) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        frontmatter: { tags: { elemMatch: { name: { eq: $tag } } } }
        fileAbsolutePath: { regex: "/^(?!(.+pages))/gi" }
      }
    ) {
      edges {
        node {
          id
          slug
          timeToRead
          excerpt(pruneLength: 280)
          frontmatter {
            author
            date(formatString: "MMMM D, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            tags {
              name
            }
            title
            slug
          }
        }
      }
      totalCount
    }
  }
`
