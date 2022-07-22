import React, {useState, useContext} from 'react';
import './CSS/newItem.css'
import Button from 'react-bootstrap/Button';
import {userContext} from "../context/userContext";
import ModalWindow from "./Modal";
import axios from "axios";
import {useDispatch} from "react-redux";
import {addPost} from "../store/actionCreators/postActionCreator";
import {PATH} from "../config/config";

const NewItem = () => {
    const dispatch = useDispatch()
    const {user} = useContext(userContext)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [newPost, setNewPost] = useState({
        title: '',
        content: ''
    })
    const onChange = ({target: {name, value}}) => {
        setNewPost({...newPost, [name]: value})
    };
    const addNewPost = () => {
        axios({
            method: 'post',
            url: `${PATH}/post`,
            data: {
                "title": newPost.title,
                "content": newPost.content,
                "userId": user.id
            }
        }).then((response) => {
            dispatch(addPost({
                id: response.data.id,
                title: response.data.title,
                content: response.data.content
            }))
        }).catch((error) => {
            alert("Create new post Error" + error)
        })
        setNewPost({
            title: '',
            content: ''
        })
        setShow(false)
    }
    return (
        <div className="newItem">
            <Button variant="primary" className="newItem-add" onClick={handleShow}>+</Button>
            <ModalWindow show={show} setShow={setShow} content={newPost.content} post={newPost}
                         btnTitle={"Add"} onChange={onChange} handleEdit={addNewPost}/>
        </div>
    );
};

export default NewItem;