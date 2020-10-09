import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PostNavigator from "../components/postNavigator"
import { HiOutlineTag } from "react-icons/hi"
import { S9comment } from "gatsby-plugin-social9-comment"

export default function Post({ location, data }) {
  return (
    <div className="blog-post-container">
      <h1 className="page-header">{data.mdx.frontmatter.title}</h1>
      <div className="blog-post">
        <div className="post-metadata">
          <time className="blog-post-meta-date">
            {data.mdx.frontmatter.date}
          </time>
          <div className="blog-post-tags-container">
            {data.mdx.frontmatter.tags.map((tag, i) => {
              return (
                <AniLink
                  fade
                  duration={0.25}
                  to={`/tags/${tag.name}`.toLowerCase()}
                  key={tag.name}
                  title={tag.name}
                >
                  <div className="tag-link">
                    <HiOutlineTag size="24" />
                    {tag.name}
                  </div>
                </AniLink>
              )
            })}
          </div>
        </div>
        <h6 className="blog-post-time-to-read">{`This post should take around ${data.mdx.timeToRead} minutes to read`}</h6>
        <Img
          className="blog-post-image"
          fluid={data.mdx.frontmatter.image.childImageSharp.fluid}
          title="Cover image"
        />
        <div className="blog-post-content">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
        <PostNavigator data={data} location={location} />
      </div>
      <S9comment />
    </div>
  )
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    allMdx(
      filter: { frontmatter: { slug: { regex: "/^/posts//i" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
          }
        }
        next {
          frontmatter {
            slug
            title
          }
        }
        previous {
          frontmatter {
            slug
            title
          }
        }
      }
    }
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        slug
        tags {
          name
        }
        title
      }
      timeToRead
      body
    }
  }
`
