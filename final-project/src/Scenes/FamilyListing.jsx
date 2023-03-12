import { useState, useEffect } from 'react';
import FamilyDetails from '../Scenes/FamilyDetails'


export default function FamilyListing() {
    // const[showEvents, setShowEvents]= useState("");
    const [familyListing, setFamilyListing] = useState("")

    useEffect(() => {
        fetch(`https://final-project-api-ad.web.app/familyevents`)
            .then(res => res.json())
            .then(setFamilyListing)
            .catch(err => console.error(err))
    }, [setFamilyListing])




    return (
        <div>
            
            {!familyListing
                ? (<p>Loading....</p>)
                : (familyListing.map(
                    (element) => (
                        <FamilyDetails key={element._id}
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

