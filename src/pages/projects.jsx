import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbySeo } from "gatsby-plugin-next-seo"

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
      <div className="projects-user-info">
        <a
          href={`https://github.com/${user.login}`}
          title={`View ${user.login}'s profile on GitHub`}
        >
          <img
            src={user.avatarUrl}
            alt={`${user.name}`}
            className="projects-author-image"
          />
        </a>

        <div>
          <ul>
            <h3>
              <a
                href={`https://github.com/${user.login}`}
                title={`View ${user.login}'s profile on GitHub`}
              >
                {user.login}
              </a>
            </h3>
            <li>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
            </li>
            {user.location && (
              <li>
                <p>
                  <strong>Location:</strong> {user.location}
                </p>
              </li>
            )}
            {user.bio && (
              <li>
                <p>
                  <strong>Bio:</strong> {user.bio}
                </p>
              </li>
            )}
            <li><p><strong>Repositories:</strong> {user.repositories.totalCount}</p></li>

            {user.followers.totalCount > 0 && (
              <li>
                <p>{`Followers: ${user.followers.totalCount}`}</p>
              </li>
            )}
          </ul>
        </div>
      </div>
      <h2 style={{margin: '0px'}}>Projects</h2>
      <div className="projects">
        {user.pinnedItems.edges.map((project, index) => {
          return (
            <div key={index} className="project-card">
              <h4>
                <a href={project.node.url} title={project.node.name}>
                  {project.node.name}
                </a>
              </h4>
              <p>
                <strong>Description:</strong> {project.node.description}
              </p>
              <p>
                <strong>Created:</strong> {project.node.createdAt}
              </p>
              <p>
                <strong>Updated:</strong> {project.node.pushedAt}
              </p>
              <p>
                <strong>Last commit:</strong>{" "}
                <em>
                  {project.node.refs.edges[0].node.target.messageHeadline}
                </em>
              </p>
              <div>
                <p>
                  <strong>Languages:</strong>
                </p>
                {project.node.languages.nodes.map((language, index) => {
                  return (
                    <p style={{ color: language.color }}>{language.name}</p>
                  )
                })}
              </div>
              {project.node.forkCount > 0 && (
                <p>
                  <strong>Forks:</strong> {project.node.forkCount}
                </p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsPage
