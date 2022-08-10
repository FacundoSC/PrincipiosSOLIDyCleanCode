// Hay que agregar la dependencia de axios ```yarn add axios```
//import axios from 'axios';
import {HttpClient} from './02-open-close-c';

export class TodoService { 
    private httpCliente : HttpClient;

    constructor(httpCliente : HttpClient){
        this.httpCliente = httpCliente;
    }
    async getTodoItems() {
        const data =  await this.httpCliente.get('https://jsonplaceholder.typicode.com/todos/');
        return data; 
    }
}


export class PostService {
    private httpCliente : HttpClient;

    constructor(httpCliente : HttpClient){
        this.httpCliente = httpCliente;
    }

    async getPosts() {
        const data= await this.httpCliente.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {
    private httpCliente : HttpClient;

    constructor(httpCliente : HttpClient){
        this.httpCliente = httpCliente;
    }

    async getPhotos() {
        const data =  await this.httpCliente.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}