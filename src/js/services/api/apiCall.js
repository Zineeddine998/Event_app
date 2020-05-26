const timeoutDuration = 100000;
export default function  apiCall(route , body ={}, method ='GET'){
    const request = new Promise((resolve ,reject) =>{
        const headers = new Headers({
            'Content-type': 'application/json',
        });
        //The request details object
        const requestDetails ={
            method,
            mode : 'cors',
            headers,
        };
        if(method !== 'GET' ) requestDetails.body = JSON.stringify(body);
        function handleErrors(response) {
            if(response.ok){
                return response.json();
                console.log('this is the result');
            }else {
                throw Error(response.statusText);

            }
        }
        fetch(`http://localhost:3000/${route}`, requestDetails)
            .then(handleErrors)
            .then(resolve)
            .catch(reject);
    });



    return request;
        //With Promise.race the 2 promises will run simultaneously and the result
        // of the main promise will change according to the first promise to return a result


}