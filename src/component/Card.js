import React from "react"
import DoneIcon from "@material-ui/icons/Done"

const Card = ({ image, name, id }) => {
  const handleSelection = e => {
    const selElement = e.nativeEvent.path.filter(
      prop =>
        prop.className === "user-div" || prop.className === "user-div selected"
    )
    if (selElement.length !== 0) {
      if (selElement[0].classList.contains("selected")) {
        selElement[0].className = "user-div"
      } else {
        selElement[0].className = "user-div selected"
      }
    }
  }
  return (
    <>
      <div
        className="user-div"
        onClick={e => handleSelection(e)}
        id={id + "userrr"}
      >
        <div
          className="upper-part"
          style={{ background: `url(${image}) no-repeat center center/cover` }}
        >
          <span className="tick">
            <DoneIcon style={{ color: "#fff" }} />
          </span>
        </div>
        <div className="lower-part">
          <p>{name}</p>
        </div>
      </div>
    </>
  )
}

export default Card
