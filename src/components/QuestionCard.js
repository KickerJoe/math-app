import {React, useState } from "react";
import { createLine } from '../functions';
import { Row, Col, Card, CardBody, 
        CardText, 
        CardSubtitle, Input,
        FormGroup, Form,
        Label, Button, CardHeader } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const QuestionCard = (props) => {
    
    
    const [question, setQuestion] = useState(createLine());
    console.log(question);

    //const line = createLine();
    const [ans, setAns] = useState(0);

    const getAns = (event) =>{
        setAns(event.target.value);
        console.log(event);
    };
  
    return(
        <div className='row'>
            <div className='col-sm-4'>
                <Card color='light'>
                    <CardHeader className='text-center' tag="h3">Distance Formula</CardHeader>
                    <CardBody>
                        <CardSubtitle className="mb-2 text-muted text-center" tag="h6"> Find the distance between the two points. </CardSubtitle>
                        <CardText>
                            {`Find the distance between the two points whose coordinates are (${question.point1.x} , ${question.point1.y}) and
                            (${question.point2.x} , ${question.point2.y}).`} 
                        </CardText>
                        <div>{ans}</div>
                        <Form inline>
                            <FormGroup>
                                <Label for = 'answer' hidden>Your answer</Label>
                                <Input id='answer' name='answer' type='number' 
                                    placeholder="Round to nearest whole number"
                                    onSubmit={getAns}/>
                            </FormGroup>
                            {' '}
                            <div className="text-center">
                                <Button color='primary'>Submit</Button>
                            </div>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default QuestionCard;