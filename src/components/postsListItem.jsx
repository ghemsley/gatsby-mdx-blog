import React from "react"
import Img from "gatsby-image"
import { HiOutlineTag } from "react-icons/hi"

const PostsListItem = ({ post }) => {
  return (
    <div className="post" key={post.id}>
      <div className="post-metadata">
        <div className="post-header">
          <div>
            <div className="title-container">
              <div className="title-container-nested">
                <a href={post.frontmatter.slug} title={post.frontmatter.title}>
                  <h2 className="post-title">{post.frontmatter.title}</h2>
                </a>
              </div>
              <div className="tag-container">
                {post.frontmatter.tags &&
                  post.frontmatter.tags.map((tag, i) => {
                    return (
                      <a
                        href={`/tags/${tag.name}`.toLowerCase()}
                        key={tag.name}
                        title={tag.name}
                      >
                        <div className="tag-link">
                          <HiOutlineTag size="24" />
                          {tag.name}
                        </div>
                      </a>
                    )
                  })}
              </div>
            </div>
            <p className="date">
              Published {post.frontmatter.date}
              {" by "}
              <a href={"/author"} title="author">
                {post.frontmatter.author}
              </a>
            </p>
          </div>
        </div>
      </div>
      {post.frontmatter.image && (
        <a href={post.frontmatter.slug}>
          <Img
            className="post-image"
            fluid={post.frontmatter.image.childImageSharp.fluid}
            title="Cover image"
          />
        </a>
      )}
      <div className="read-more-div">
        <a href={post.frontmatter.slug} title={post.frontmatter.title}>
          <p className="read-more">Read more</p>
        </a>
      </div>
      <div className="post-preview">{post.excerpt}</div>
    </div>
  )
}

export default PostsListItem
