import React from 'react';
import ListItems from "./ListItems";
import {useSelector} from "react-redux";
import NewItem from "./newItem";


const Notes = () => {
    const post = useSelector(state => state);
    return (
        <div>
            <ListItems post={post}/>
        </div>
    );
};

export default Notes;