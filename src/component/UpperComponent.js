import React from "react"
import dp from "../assets/anoy.jpg"
import CameraAltIcon from "@material-ui/icons/CameraAlt"
const UpperComponent = ({ handleSort }) => {
  const loadImageHandler = e => {
    let renderedImg = document.getElementById("renImg")
    console.log(e)
    renderedImg.src = URL.createObjectURL(e.target.files[0])
  }

  return (
    <div className="outer-form">
      <h1>Create Group</h1>
      <div className="inner-form">
        <div className="left-pic">
          <img src={dp} alt="userImage" id="renImg" />
        </div>
        <div className="right-portion">
          <p className="label-box">Name</p>
          <div className="input-box">
            <input
              type="text"
              name="groupName"
              id="groupName"
              placeholder="group name"
            />
          </div>
          <p className="label-box">Description</p>
          <div className="input-box">
            <input
              type="text"
              name="groupDescription"
              id="groupDescription"
              placeholder="group description"
            />
          </div>
        </div>
      </div>
      <div className="lower-upper">
        <div className="upload-div">
          <div className="grp-logo-btn">
            {" "}
            <CameraAltIcon style={{ marginRight: ".5rem" }} />{" "}
            <span>Group Logo</span>
          </div>
          <div className="grp-logo-btn">
            {" "}
            <p>
              <label htmlFor="image" className="lable-upload">
                <span className="link">Click Here </span>to change group DP
              </label>
              <input
                className="inputfile"
                type="file"
                accept="image/*"
                name="image"
                id="file"
                onChange={e => loadImageHandler(e)}
              />
            </p>
          </div>
        </div>
        <div className="select">
          <select name="cars" id="cars" onChange={e => handleSort(e)}>
            <option value="">Sort</option>
            <option value="asc">Ascending Names</option>
            <option value="dsc">Descending Names</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default UpperComponent
