import React from "react";
import { ListGroupItem } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

class SingleComment extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
    return(
        <ListGroup.Item variant="light" key={this.props.arrCommenti._id}>
            Comment: {this.props.arrCommenti.comment}
            Rate: {this.props.arrCommenti.rate} stars
            Author: {this.props.arrCommenti.author}
        </ListGroup.Item>
    )
   }
}

export default SingleComment;