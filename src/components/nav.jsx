import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Nav = () => {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { sourceInstanceName: { eq: "pages" }, name: { ne: "index" } }
      ) {
        edges {
          node {
            name
          }
        }
      }
    }
  `)
  return (
    <>
      <nav className="nav">
        <ul style={{ margin: "0", padding: "0", listStyle: "none" }}>
          <li style={{ display: "inline-block" }} key={0}>
            <AniLink fade duration={0.25} className="nav-button" to="/">
              Home
            </AniLink>
          </li>
          {data.allFile.edges.map((page, i) => {
            return (
              <li style={{ display: "inline-block" }} key={page.node.name}>
                <AniLink fade duration={0.25} to={`/${page.node.name}`} className="nav-button">
                  {page.node.name}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Nav
