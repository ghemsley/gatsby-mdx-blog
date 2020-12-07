import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

// @ts-ignore
const InstagramLogo = require("../assets/images/pages/photos/instagram-logo.png")

const PhotosPage = ({ data }) => {
  return (
    <>
      <GatsbySeo
        title={"Photos"}
        description={"Photos by the author"}
        openGraph={{
          title: "Photos",
          description: "Photos by the author",
          url: `https://www.grahamhemsley.com/photos`,
          article: {
            authors: ["https://www.grahamhemsley.com/author"],
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
      <h1 className="page-header">Photos</h1>

      <div className="photos-container">
        {data.allGooglePhotosPhoto.nodes.map((node, index) => {
          return (
            <a
              href={node.photo.childImageSharp.original.src}
              title={node.filename}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
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
            fluid(
              maxWidth: 512
              maxHeight: 512
              traceSVG: { color: "#153259" }
            ) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
              src
              srcSet
              tracedSVG
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
