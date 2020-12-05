import React from "react"
import Card from "./Card"
const Cards = ({ list }) => {
  return (
    <>
      <div className="all-cards">
        {list.map(item => {
          return (
            <Card
              key={item.id}
              name={item.name}
              id={item.id}
              image={item.Image}
            />
          )
        })}
      </div>
      <div className="btn-grp">
        <a
          href="/"
          className="primary-btn"
          onClick={e => {
            e.preventDefault()
          }}
        >
          {" "}
          Update{" "}
        </a>
        <a
          href="/"
          className="secondary-btn"
          onClick={e => {
            e.preventDefault()
          }}
        >
          {" "}
          Remove{" "}
        </a>
      </div>
    </>
  )
}

export default Cards
