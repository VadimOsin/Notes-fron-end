import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import './CSS/CardItem.css'
import {Form} from "react-bootstrap";


const CardItem = ({title, content,deleteHandler,id,handleShow}) => {

    return (
        <Card className="cardItem">
            <Card.Body>
                <Card.Title className="cardItem-title">{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
            <Form className="cardItem-form">
                <Button variant="outline-success"  className="cardItem-edit"
                        id="edit"
                onClick={()=>handleShow(id)}>
                    Edit
                </Button>
                <Button variant="outline-danger" className="cardItem-delete"
                onClick={()=>deleteHandler(id)}>
                    Delete
                </Button>
            </Form>

        </Card>
    );
};

export default CardItem;