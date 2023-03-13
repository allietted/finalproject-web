import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';




export default function Home (){
   


    return(
   
        <Container fluid className='home'>
            <Row> 
              <Col className ="text-center">
                 <h1 style ={{textAlign:"center", color: "white"}}>Explore Downtown Fort Lauderdale</h1>
                 <img src= './images/homehero.webp' alt =''/>
              </Col>
            </Row>

                <br/>

            <Row>
                <Col sm={12} md={4}>
                    <img src= './images/familythumbnail.webp' alt =''/>
                    <h3 style ={{textAlign:"center", color: "white"}}>Family Events</h3>
                    <p style ={{color: "white"}}>Spending time with loved ones can be a rewarding and enriching experience.</p>
                    <Link to = '/familyevents'><Button>Learn More</Button></Link>
                </Col>

                <Col sm={12} md={4}>
                    <img src= './images/dayp.webp' alt =''/>
                    <h3 style ={{textAlign:"center", color: "white"}}>Day Party</h3>
                    <p style ={{color: "white"}}>Sunshine, good vibes, and endless fun - nothing beats a day party with the squad</p>
                    <Link to = '/dayparty'><Button>Learn More</Button></Link>
                </Col>

                <Col sm={12} md={4}>
                    <img src= './images/lno3.webp' alt =''/>
                    <h3 style ={{textAlign:"center", color: "white"}}>Ladies Night</h3>
                    <p style ={{color: "white"}}>Cheers to a night of laughter, love, and unforgettable memories.</p>
                    <Link to = '/ladiesnight'><Button>Learn More</Button></Link>
                </Col>
                    
            </Row>
        </Container>
        
    )
}