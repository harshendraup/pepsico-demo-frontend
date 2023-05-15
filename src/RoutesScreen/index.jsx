import { useState,useEffect } from "react"

const RoutScreen = () => {
    const [data,setRowData] =  useState([])
    const fetchUserData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setRowData(data)
          })
      }
      useEffect(() => {
        fetchUserData()
      }, [])
      console.log("rowdata",data)
    return(
        <>
        {data.map((item)=>{
            return(
                <h2 key={item.id}>{item.id}</h2>

            )
        })}
        </>
    )
}
export default RoutScreen;