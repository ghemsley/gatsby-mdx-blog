import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

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
            <Link className="nav-button" to="/" title='home'>
              Home
            </Link>
          </li>
          {data.allFile.edges.map((page, i) => {
            return (
              <li style={{ display: "inline-block" }} key={page.node.name}>
                <Link to={`/${page.node.name}`} className="nav-button" title={page.node.name}>
                  {page.node.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default Nav
