import React, {useEffect} from 'react';
import CardItem from "./Card";
import {useContext} from "react";
import {userContext} from "../context/userContext";
import axios from "axios";
import {useState} from "react";
import './CSS/ListItems.css'
import NewItem from "./newItem";
import ModalWindow from "./Modal";

const ListItems = () => {
    const {user, setUser} = useContext(userContext)
    const [post, setPost] = useState([])
    const [isMountRender, setMountRender] = useState(true);

    useEffect(() => {
        axios({
            method: 'get', url: `http://localhost:8080/api/post?id=${user.id}`,
        }).then(function (response) {
            setPost(response.data)
        });

    }, [isMountRender,]);

    const deleteHandler = (id) => {
        axios({
            method: 'delete', url: `http://localhost:8080/api/post/${id}`,
        }).then(() => {
            const newList = post.filter((item) => item.id !== id);
            setPost(newList)
        }).catch(() => {
            alert("Post delete error")
        })

    }

    const putHandler = () => {
        post.map((i) => {
            if (i.id === tempPost.id) {
                if (i.title !== tempPost.title || i.content !== tempPost.content) {
                    axios({
                        method: 'put', url: `http://localhost:8080/api/post`,
                        data: {
                            id: tempPost.id,
                            title: tempPost.title,
                            content: tempPost.content
                        }
                    }).then(() => {
                        const newList = post.map((item) => {
                            if (item.id === tempPost.id) {
                                const updatedItem = {
                                    ...item,
                                    id: tempPost.id,
                                    title: tempPost.title,
                                    content: tempPost.content
                                };

                                return updatedItem;
                            }

                            return item;
                        });

                        setPost(newList);
                    }).catch(() => {
                        alert("Post update error")
                    })

                }
            }
        })
        setShow(false)
    }
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

    const savePost = (response) => {
        setPost([...post, {
            id: response.data.id,
            title: response.data.title,
            content: response.data.content
        }])
    }
    return (<>
        <div className="listItems">
            {post.map((item) => {
                return <CardItem id={item.id} key={item.id} title={item.title} content={item.content}
                                 deleteHandler={deleteHandler} handleShow={handleShow}/>
            })}
            <ModalWindow show={show} setShow={setShow} post={tempPost}
                         btnTitle={"Edit"} onChange={onChange} handleEdit={putHandler}/>
        </div>
        <NewItem savePost={savePost}/>
    </>);
};

export default ListItems;