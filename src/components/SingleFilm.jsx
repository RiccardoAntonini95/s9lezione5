import React from "react"
import Col from "react-bootstrap/Col"


class SingleFilm extends React.Component {
    constructor(props){
        super(props)
        this.state = { isSelected : false }
    }
    handleClick = () => {
        this.setState({ isSelected: !this.state.isSelected }) //ad ogni clic diventa diverso da quello che è
        console.log("clic")
    }

    render(){
        return(
            <>
            <Col onClick={this.handleClick} className="mb-2 px-1">
                <img className="img-fluid" src={this.props.singleMovie.Poster} alt="movie picture" />
            </Col>  
{/*             {this.state.isSelected && <CommentArea id={this.props.singleMovie.imdbID} />} */}
            </>
        )
    }
}

export default SingleFilm