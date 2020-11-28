import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

const InstagramLogo = require("../assets/images/pages/photos/instagram-logo.png")

const PhotosPage = ({ data }) => {
  return (
    <>
      <h1 className="page-header">Photos</h1>

      <div className="photos-container">
        {data.allGooglePhotosPhoto.nodes.map((node, index) => {
          return (
            <a
              href={node.photo.childImageSharp.original.src}
              title={node.filename}
            >
              <Img
                title={node.filename}
                alt={node.filename}
                fluid={node.photo.childImageSharp.fluid}
                className="google-photo"
              />
            </a>
          )
        })}
        <a
          href="https://www.instagram.com/graham_hemsley/"
          target="_blank"
          title="Instagram"
          rel="noopener noreferrer"
        >
          <div className="photos-instagram-logo">
            <img
              src={InstagramLogo}
              title="More on my Instagram"
              alt="More on my Instagram"
            />
          </div>
        </a>
      </div>
    </>
  )
}

export default PhotosPage

export const pageQuery = graphql`
  query GooglePhotosQuery {
    allGooglePhotosPhoto {
      totalCount
      nodes {
        filename
        photo {
          childImageSharp {
            fluid(maxWidth: 512, maxHeight: 512, quality: 75) {
              ...GatsbyImageSharpFluid_withWebp
            }
            original {
              src
            }
          }
        }
      }
    }
  }
`
