import { PostService } from './05-dependency-b';
import{JsonDataBaseService,LocalDataBaseService ,WebAPIService} from './05-dependency-c';


// Main
(async () => {
  
    const postService = new PostService(new WebAPIService());

    const posts = await postService.getPosts();

    console.log({ posts })


})();