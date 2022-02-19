import React  from 'react';
import {connect} from 'react-redux';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import * as actions from "../store/actions";
import Card from 'react-bootstrap/Card';
import CardMedia from '@mui/material/CardMedia';

class Home extends React.Component{

    componentDidMount() {
    }

    render() {
        const mystyle =  {
            margin:"10px"
        }
        return(
            <>
                <Card style={mystyle}>
                    <Card.Img variant="top" src="https://media.istockphoto.com/photos/creative-collage-of-business-team-working-on-project-and-stock-data-picture-id1284079205?b=1&k=20&m=1284079205&s=170667a&w=0&h=c10EqAPUZlTTi0w0bzKdn8nFMvutmDIOwJQ1LZri-wE="/>
                    <Card.Text>

                    </Card.Text>
                </Card>
            </>
        );
    }
}

const mapStareToProps = state => {
    return {

    };
};


export default connect(mapStareToProps, mapDispatchToProps) (Home) ;
