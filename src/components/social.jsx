import React from "react"
import { SiGithub, SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si"
import { MdMailOutline } from "react-icons/md"

const iconSize = 32

const Social = () => {
  const socialLinks = [
    {
      name: "Github",
      url: "https://github.com/ghemsley",
      icon: (
        <SiGithub className="social-link-icon" size={iconSize} title="Github" />
      ),
    },

    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ghemsley",
      icon: (
        <SiLinkedin
          className="social-link-icon"
          size={iconSize}
          title="LinkedIn"
        />
      ),
    },

    {
      name: "Instagram",
      url: "https://www.instagram.com/graham_hemsley/",
      icon: (
        <SiInstagram
          className="social-link-icon"
          size={iconSize}
          title="Instagram"
        />
      ),
    },

    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCPBF8BLVVuLA5J8SQkejK7Q",
      icon: (
        <SiYoutube
          className="social-link-icon"
          size={iconSize}
          title="Youtube"
        />
      ),
    },

    {
      name: "Email",
      url: "mailto:ghemsley@protonmail.ch?subject=Blog&body=",
      icon: (
        <MdMailOutline
          className="social-link-icon"
          size={iconSize}
          title="Email"
        />
      ),
    },
  ]

  return (
    <div className="social-links">
      {socialLinks.map((social, i) => {
        return (
          <a
            href={social.url}
            rel="noopener noreferrer"
            target="_blank"
            className="social-link"
            title={social.name}
          >
            {social.icon}
          </a>
        )
      })}
    </div>
  )
}

export default Social
