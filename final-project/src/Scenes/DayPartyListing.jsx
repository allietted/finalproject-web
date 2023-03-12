import { useState, useEffect } from 'react';
import DayPartyDetails from '../Scenes/DayPartyDetails'


export default function DayPartyListing() {
    // const[showEvents, setShowEvents]= useState("");
    const [dayListing, setDayListing] = useState("")

    useEffect(() => {
        // fetch(`https://final-project-api-ad.web.app/dayparty`)
        fetch(`https://final-project-api-ad.web.app/dayparty`)
            .then(res => res.json())
            .then(setDayListing)
            .catch(err => console.error(err))
    }, [setDayListing])




    return (
        <div>

            {!dayListing
                ? (<p>Loading....</p>)
                : (dayListing.map(
                    (element) => (
                        <DayPartyDetails key={element._id}
                            eventId={element._id}
                            image={element.image}
                            title={element.title}
                            location={element.location}
                            phone={element.phone}
                            website={element.website}
                            instagram={element.instagram}
                            facebook={element.facebook}
                            price={element.price}
                            description={element.description}
                        />
                    )
                ))
            }

        </div>
    )
}


//http://127.0.0.1:5000/dayparty