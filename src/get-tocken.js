import { AccessKey, ClientID, DeviceID, TOCKEN_URL } from "./api";
import { checkResponse } from "./check-response"

const body = {
  idClient: ClientID,
  accessToken: "",
  paramName: "device",
  paramValue: DeviceID,
  latitude: 0,
  longitude: 0,
  sourceQuery: 0
}

export function getToken() {
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
    document.cookie=res.accessToken;  
  })
  .catch(( err ) => {
    console.log( err );
})
}