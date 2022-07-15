import {React, useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


const SubRepButton = (props) => {
    
    
    return(
        <div className = {toggleTryAgain}>
            <Button onClick = {getAns} color={props.color} type="submit">{props.buttMess}</Button>
            <p>{props.message}</p>
        </div>
    );
};

export default SubRepButton;
