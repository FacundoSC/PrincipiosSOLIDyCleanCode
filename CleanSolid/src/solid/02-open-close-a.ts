import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttpClient } from './02-open-close-c';

(async () => {


    const todoService = new TodoService(new HttpClient());
    const postService = new PostService(new HttpClient());
    const photosService = new PhotosService(new HttpClient());

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();