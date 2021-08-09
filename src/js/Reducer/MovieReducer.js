import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../Types";


const initialState={
     movies:[
        {
            id:Math.random(),
            title: "peaky blinders",
            posterUrl: "//pbs.twimg.com/media/ETAoYTMXgAA01qD.jpg",
            rate: 4,
            description:
              "A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
            trailer: "https://www.youtube.com/embed/oVzVdvGIC7U",
          },
          {
            id:Math.random(),
            title: "Game of thrones",
            posterUrl:
              "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2015%2F11%2Fjs20-20tease.jpeg",
            rate: 4.7,
            description:
              "Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
            trailer: "https://www.youtube.com/embed/gcTkNV5Vg1E",
          },
          {
              id:Math.random(),
            title: "The good doctor",
            posterUrl: "https://pbs.twimg.com/media/EbNkkiTXsAc2o3Y.jpg",
            rate: 4.2,
            description:
              "Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
            trailer: "https://www.youtube.com/embed/msJggy8xtmI",
          },
     ]
}

const movieReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_MOVIE:
           return{...state,movies:[...state.movies,action.payload]} 
        case DELETE_MOVIE:
           return{...state,movies:state.movies.filter(el=>el.id!==action.payload)} 
         case EDIT_MOVIE:
             return{...state,movies:state.movies.map(el=>(el.id===action.payload.id)? {...el,...action.payload} :el )}   
    
        default:
            return state;
    }
}
export default movieReducer