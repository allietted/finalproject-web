




export default function DeleteEvent ({eventId, setDayListing}){

    const handleDelete = () => {
        fetch(`https://final-project-api-ad.web.app/${eventId}`, {
            method: "DELETE",
            headers:{
                "Content-Type": "application/json",
            },
           
        })

        .then(res => res.json())
        .then(setDayListing)
        .catch(err => console.error(err))
    };

    return(
        <>
        
        </>
         
         
    
        
    );
}