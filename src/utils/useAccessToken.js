import { useEffect, useState } from "react"
import { AccessKey, ClientID, DeviceID, TOCKEN_URL } from "../api"
import { checkResponse } from "../check-response"

const body = {
    idClient: ClientID,
    accessToken: "",
    paramName: "device",
    paramValue: DeviceID,
    latitude: 0,
    longitude: 0,
    sourceQuery: 0
  }

export const useAccessToken=()=> {
    const [token, setToken]=useState('')   
    const getToken=()=> {
        fetch(TOCKEN_URL, {
            method: "POST",    
            headers: {
              "Content-Type": "application/json",
              "AccessKey": AccessKey
            },
            body: JSON.stringify(body),
          })
          .then(checkResponse)
          .then((res) => {         
            setToken(res.accessToken)  
          })
          .catch(( err ) => {
            console.log( err );
        })
    }
   
    useEffect(() => {
        getToken()
      }, [])   
return token
}