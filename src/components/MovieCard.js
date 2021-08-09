import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteMovie } from '../js/Actions/MovieAction'
import EditMovie from './EditMovie'

const MovieCard = ({movie}) => {
    const dispatch = useDispatch()
    return (
        <Card style={{ width: '20rem',marginTop:"20px" }}>
            <Card.Img variant="top" src={movie.posterUrl} style={{height:"70%"}}/>
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>
                    {movie.rate}
                </Card.Text>
                <div className="d-flex justify-content-around">
                <Button variant="danger" onClick={() => dispatch(deleteMovie(movie.id))}>Delete</Button>
                <EditMovie movie={movie}/>
                <Link to={`/${movie.id}`}><Button>See Details</Button></Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default MovieCard
