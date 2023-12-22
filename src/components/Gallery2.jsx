import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class Gallery2 extends React.Component {
    state = {
        filmArr : [] 
    }
    getFilms = async () => {
        try{
            const response = await fetch("http://www.omdbapi.com/?apikey=4282f56b&s=avengers")
            if(response.ok){
                const data = await response.json()
                this.setState({filmArr: data.Search})
                console.log("sono in get films", data)
                console.log("sono data.search", data.Search)
                console.log("questo è state", this.state)
            } else {
                console.log("Errore del fetch")
            }
        } catch(err){
            console.log("Errore:", err)
        }
    }

    componentDidMount(){
        this.getFilms()
    }


  render() {
    return (
      <div>  
        <h4>AVENGERS SAGA</h4>
        <Row xs={1} sm={2} lg={4} xl={6} className="mb-4 no-gutters text-center">
            {this.state.filmArr.map(movie =>
                <Col key={movie.imdbID} className="mb-2 px-1">
                    <img className="img-fluid" src={movie.Poster} alt="movie picture" />
                </Col>                
            )}
        </Row>
      </div>
    );
  }
}

export default Gallery2