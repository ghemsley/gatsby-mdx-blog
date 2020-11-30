import React from "react"

const GitHubUser = ({ user }) => {
  return (
    <div className="projects-user-info">
      <a
        href={`https://github.com/${user.login}`}
        title={`View ${user.login}'s profile on GitHub`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          src={user.avatarUrl}
          alt={`${user.name}`}
          className="projects-author-image"
        />
      </a>
      <div>
        <ul>
          <h3 key={0}>
            <a
              href={`https://github.com/${user.login}`}
              title={`View ${user.login}'s profile on GitHub`}
              rel="noopener noreferrer"
              target="_blank"
            >
              {user.login}
            </a>
          </h3>
          <li key={1}>
            <p>
              <strong>Name:</strong> {user.name}
            </p>
          </li>
          {user.location && (
            <li key={2}>
              <p>
                <strong>Location:</strong> {user.location}
              </p>
            </li>
          )}
          {user.bio && (
            <li key={3}>
              <p>
                <strong>Bio:</strong> {user.bio}
              </p>
            </li>
          )}
          <li key={4}>
            <p>
              <strong>Repositories:</strong> {user.repositories.totalCount}
            </p>
          </li>
          {user.followers.totalCount > 0 && (
            <li key={5}>
              <p>{`Followers: ${user.followers.totalCount}`}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default GitHubUser
