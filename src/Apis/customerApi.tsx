const baseURL = `https://rywe6a9co8.execute-api.ap-southeast-1.amazonaws.com/api/matching`;


export const getCustomers = async (payload: any) => {
    // remove key with undefined value
    Object.keys(payload).forEach((key) => payload[key] === undefined ? delete payload[key] : {})

    const data = await fetch(`${baseURL}/customer?${new URLSearchParams(payload)} `, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('access_token')}`
        },
    }).then((res) => res.json());
    
    return data;
}