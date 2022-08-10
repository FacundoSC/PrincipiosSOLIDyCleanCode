//import  axios  from 'axios';

export class HttpClient{

  /* async get ( url : string){
    const {data, status} = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    return data;
   }*/


   async get ( url : string){
    const response = await fetch(url);
    const data = await response.json();
    return data;
   }
     

}