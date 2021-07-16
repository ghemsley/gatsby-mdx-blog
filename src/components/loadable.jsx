import React, { useState, useEffect } from 'react'

const TitleChanger = () => {
  const [title, setTitle] = useState(document.title)
  const [value, setValue] = useState("")

  useEffect(() => {
    document.title = title
  }, [title])

  const handleSubmit = event => {
    event.preventDefault()
    setTitle(value)
  }

  return (
    <div
      style={{
        background: "#153259",
        color: "whitesmoke",
        padding: "1em",
        width: "fit-content",
        borderRadius: "8px",
        margin: "1em",
      }}
    >
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="Title">Change document title</label>
        <input
          name="Title"
          type="text"
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <button type="submit" style={{ margin: "8px" }}>
          Submit
        </button>
      </form>
      <p style={{ margin: "0px" }}>Current title: {title}</p>
    </div>
  )
}

export default TitleChanger
