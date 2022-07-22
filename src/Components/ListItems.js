import React, {useEffect} from 'react';
import CardItem from "./Card";
import {useContext} from "react";
import {userContext} from "../context/userContext";
import axios from "axios";
import {useState} from "react";
import './CSS/ListItems.css'
import ModalWindow from "./Modal";
import {store} from "../store/store";
import {putPost, getPost, deletePost} from '../store/actionCreators/postActionCreator'
import {useDispatch} from "react-redux";

const ListItems = ({post}) => {
        const {user, setUser} = useContext(userContext)
        const dispatch = useDispatch();
        const [show, setShow] = useState(false);
        const [tempPost, setTempPost] = useState({
            id: '', title: '', content: ''
        })
        const onChange = ({target: {name, value}}) => {
            setTempPost({...tempPost, [name]: value})
        };
        const handleShow = (id) => {
            setShow(true)
            post.map((i) => {
                if (i.id === id) {
                    setTempPost({
                        id: i.id,
                        title: i.title,
                        content: i.content
                    })
                }
            })

        };
        useEffect(() => {
            axios({
                method: 'get', url: `http://localhost:8080/api/post?id=${user.id}`,
            }).then(function (response) {
                dispatch(getPost(response.data))
            });
        }, []);

        const deleteHandler = (id) => {
            // axios({
            //     method: 'delete', url: `http://localhost:8080/api/post/${id}`,
            // }).then(() => {
            //     dispatch(deletePost(id))
            // }).catch(() => {
            //     alert("Post delete error")
            // })
            dispatch(deletePost(id))
        }

        const putHandler = () => {
            post.map((i) => {
                if (i.id === tempPost.id) {
                    if (i.title !== tempPost.title || i.content !== tempPost.content) {
                        // axios({
                        //     method: 'put', url: `http://localhost:8080/api/post`,
                        //     data: {
                        //         id: tempPost.id,
                        //         title: tempPost.title,
                        //         content: tempPost.content
                        //     }
                        // }).then(() => {
                        //     store.dispatch(putPost(tempPost))
                        // }).catch(() => {
                        //     alert("Post update error")
                        // })

                        store.dispatch(putPost(tempPost))
                    }
                }
            })
            setShow(false)
        }

        {
            if (post.length) {
                return (<>
                    <div className="listItems">
                        {post.map((item) => {
                            return <CardItem key={item.id} post={item}
                                             deleteHandler={deleteHandler} handleShow={handleShow}/>
                        })}
                        <ModalWindow show={show} setShow={setShow} post={tempPost}
                                     btnTitle={"Edit"} onChange={onChange} handleEdit={putHandler}/>
                    </div>
                </>);
            } else return null;
        }
    }

;

export default ListItems;