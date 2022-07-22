import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import './CSS/CardItem.css'
import {Form} from "react-bootstrap";

const CardItem = ({deleteHandler,handleShow,post}) => {

    return (
        <Card className="cardItem">
            <Card.Body>
                <Card.Title className="cardItem-title">{post.title}</Card.Title>
                <Card.Text>
                    {post.content}
                </Card.Text>
            </Card.Body>
            <Form className="cardItem-form">
                <Button variant="outline-success"  className="cardItem-edit"
                        id="edit"
                onClick={()=>handleShow(post.id)}>
                    Edit
                </Button>
                <Button variant="outline-danger" className="cardItem-delete"
                onClick={()=>deleteHandler(post.id)}>
                    Delete
                </Button>
            </Form>

        </Card>
    );
};

export default CardItem;