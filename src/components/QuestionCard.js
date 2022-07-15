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
    
    const [ans, setAns] = useState("");

    
    const [toggleWrong, setToggleWrong] = useState("d-none");
    const [toggleCorrect, setToggleCorrect] = useState("d-none");
    const [onOff, setOnOff] = useState(true);
    const [butColor, setButColor] = useState("primary");
    const [butText, setButText] = useState("Submit");

    const handleInput = (event) => {
        setAns(event.target.value);
    };

    const checkAns = (event) =>{
        event.preventDefault();

        switch(ans){
            case (question.distance):
                return (
                    setButColor("success"),
                    setToggleCorrect(""),
                    setButText("Yes!"),
                    setAns("")
                    
                );
            case (""):
                return (
                    setButColor("primary"),
                    setToggleCorrect("d-none"),
                    setToggleWrong("d-none"),
                    setButText("Submit"),
                    setAns(null)
                    
                );
            default:
                return(
                    setButColor("danger"),
                    setToggleWrong(""),
                    setButText("Try Again"),
                    setAns(null)
                    
                );

        }       
        
        /* if(question.distance === parseInt(ans)){
           setButColor("success");
           setToggleCorrect("");
           setButText("Yes!");
           event.target.value = "";
           
            
        }
        else if(question.distance !== parseInt(ans)){
            setButColor("danger");
            setToggleWrong("");
            setButText("Try Agin");
            event.target.value = "";

        } */
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`Yes!`);
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
                        <div>{question.distance}</div>
                        <div>{ans}</div>
                        <Form inline onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label htmlFor = 'answer' hidden>Your answer</Label>
                                <Input id='answer' name='answer' type='number' 
                                    placeholder="Round to nearest whole number"
                                    value ={ans} onChange = {handleInput}
                                />
                            </FormGroup>
                            {' '}
                            <div className="text-center" >
                                <Button  onClick = {checkAns} color={butColor} type="submit">{butText}</Button>
                                <div className = {toggleWrong}>
                                    <p>Incorrect. Please Try Again.</p>
                                </div>
                                <div className = {toggleCorrect}>
                                    <p>Correct. Would you like another question?</p>
                                </div>
                            </div>
                        </Form>
                        
                    </CardBody>
                </Card>
            </div>
        </div>
    );
};

export default QuestionCard;