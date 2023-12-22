//va dentro main 
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Gallery1 extends React.Component {
  render() {
    return (
      <div>  
        <h4>PRIMA GALLERIA</h4>
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

export default Gallery1







{/* <h4>PRIMA GALLERIA</h4>
<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
  <div className="col mb-2 px-1">
    <img className="img-fluid" src="assets/1.png" alt="movie picture" />
  </div>
  <div className="col mb-2 px-1">
    <img className="img-fluid" src="assets/2.png" alt="movie picture" />
  </div>
  <div className="col mb-2 px-1">
    <img className="img-fluid" src="assets/3.png" alt="movie picture" />
  </div>
  <div className="col mb-2 px-1">
    <img className="img-fluid" src="assets/4.png" alt="movie picture" />
  </div>
  <div className="col mb-2 px-1">
    <img className="img-fluid" src="assets/5.png" alt="movie picture" />
  </div>
  <div className="col mb-2 px-1">
    <img className="img-fluid" src="assets/6.png" alt="movie picture" />
  </div>
</div> */}