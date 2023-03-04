import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container  from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Nav'
// import assets from '../assets'

export default function familyEvents({title,location, phone, website, instagram, facebook, price}){
    

    return(
      <Navbar>
      <Container fluid>
            <div>
                <h1>Family Events</h1>
            </div>
        <Row> 
          <Col>
            <h1>{title}</h1>
            </Col>
        </Row>            
        <Row>
            <Col sm={12} md={4}><img src = 'images/watertaxi.jpg' alt='' /></Col> 
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
        </Container>
        </Navbar>
    )
}

// export default function EventDetails2(){

//     return(
        
//         <div className="museum">
//             <h1>Museum of Discovery and Science</h1>
//             <image/>

//             <blockquote> 
//             <p></p>
//             </blockquote>
//             <ul>
//             <li>Prices</li>
//             <li>contact number</li>
//             <li>social media</li>
//             <li>address</li>
//             </ul>
            
        
//         </div>
//     )
// }

// export default function EventDetails3(){

//     return(
        
//         <div className="jazz">
//             <h1>Sunday Jazz Brunch</h1>
//             <image/>

//             <blockquote> 
//             <p></p>
//             </blockquote>
//             <ul>
//             <li>Prices</li>
//             <li>contact number</li>
//             <li>social media</li>
//             <li>address</li>
//             </ul>
            
        
//         </div>
//     )
// }

// export default function EventDetails4(){

//     return(
        
//         <div className="pirates">
//             <h1>Bluefoot Pirate Adventures</h1>
//             <image/>

//             <blockquote> 
//             <p></p>
//             </blockquote>
//             <ul>
//             <li>Prices</li>
//             <li>contact number</li>
//             <li>social media</li>
//             <li>address</li>
//             </ul>
            
        
//         </div>
//     )
// }

// export default function EventDetails5(){

//     return(
        
//         <div className="jungle">
//             <h1>Jungle Queen</h1>
//             <image/>

//             <blockquote> 
//             <p></p>
//             </blockquote>
//             <ul>
//             <li>Prices</li>
//             <li>contact number</li>
//             <li>social media</li>
//             <li>address</li>
//             </ul>
            
        
//         </div>
//     )
// }