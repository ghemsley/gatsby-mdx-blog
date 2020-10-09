import React from "react"
import kebabCase from "lodash/kebabCase"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { HiOutlineTag } from "react-icons/hi"

const TagsPage = ({
  data: {
    allMdx: { tagsGroup },
  },
}) => (
  <div>
    <div>
      <h1 className="page-header" id='page-header'>Tags</h1>
      <ul>
        {tagsGroup.map(tag => (
          <li className="tags-list" key={tag.fieldValue}>
            <AniLink
              fade
              duration={0.25}
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              title={tag.fieldValue}
            >
              <div className="tag-link">
                <HiOutlineTag size="24" />
                <p>{tag.fieldValue}</p>
                <p className="tag-total-count">({tag.totalCount})</p>
              </div>
            </AniLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default TagsPage

export const pageQuery = graphql`
  {
    allMdx {
      tagsGroup: group(field: frontmatter___tags___name) {
        fieldValue
        totalCount
      }
    }
  }
`
