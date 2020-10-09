import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Nav from "./nav"
import Social from "./social"
import "../css/compiled/sakura.css"
import "../css/compiled/global.css"

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="header">
          <h1 className="site-title">Blog</h1>
          <h2 className="subtitle">
            By{" "}
            <AniLink
              fade
              duration={0.25}
              to="/author"
              className="author"
              title="Author"
            >
              Graham Hemsley
            </AniLink>
          </h2>
          <Social />
          <Nav />
        </div>
      </div>
      <div className="content">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
