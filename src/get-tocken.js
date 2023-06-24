import { checkResponse } from "./check-response"

const body = {
  idClient: "2c44d8c2-c89a-472e-aab3-9a8a29142315",
  accessToken: "",
  paramName: "device",
  paramValue: "7db72635-fd0a-46b9-813b-1627e3aa02ea",
  latitude: 0,
  longitude: 0,
  sourceQuery: 0
}

export function getToken() {
fetch("http://84.201.188.117:5021/api/v3/clients/accesstoken", {
    method: "POST",    
    headers: {
      "Content-Type": "application/json",
      "AccessKey": "891cf53c-01fc-4d74-a14c-592668b7a03c"
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