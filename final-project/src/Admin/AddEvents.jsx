import {useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button  from 'react-bootstrap/Button';


export default function AddEvents (){
    const[eventCategory, setEventCategory]= useState("");
    const[title, setTitle]= useState("");
    const[location, setLocation]= useState("");
    const[phone, setPhone]= useState("");
    const[website, setWebsite]= useState("");
    const[instagram, setInstagram]= useState("");
    const[facebook, setFacebook]= useState("");
    // const[image, setImage]= useState("");
    const[price, setPrice]= useState("");
    
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log ({e});
    }

        useEffect (()=>{
        fetch(`https://final-project-api-ad.web.app/adddayparty`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                eventCategory,
                title,
                location,
                phone,
                website,
                instagram,
                facebook,
                // image,
                price,
            }),
        },[])
    
        .then(res => res.json())
        .then()
        .catch(err => console.error(err))

    })
   
    return(
        < Form onSubmit ={handleSubmit}>
         <Form.Group className = "mb-3" controlId='category'>
            <Form.Label>Event Category</Form.Label>
            <Form.Select 
                aria-label =""
                value = {eventCategory}
                onChange = {(e) => setEventCategory(e.target.value)}>
                    <option>Choose Event</option>
                    <option value = "familyevents">Family Events</option>
                    <option value = "dayparty">Day Party</option>
                    <option value = "ladies night">Ladies Night</option>
                </Form.Select>
         </Form.Group>
         <Form.Group className = "mb-3" controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
         </Form.Group>
         <Form.Group className = "mb-3" controlId='location'>
            <Form.Label>Location</Form.Label>
            <Form.Control
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}/>
         </Form.Group>
         <Form.Group className = "mb-3" controlId='phone'>
            <Form.Label>Phone</Form.Label>
            <Form.Control
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
         </Form.Group>
         <Form.Group className = "mb-3" controlId='website'>
            <Form.Label>Website</Form.Label>
            <Form.Control
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}/>
         </Form.Group>
         <Form.Group className = "mb-3" controlId='instagram'>
            <Form.Label>Instagram</Form.Label>
            <Form.Control
                type="text"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}/>
         </Form.Group>
         <Form.Group className = "mb-3" controlId='facebook'>
            <Form.Label>Facebook</Form.Label>
            <Form.Control
                type="text"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}/>
         </Form.Group>
         <Form.Group className = "mb-3" controlId='price'>
            <Form.Label>Price</Form.Label>
            <Form.Control
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}/>
         </Form.Group>
         {/* <Form.Group className = "mb-3" controlId='formFile'>
            <Form.Label>Upload Image</Form.Label>
            <Form.Control type="file"/>              
         </Form.Group> */}
         <Button onClick ={handleSubmit}variant='primary' type='submit'>Add Event
         </Button>
        </Form>
    );
}