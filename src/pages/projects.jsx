import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import GitHubUser from "../components/githubUser"
import GitHubProject from "../components/githubProject"

const ProjectsPage = () => {
  const data = useStaticQuery(graphql`
    query GithubQuery {
      allGithubData {
        nodes {
          data {
            user {
              bio
              location
              avatarUrl
              followers {
                totalCount
              }
              repositories {
                totalCount
              }
              login
              name
              pinnedItems {
                edges {
                  node {
                    createdAt(difference: "", fromNow: true)
                    description
                    forkCount
                    name
                    pushedAt(fromNow: true, difference: "")
                    url
                    languages {
                      nodes {
                        color
                        name
                      }
                    }
                    refs {
                      edges {
                        node {
                          target {
                            messageHeadline
                          }
                        }
                      }
                    }
                  }
                }
                totalCount
              }
            }
          }
        }
      }
    }
  `)
  const user = data.allGithubData.nodes[0].data.user
  return (
    <div className="projects-container">
      <GatsbySeo
        title={"Projects"}
        description={"Projects by the author"}
        openGraph={{
          title: "Projects",
          description: "Projects by the author",
          url: `https://www.grahamhemsley.com/projects`,
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
      <h1 className="page-header" id="page-header">
        Projects
      </h1>
      <h2>GitHub user info</h2>
      <GitHubUser user={user} />
      <h2 style={{ margin: "0px" }}>Projects</h2>
      <div className="projects">
        {user.pinnedItems.edges.map((project, index) => {
          return <GitHubProject project={project} key={index} />
        })}
      </div>
    </div>
  )
}

export default ProjectsPage
