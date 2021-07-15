import React, { Component, useState, useEffect } from "react"
import loadable from "@loadable/component"

export class Dog extends Component {
  constructor(props) {
    super()
    this.state = {
      adopted: props.adopted,
    }
  }

  handleButtonClick = () => {
    this.setState(prevState => ({ adopted: !prevState.adopted }))
  }

  render() {
    return (
      <div
        style={{
          background: "#153259",
          color: "whitesmoke",
          padding: "1em",
          width: "fit-content",
          borderRadius: "8px",
        }}
      >
        <h2>{this.props.name}</h2>
        <p>Breed: {this.props.breed}</p>
        <p>Age: {this.props.age}</p>
        <p>Adopted: {this.state.adopted.toString()}</p>
        <button onClick={this.handleButtonClick} style={{ padding: "1em" }}>
          Toggle Adoption
        </button>
      </div>
    )
  }
}

export const FunctionalDog = props => {
  const [adopted, setAdopted] = useState(false)
  const handleButtonClick = () => setAdopted(prevState => !prevState)

  return (
    <div
      style={{
        background: "#153259",
        color: "whitesmoke",
        padding: "1em",
        width: "fit-content",
        borderRadius: "8px",
      }}
    >
      <h2>{props.name}</h2>
      <p>Breed: {props.breed}</p>
      <p>Age: {props.age}</p>
      <p>Adopted: {adopted.toString()}</p>
      <button onClick={handleButtonClick} style={{ padding: "1em" }}>
        Toggle adoption
      </button>
    </div>
  )
}

export const AnnoyingAlertComponent = () => {
  const [active, setActive] = useState(false)

  const handleButtonClick = () => {
    setActive(prevState => !prevState)
  }

  useEffect(() => {
    let interval = null
    if (active) {
      alert("Hello!")
      interval = setInterval(() => {
        alert("Hello again!")
      }, 3000)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [active])

  return (
    <div
      style={{
        background: "#153259",
        width: "fit-content",
        padding: "1em",
        margin: "1em",
        borderRadius: "8px",
        color: "whitesmoke",
      }}
    >
      <p>Alert button</p>
      <p>Active: {active ? "Yes" : "No"}</p>
      <button onClick={handleButtonClick}>Activate</button>
    </div>
  )
}

export const MyTitleChanger = loadable(() => import("./loadable"))
