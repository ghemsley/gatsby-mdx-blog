import React from "react"

const GitHubProject = ({ project }) => {
  return (
    <div className="project-card">
      <h4>
        <a
          href={project.node.url}
          title={project.node.name}
          rel="noopener noreferrer"
          target="_blank"
        >
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
        <em>{project.node.refs.edges[0].node.target.messageHeadline}</em>
      </p>
      <div>
        <p>
          <strong>Languages:</strong>
        </p>
        {project.node.languages.nodes.map((language, index) => {
          return (
            <p style={{ color: language.color }} key={index}>
              {language.name}
            </p>
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
}

export default GitHubProject
