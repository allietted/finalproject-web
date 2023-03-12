import { useState, useEffect } from 'react';
import LadiesDetails from '../Scenes/LadiesDetails'


export default function LadiesListing() {
    // const[showEvents, setShowEvents]= useState("");
    const [ladieslisting, setLadiesListing] = useState("")

    useEffect(() => {
        fetch(`https://final-project-api-ad.web.app/ladiesnight`)
            .then(res => res.json())
            .then(setLadiesListing)
            .catch(err => console.error(err))
    }, [setLadiesListing])




    return (
        <div>
            
            {!ladieslisting
                ? (<p>Loading....</p>)
                : (ladieslisting.map(
                    (element) => (
                        <LadiesDetails key={element._id}
                            eventCat={element._id}
                            image={element.image}
                            title={element.title}
                            location={element.location}
                            phone={element.phone}
                            website={element.website}
                            instagram={element.instagram}
                            facebook={element.facebook}
                            price={element.price}
                            description={element.description}
                        />)
                ))
            }
        </div>
    )
}