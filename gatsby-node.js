const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const postTemplate = path.resolve("src/templates/post.jsx")
  const tagTemplate = path.resolve("src/templates/tag.jsx")

  const result = await graphql(`
   {
    allMdx(filter: {fileAbsolutePath: {regex: "/^(?!(.+pages))/gi"}}) {
      tagsGroup: group(field: frontmatter___tags___name) {
        fieldValue
      }
      postsMdx: edges {
        node {
          frontmatter {
            slug
          }
        }
      }
    }
  }
  `)

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMdx.postsMdx

  // Create post detail pages
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {
        // additional data can be passed via context
        slug: node.frontmatter.slug,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.allMdx.tagsGroup
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}
