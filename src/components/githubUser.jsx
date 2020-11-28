import React from "react"

const GitHubUser = ({ user }) => {
  return (
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
          <li>
            <p>
              <strong>Repositories:</strong> {user.repositories.totalCount}
            </p>
          </li>

          {user.followers.totalCount > 0 && (
            <li>
              <p>{`Followers: ${user.followers.totalCount}`}</p>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default GitHubUser
