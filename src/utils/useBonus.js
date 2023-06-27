import { useEffect, useState } from "react"
import { AccessKey, BONUS_URL } from "../api"
import { checkResponse } from "../check-response"

export const useBonus=(accessToken)=> {
const [bonus, setBonus]=useState(null)
    const getBonus=()=>{      
        fetch(`${BONUS_URL}${accessToken}`, {
            method: "GET",    
            headers: {
              "Content-Type": "application/json",
              "AccessKey": AccessKey
            },   
          })
          .then(checkResponse)
          .then((res) => {
            console.log(res)
            setBonus(res.data)
          })
          .catch(( err ) => {
            console.log( err );   
        })}
   
    useEffect(() => {
        console.log(accessToken)
        if (accessToken) {
            getBonus()}
      }, [accessToken])    
    return bonus
}