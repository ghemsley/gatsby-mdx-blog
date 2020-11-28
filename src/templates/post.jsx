import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { Link } from "gatsby"
import PostNavigator from "../components/postNavigator"
import { HiOutlineTag } from "react-icons/hi"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Valine from "gatsby-plugin-valine"

export default function Post({ location, data }) {
  return (
    <>
      <GatsbySeo
        title={data.mdx.frontmatter.title}
        description={data.mdx.excerpt}
        openGraph={{
          type: "article",
          title: data.mdx.frontmatter.title,
          description: data.mdx.frontmatter.excerpt,
          url: `https://www.grahamhemsley.com${data.mdx.frontmatter.slug}`,
          article: {
            publishedTime: data.mdx.frontmatter.date,
            authors: [`https://www.grahamhemsley.com/author`],
            tags: [
              ...data.mdx.frontmatter.tags.map(tag => {
                return tag.name
              }),
            ],
          },
          images: [
            {
              url: `https://www.grahamhemsley.com${data.mdx.frontmatter.image.childImageSharp.fluid.src}`,
              width: 960,
              height: 640,
              alt: data.mdx.frontmatter.title,
            },
          ],
        }}
      />
      <div className="blog-post-container">
        <h1 className="page-header" id="page-header">
          {data.mdx.frontmatter.title}
        </h1>
        <div className="blog-post">
          <div className="post-metadata">
            <time className="blog-post-meta-date">
              {data.mdx.frontmatter.date}
            </time>
            <div className="blog-post-tags-container">
              {data.mdx.frontmatter.tags.map((tag, i) => {
                return (
                  <Link
                    to={`/tags/${tag.name}`.toLowerCase()}
                    key={tag.name}
                    title={tag.name}
                  >
                    <div className="tag-link">
                      <HiOutlineTag size="24" />
                      {tag.name}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
          <p className="blog-post-time-to-read">{`This post should take around ${data.mdx.timeToRead} minutes to read`}</p>
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
        <div
          id={data.mdx.frontmatter.slug}
          className="leancloud-visitors"
          data-flag-title={data.mdx.frontmatter.title}
        >
          <h2 className="post-meta-item-text">Readers:</h2>
          <h3 className="leancloud-visitors-count"> </h3>
        </div>
      </div>
      <Valine />
    </>
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
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp
              src
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
      excerpt
    }
  }
`
