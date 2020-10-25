import React from "react"
import PostsListItem from "./postsListItem"

const PostsList = ({ location, data }) => {
  if (location.pathname === "/") {
    return (
      <>
        {data.allMdx.edges.map((node, i) => {
          if (node.node.frontmatter.featured) {
            return (
              <React.Fragment key="fragment">
                <h1 className="page-header" key="pinned">
                  Featured post
                </h1>
                <PostsListItem post={node.node} key={node.node.id} />
              </React.Fragment>
            )
          } else return null
        })}
        <h1 className="page-header">Latest posts</h1>
        {data.allMdx.edges.map((node, i) => {
          if (!node.node.frontmatter.featured) {
            return <PostsListItem post={node.node} key={node.node.id} />
          } else return null
        })}
      </>
    )
  } else {
    return (
      <>
        {data.allMdx.edges.map((node, i) => {
          return <PostsListItem post={node.node} key={node.node.id} />
        })}
      </>
    )
  }
}

export default PostsList
