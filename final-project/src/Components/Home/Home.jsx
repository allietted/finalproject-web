import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'




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
                    <h3>Family Events</h3>
                    <p>Spending time with loved ones can be a rewarding and enriching experience.</p>
                    <Button>Learn More</Button>
                </Col>

                <Col sm={12} md={4}>
                    <img src= 'https://www.americanexpress.com/en-us/travel/discover/photos/100073/7776/1600/Hero_PoolDeck.jpg?ch=560' alt =''/>
                    <h3>Day Party</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nisi molestias corrupti iusto quae obcaecati</p>
                    <Button>Learn More</Button>
                </Col>

                <Col sm={12} md={4}>
                    <img src= 'https://www.americanexpress.com/en-us/travel/discover/photos/100073/7776/1600/Hero_PoolDeck.jpg?ch=560' alt =''/>
                    <h3>Ladies Night</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Nisi molestias corrupti iusto quae obcaecati</p>
                    <Button>Learn More</Button>
                </Col>
                    
            </Row>
        </Container>
        
    )
}