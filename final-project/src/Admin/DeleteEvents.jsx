import Button  from 'react-bootstrap/Button';

export default function DeleteEvent ({title, data}){

    const handleDelete = () => {
        fetch(`https://final-project-api-ad.web.app/${title}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify({   
            }),
        })

        .then(res => res.json())
        .then(data)
        .catch(err => console.err(err))
    };

    return(
        

        <Button variant='primary' type='submit'>Delete Event
         </Button>
         
         
    
        
    );
}