import React,{useState} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap'
function MovieBox({poster_path,title,overview,release_date,vote_average}) {
    const API_IMG="https://image.tmdb.org/t/p/w500/";
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false)
  return (
    <div className="movieBox">
        <div className="container">
                <img src={API_IMG+poster_path}   className="image"/>
                <button className=" mt-2 rounded" onClick={handleShow} >Veiw More</button>
        </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <img src={API_IMG+poster_path}  style={{width:'200px'}} className="image"/>
                <h2>{title}</h2>
                <h4>IMDb: {vote_average}</h4>
                <h5>Release Date: {release_date}</h5>
                <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer >
            <button className=" mt-2 rounded" onClick={handleClose}>Close</button>
            </Modal.Footer>

        </Modal>
    </div>
  )
}

export default MovieBox

