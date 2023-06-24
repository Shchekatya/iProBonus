import { AccessKey, BONUS_URL } from "./api";
import { checkResponse } from "./check-response"


export function getBonus(setBonus) {
    const AccessToken=document.cookie;
fetch(`${BONUS_URL}${AccessToken}`, {
    method: "GET",    
    headers: {
      "Content-Type": "application/json",
      "AccessKey": AccessKey
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