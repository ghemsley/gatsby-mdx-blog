import React, { useState } from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Valine from "gatsby-plugin-valine"
import { MdMailOutline } from "react-icons/md"

const ContactPage = () => {
  const [showEmail, setShowEmail] = useState(false)
  const reveal = () => setShowEmail(true)

  return (
    <>
      <GatsbySeo
        title="Contact"
        description="How to contact the author"
        openGraph={{
          title: "Contact",
          description: "How to contact the author",
          url: "https://www.grahamhemsley.com/contact",
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
      <h1 className="page-header">Contact</h1>
      <p>
        To get in touch with the author, feel free to send an email, or just
        leave a comment below.
      </p>
      <h2>Email</h2>
      <div
        className="contact-email-card"
        role="button"
        tabIndex={0}
        onClick={reveal}
        onKeyDown={reveal}
      >
        <div>
          <MdMailOutline
            className="contact-email-icon"
            size={64}
            title="Email"
          />
          {showEmail ? <p>ghemsley@protonmail.ch</p> : <p>Click to reveal</p>}
        </div>
      </div>
      <h2>Comments</h2>
      <div
        id='/contact'
        className="leancloud-visitors"
        data-flag-title='Contact'
      >
        <h2 className="post-meta-item-text">Visitors:</h2>
        <h3 className="leancloud-visitors-count"> </h3>
      </div>
      <Valine />
    </>
  )
}

export default ContactPage
