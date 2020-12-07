import React from "react"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import Valine from "gatsby-plugin-valine"
import EmailCard from "../components/emailCard"

const ContactPage = () => {
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
        To get in touch with the author, feel free to send an email, or you can
        leave a public comment below.
      </p>
      <h2>Email</h2>
      <EmailCard />
      <h2>Comments</h2>
      <Valine />
    </>
  )
}

export default ContactPage
