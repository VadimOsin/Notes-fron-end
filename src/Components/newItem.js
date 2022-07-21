import React, {useState, useContext} from 'react';
import './CSS/newItem.css'
import Button from 'react-bootstrap/Button';
import {userContext} from "../context/userContext";
import ModalWindow from "./Modal";
import axios from "axios";

const NewItem = ({setMountRender, isMountRender}) => {
    const {user} = useContext(userContext)
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [post, setPost] = useState({
        title: '',
        content: ''
    })
    const onChange = ({target: {name, value}}) => {
        setPost({...post, [name]: value})
    };
    const handleEdit = () => {
        axios({
            method: 'post',
            url: 'http://localhost:8080/api/post',
            data: {
                "title": post.title,
                "content": post.content,
                "userId": user.id
            }
        })
        if (isMountRender) {
            setMountRender(false)
        } else {
            setMountRender(true)
        }
        setPost({
            title: '',
            content: ''
        })
        setShow(false)
    }
    return (
        <div className="newItem">
            <Button variant="primary" className="newItem-add" onClick={handleShow}>+</Button>
            <ModalWindow show={show} setShow={setShow} content={post.content} post={post} title={post.title}
                         btnTitle={"Add"} onChange={onChange} handleEdit={handleEdit}/>

        </div>
    );
};

export default NewItem;