import React, {useEffect} from 'react';
import CardItem from "./Card";
import {useContext} from "react";
import {userContext} from "../context/userContext";
import axios from "axios";
import {useState} from "react";
import './CSS/ListItems.css'
import NewItem from "./newItem";

const ListItems = () => {
    const {user, setUser} = useContext(userContext)
    const [post, setPost] = useState([])
    const [isMountRender, setMountRender] = useState(true);

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:8080/api/post?id=${user.id}`,
        }).then(function (response) {
            setPost(response.data)
        });
    }, [isMountRender]);

    return (<>
            <div className="listItems">
                {
                    post.map((item) => {
                        return <CardItem key={item.id} title={item.title} content={item.content}/>
                    })
                }
            </div>
            <NewItem setMountRender={setMountRender} isMountRender={isMountRender}/>
        </>
    );
};

export default ListItems;