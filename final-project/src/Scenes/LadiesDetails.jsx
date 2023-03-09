import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Nav'
import DeleteEvent from '../Admin/DeleteEvents';
// import assets from '../assets'

export default function LadiesNight({title,location, phone, website, instagram, facebook, price}){

    return(
      <Navbar>
      <Container fluid>
        <Row> 
          <Col>
            <h1>{title}</h1>
            </Col>
        </Row>            
        <Row>
            <Col sm={12} md={4}><img src = 'images/watertaxi.jpg' alt='water taxi' /></Col> 
            <Col><p>Descriptions</p></Col>      
        </Row>
        <Row>
            <Col sm={12} md={4}>
                <p>{location}</p>
            </Col>
            <Col sm={12} md={4}>
                 <p>{phone}</p>
            </Col>
            <Col sm={12} md={4}>
                 <p>{website}</p> 
            </Col>
                 
            <Col sm={12} md={4}>
                <p>{instagram}</p>
                <p>{facebook}</p>
            </Col>
            <Col sm={12} md={4}>
                <p>{price}</p>
            </Col>
              
            </Row>
            <DeleteEvent title={title} />
        </Container>
        </Navbar>
    )
}