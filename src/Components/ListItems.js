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
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {PATH} from "../config/config";

const ListItems = ({post}) => {
        const [show, setShow] = useState(false);
        const [tempPost, setTempPost] = useState({
            id: '', title: '', content: ''
        })
        const [query, setQuery] = useState("")
        const {user} = useContext(userContext)
        const dispatch = useDispatch();
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
                method: 'get', url: `${PATH}/post?id=${user.id}`,
            }).then(function (response) {
                dispatch(getPost(response.data))
            });
        }, []);

        const deleteHandler = (id) => {
            axios({
                method: 'delete', url: `${PATH}/post/${id}`,
            }).then(() => {
                dispatch(deletePost(id))
            }).catch(() => {
                alert("Post delete error")
            })
        }

        const putHandler = () => {
            post.map((i) => {
                if (i.id === tempPost.id) {
                    if (i.title !== tempPost.title || i.content !== tempPost.content) {
                        axios({
                            method: 'put', url: `${PATH}/post`,
                            data: {
                                id: tempPost.id,
                                title: tempPost.title,
                                content: tempPost.content
                            }
                        }).then(() => {
                            store.dispatch(putPost(tempPost))
                        }).catch(() => {
                            alert("Post update error")
                        })
                    }
                }
            })
            setShow(false)
        }

        {
            if (post.length) {
                return (<>
                    <Form className="d-flex listItems-search">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={event => setQuery(event.target.value)}
                        />
                        <Button variant="outline-success" className="listItems-search-btn">Search</Button>
                    </Form>
                    <div className="listItems">
                        {post.filter(item => {
                            if (query === '') {
                                return item;
                            } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
                                return item;
                            }
                        }).map((item) => {
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