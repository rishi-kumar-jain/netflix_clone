import axios from "axios";

 //axios is like  postman
 //base url to make requests to the movie db
 const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});


// instance.get('/foo-bar');

//will look like this https://api.themoviedb.org/3/foo-bar

export default instance;