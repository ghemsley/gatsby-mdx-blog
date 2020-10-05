import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Nav from "../components/nav"
import "../css/sakura.css"
import "../css/global.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <header className="header">
          <h1 className="site-title">Blog</h1>
          <h2 className="subtitle">
            By{" "}
            <AniLink fade duration={0.25} to="/author" className="author">
              Graham Hemsley
            </AniLink>
          </h2>
          <Nav />
          {/*}
          <Tags />
          <Search />
  */}
        </header>
      </div>
      <div className="content">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
