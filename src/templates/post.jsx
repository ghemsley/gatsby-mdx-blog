import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Gitalk from "gatsby-plugin-gitalk"
import "gitalk/dist/gitalk.css"



export default function Post({ location, data }) {

  let gitalkConfig = {
    clientID: "ce414e2328c501a54daf",
    clientSecret: "c1b0935b57add86832ed48a1ba421d291231e22a",
    repo: "gatsby-mdx-blog",
    owner: "ghemsley",
    admin: ["ghemsley"],
    id: location.pathname,
    title: data.mdx.frontmatter.title,
    body: `Gitalk comments for post "${data.mdx.frontmatter.title}"`,
    language: "en",
    perPage: 20,
    flipMoveOptions: {
      staggerDelayBy: 50,
      appearAnimation: "elevator",
      enterAnimation: "elevator",
      leaveAnimation: "elevator",
    },
  }

  return (
    <div className="blog-post-container">
      <h1 className="page-header">{data.mdx.frontmatter.title}</h1>
      <div className="blog-post">
        <Img
          className="post-image"
          fluid={data.mdx.frontmatter.image.childImageSharp.fluid}
        />
        <h4 className="blog-post-header">
          Published {data.mdx.frontmatter.date}
        </h4>
        <h5
          className="blog-post-header"
          style={{ fontWeight: "normal" }}
        >{`This post should take around ${data.mdx.timeToRead} minutes to read`}</h5>
        <div className="blog-post-content">
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </div>
      </div>
      <Gitalk options={gitalkConfig} />
    </div>
  )
}

export const pageQuery = graphql`
  query PostQuery($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date(formatString: "MMMM D, YYYY")
        image {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid_withWebp
              ...GatsbyImageSharpFluidLimitPresentationSize
            }
          }
        }
        title
        slug
        tags {
          name
        }
      }
      body
      timeToRead
    }
  }
`
