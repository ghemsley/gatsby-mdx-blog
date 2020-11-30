import React from "react"
import kebabCase from "lodash/kebabCase"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { HiOutlineTag } from "react-icons/hi"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const TagsPage = ({
  data: {
    allMdx: { tagsGroup },
  },
}) => (
  <>
    <GatsbySeo
      title={"Tags"}
      description={"Blog post topics and categories"}
      openGraph={{
        title: "Tags",
        description: "Blog post topics and categories",
        url: `https://www.grahamhemsley.com/tags`,
        article: {
          authors: ["https://www.grahamhemsley.com/author"],
          tags: [
            ...tagsGroup.map(tag => {
              return tag.fieldValue
            }),
          ],
        },
        images: [
          {
            url: `https://www.grahamhemsley.com/preview.jpg`,
            width: 1280,
            height: 720,
            alt: "A blog by Graham Hemsley",
          },
        ],
      }}
    />
    <div>
      <div>
        <h1 className="page-header" id="page-header">
          Tags
        </h1>
        <ul>
          {tagsGroup.map((tag, i) => (
            <li className="tags-list" key={i}>
              <Link
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                title={tag.fieldValue}
              >
                <div className="tag-link">
                  <HiOutlineTag size="32" />
                  <p>{tag.fieldValue}</p>
                  <p className="tag-total-count">({tag.totalCount})</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
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
