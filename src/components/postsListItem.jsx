import React from "react"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const PostsListItem = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <div className="post-metadata">
        <div className="post-header">
          <div>
            <div className="title-container">
              <div className="title-container-nested">
                <AniLink fade duration={0.25} to={post.frontmatter.slug}>
                  <h2 className="post-title">{post.frontmatter.title}</h2>
                </AniLink>
              </div>
              <div className="tag-container">
                {post.frontmatter.tags &&
                  post.frontmatter.tags.map((tag, i) => {
                    return (
                      <AniLink fade duration={0.25} to={`/tags/${tag.name}`.toLowerCase()} key={tag.name}>
                        <p className="tag-link">{tag.name}</p>
                      </AniLink>
                    )
                  })}
              </div>
            </div>
            <p className="date">
              Published {post.frontmatter.date}
              {" by "}
              <AniLink fade duration={0.25} className="author-link" to={"/author"}>
                {post.frontmatter.author}
              </AniLink>
            </p>
          </div>
        </div>
      </div>
      {post.frontmatter.image && (
        <AniLink fade duration={0.25} to={post.frontmatter.slug}>
          <Img
            className="post-image"
            fluid={post.frontmatter.image.childImageSharp.fluid}
          />
        </AniLink>
      )}
      <div className="read-more-div">
        <AniLink fade duration={0.25} to={post.frontmatter.slug}>
          <p className="read-more">Read more</p>
        </AniLink>
      </div>
      <div className="post-preview">{post.excerpt}</div>
    </div>
  )
}

export default PostsListItem
