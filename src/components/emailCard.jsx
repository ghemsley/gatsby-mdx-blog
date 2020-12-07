import React, { useState } from "react"
import { MdMailOutline } from "react-icons/md"

const EmailCard = () => {
  const [showEmail, setShowEmail] = useState(false)
  const reveal = () => setShowEmail(true)
  return (
    <div
      className="contact-email-card"
      role="button"
      tabIndex={0}
      onClick={reveal}
      onKeyDown={reveal}
    >
      <div>
        <MdMailOutline className="contact-email-icon" size={64} title="Email" />
        {showEmail ? <p>ghemsley@protonmail.ch</p> : <p>Click to reveal</p>}
      </div>
    </div>
  )
}

export default EmailCard
