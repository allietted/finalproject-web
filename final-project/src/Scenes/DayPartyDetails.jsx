import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Nav'


// import assets from '../assets'

export default function DayParty({image,description,title,location, phone, website, instagram, facebook, price,}){

    return(
      <Navbar>
      <Container fluid className='dayparty'>
        <Row> 
          <Col>
            <h1 style ={{color: "white"}}>{title}</h1>
            </Col>
        </Row>            
        <Row>
            <Col sm={12} md={4}><img src={image} alt = "" className='image'/></Col> 
            <Col><p className="my-5" style ={{textAlign:"center", color: "white"}}>{description}</p>
            </Col>      
        </Row>
        <Row>
            <Col sm={12} md={4}>
                <p style ={{textAlign:"center", color: "white"}}>Address: {location}</p>
            </Col>
            <Col className="daycol" sm={12} md={4}>
                 <p style ={{textAlign:"center", color: "white"}}>Phone: {phone}</p>
            </Col>
            <Col sm={12} md={4}>
                 <p style ={{textAlign:"center", color: "white"}}> Website: {website}</p> 
            </Col>
                 
            <Col sm={12} md={4}>
                <p style ={{textAlign:"center", color: "white"}}> Instagram: {instagram}</p>
            </Col>

            <Col>
                <p style ={{textAlign:"center", color: "white"}}>Facebook: {facebook}</p>
            </Col>

            <Col sm={12} md={4}>
                <p style ={{textAlign:"center", color: "white"}}>Price: {price}</p>
            </Col>
              
            </Row>
            
        </Container>
        </Navbar>
    )
}