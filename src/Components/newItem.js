import React, {useState, useContext} from 'react';
import './CSS/newItem.css'
import Button from 'react-bootstrap/Button';
import {userContext} from "../context/userContext";
import ModalWindow from "./Modal";
import axios from "axios";

const NewItem = ({savePost}) => {
    const {user} = useContext(userContext)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [tempNewPost, setTempNewPost] = useState({
        title: '',
        content: ''
    })
    const onChange = ({target: {name, value}}) => {
        setTempNewPost({...tempNewPost, [name]: value})
    };
    const handleEdit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/post',
            data: {
                "title": tempNewPost.title,
                "content": tempNewPost.content,
                "userId": user.id
            }
        }).then((response) => {
            savePost(response)
        }).catch((error) => {
            alert("Create new post Error" + error)
        })

        setTempNewPost({
            title: '',
            content: ''
        })
        setShow(false)
    }
    return (
        <div className="newItem">
            <Button variant="primary" className="newItem-add" onClick={handleShow}>+</Button>
            <ModalWindow show={show} setShow={setShow} content={tempNewPost.content} post={tempNewPost}
                         btnTitle={"Add"} onChange={onChange} handleEdit={handleEdit}/>

        </div>
    );
};

export default NewItem;