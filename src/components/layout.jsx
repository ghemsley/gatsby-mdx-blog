import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"
import Social from "./social"
import "../css/compiled/sakura.css"
import "../css/compiled/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout">
        <div className="sidebar">
          <div className="header">
            <Link to="/" className="blog-link" title="Home">
              Blog
            </Link>
            <h2 className="subtitle">
              By
              <Link to="/author" className="author" title="Author">
                Graham Hemsley
              </Link>
            </h2>
            <Social iconSize={40} />
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
