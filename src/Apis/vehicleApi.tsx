const baseURL = `https://rywe6a9co8.execute-api.ap-southeast-1.amazonaws.com/api/matching`;


export async function getVehicles() {

  const data = await fetch(`${baseURL}/vehicle-type`).then((res) => res.json());
  return data;
}

export const getVehicle = async (uid: Number) => {
  const data = await fetch(`${baseURL}/vehicle-type/${uid}`).then((res) =>
    res.json()
  );
  return data;
};

export const updateVehicle = async (payload: any, uid: string) => {
  const bodyPayload = {...payload, uid: uid}
  const response = await fetch(`${baseURL}/vehicle-type/${uid}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyPayload),
  }).then(res => res.json()).catch(error => console.log(error))
  return response;
};

export const postVehicle = async (payload: any,) => {
  const bodyPayload = {...payload}
  const response = await fetch(`${baseURL}/vehicle-type`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyPayload),
  }).then(res => res.json()).catch(error => console.log(error))
  return response;
};
