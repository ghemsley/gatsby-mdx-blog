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
          <li key='home'>
            <Link className="nav-button" to="/" title="Home">
              Home
            </Link>
          </li>
          {data.allFile.edges.map((page, i) => {
            return (
              <li key={page.node.name}>
                <Link
                  to={`/${page.node.name}`}
                  className="nav-button"
                  title={
                    page.node.name.charAt(0).toUpperCase() + page.node.name.slice(1)
                  }
                >
                  {page.node.name}
                </Link>
              </li>
            )
          })}
          {/* <li key='rss'>
            <a className="nav-button" href="/rss/feed.xml" title="rss">
              RSS
            </a>
          </li> */}
        </ul>
      </nav>
    </>
  )
}

export default Nav
