import React, { useEffect, useState } from "react"
import UpperComponent from "./UpperComponent"
import Cards from "./Cards"
import axios from "axios"
const Holder = () => {
  const [list, setList] = useState([])
  const [count, setCount] = useState(0)
  const fetchData = () => {
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json"
      )
      .then(response => {
        setList(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(list)
  const handleSort = e => {
    setCount(prev => prev + 1)
    if (e.target.value === "asc") {
      setList(
        list.sort(function (a, b) {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase()
          if (nameA < nameB)
            //sort string ascending
            return -1
          if (nameA > nameB) return 1
          return 0 //default return value (no sorting)
        })
      )
    } else if (e.target.value === "dsc") {
      setList(
        list.sort(function (a, b) {
          var nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase()
          if (nameA < nameB)
            //sort string ascending
            return 1
          if (nameA > nameB) return -1
          return 0 //default return value (no sorting)
        })
      )
    } else {
      fetchData()
    }
  }
  return (
    <div className="container">
      {console.log("not re-rendring")}
      <UpperComponent handleSort={handleSort} />
      <Cards list={list} count={count} />
    </div>
  )
}

export default Holder
