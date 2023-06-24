import { checkResponse } from "./check-response"


export function getBonus(setBonus) {
    const AccessToken=document.cookie;
fetch(`http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${AccessToken}`, {
    method: "GET",    
    headers: {
      "Content-Type": "application/json",
      "AccessKey": "891cf53c-01fc-4d74-a14c-592668b7a03c"
    },   
  })
  .then(checkResponse)
  .then((res) => {
    setBonus(res.data)
  })
  .catch(( err ) => {
    console.log( err );   
})
}