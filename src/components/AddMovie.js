import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addMovie } from '../js/Actions/MovieAction';

const AddMovie = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState("")
    const [url, setUrl] = useState("")
    const dispatch = useDispatch()
    const add = () => {
        dispatch(addMovie({id:Math.random,title,description,rate,posterUrl:url}))
        setTitle("")
        setRate("")
        setDescription("")
        setUrl("")
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Movie</Modal.Title>
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
                    <Button variant="primary" type="submit" onClick={() => {add();handleClose()}}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddMovie
