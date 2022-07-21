import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import './CSS/CardItem.css'
import {Form} from "react-bootstrap";
import {Modal} from "./Modal";

const CardItem = ({title,content}) => {
    const [isModal, setModal] = useState(false);
    const closeModal = (event) => {
        event.preventDefault();
        setModal(true)
    }
    return (
        <Card className="cardItem">
            <Card.Body>
                <Card.Title className="cardItem-title">{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
            </Card.Body>
            <Form className="cardItem-form">
                <Button variant="outline-success" type="submit" className="cardItem-edit"
                        id="edit" onClick={closeModal}>
                    Edit
                </Button>
                {/*<Modal*/}
                {/*    isVisible={isModal}*/}
                {/*    title="Modal Title"*/}
                {/*    content={<p>Add your content here</p>}*/}
                {/*    onClose={() => setModal(false)}*/}
                {/*    btnTitle="Edit"*/}
                {/*/>*/}
                <Button variant="outline-danger" className="cardItem-delete">
                    Delete
                </Button>
            </Form>
        </Card>
    );
};

export default CardItem;