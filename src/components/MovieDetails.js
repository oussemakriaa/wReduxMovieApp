import React from 'react'
import { useSelector } from 'react-redux'
import {Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const MovieDetails = ({match}) => {
    // console.log(props)
    const movies = useSelector(state => state.movieReducer.movies)
    const movie = movies.find(elt => elt.id.toString() === match.params.id)
    console.log(movie)
    return (
        <Card style={{ width: '20rem',marginTop:"20px" }}>
        <Card.Img variant="top" src={movie.posterUrl} style={{height:"70%"}}/>
        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
                {movie.rate}
            </Card.Text>
        </Card.Body>
        <Link to ="/"><Button>Go back</Button></Link>
    </Card>
    )
}

export default MovieDetails
