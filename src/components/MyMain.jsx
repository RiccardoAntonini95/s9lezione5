//qua va importato il footer perchè sta all'interno della main
import React from "react";
import { Container } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import MyFooter from "./MyFooter";

class MyMain extends React.Component{
  render(){
    return (
      <Container fluid className="px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="dropdown ms-4 mt-1">
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Genre
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Comedy
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Drama
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Thriller
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>
        {/* galleria1 */}
        {/* galleria2 */}
        {/* galleria3 */}
        <MyFooter />
      </Container>
    );
  }
}

export default MyMain