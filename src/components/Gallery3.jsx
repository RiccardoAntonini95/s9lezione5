//va dentro main 
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery3 extends React.Component {
  render() {
    return (
      <div>  
        <h4>TERZA GALLERIA</h4>
        <Row xs={1} sm={2} lg={4} xl={6} className="mb-4 no-gutters text-center">
          <Col className="mb-2 px-1">
            <img className="img-fluid" src="assets/1.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src="assets/2.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src="assets/3.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src="assets/4.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src="assets/5.png" alt="movie picture" />
          </Col>
          <Col className="mb-2 px-1">
            <img className="img-fluid" src="assets/6.png" alt="movie picture" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Gallery3