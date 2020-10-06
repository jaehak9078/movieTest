
const GETMOVIE= "GETMOVIE";



const reducer = (state = initstate, action)=> {
    switch (action.type) {
        case GETMOVIE:
            return {
                fetch("http://10.100.102.2:8000/api/movie")
        .then((res)=>res.json())
        .then((res)=>setMovies(res));
            }
            break;
    
        default:
            break;
    }
}