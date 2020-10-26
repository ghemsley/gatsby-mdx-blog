import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Social from "./social"
import { Helmet } from "react-helmet-async"
import "../css/compiled/sakura.css"
import "../css/compiled/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://www.grahamhemsley.com/rss/feed.xml"
          rel="alternate"
          type="application/rss+xml"
          title="Blog RSS feed"
        />
      </Helmet>
      <div className="layout">
        <div className="sidebar">
          <div className="header">
            <h1 className="site-title">Blog</h1>
            <h2 className="subtitle">
              By{" "}
              <Link to="/author" className="author" title="Author">
                Graham Hemsley
              </Link>
            </h2>
            <Social />
            <Nav />
          </div>
        </div>
        <div className="content">
          <main>{children}</main>
        </div>
      </div>
    </>
  )
}

export default Layout
