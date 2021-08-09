import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { editMovie } from '../js/Actions/MovieAction';

const EditMovie = ({movie}) => {
    // console.log('movie props',movie)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState(movie.title)
    const [description, setDescription] = useState(movie.description)
    const [rate, setRate] = useState(movie.rate)
    const [url, setUrl] = useState(movie.posterUrl)
    const dispatch = useDispatch()
    const edit = () => {
        dispatch(editMovie({id:movie.id,title,description,rate,posterUrl:url}))
        setTitle("")
        setRate("")
        setDescription("")
        setUrl("")
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => e.preventDefault()}>
                        Title:<input type="text" className="form-control" onChange={(e) =>setTitle(e.target.value)} value={ title} />
                        Description:<input type="text" className="form-control" onChange={ (e) => setDescription(e.target.value)} value={description } />
                        Rate:<input type="number" className="form-control" onChange={(e) => setRate(e.target.value) } value={rate } />
                        PosterUrl:<input type="url" className="form-control" onChange={(e) =>setUrl(e.target.value) } value={ url} />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={() => {edit();handleClose()}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditMovie
