import { useState, useEffect } from 'react';
import DayPartyDetails from '../Scenes/DayPartyDetails'


export default function DayPartyListing() {
    // const[showEvents, setShowEvents]= useState("");
    const [data, setData] = useState("")

    useEffect(() => {
        // fetch(`https://final-project-api-ad.web.app/dayparty`)
        fetch(`http://127.0.0.1:5000/dayparty`)
            .then(res => res.json())
            .then(setData)
            .catch(err => console.error(err))
    }, [setData])




    return (
        <div>
            
            {!data
                ? (<p>Loading....</p>)
                : (data.map(
                    (element) => (
                        <DayPartyDetails
                            title={element.title}
                            location={element.location}
                            phone={element.phone}
                            website={element.website}
                            instagram={element.instagram}
                            facebook={element.facebook}
                            price={element.price}
                        />)
                ))
            }
        </div>
    )
}


//http://127.0.0.1:5000/dayparty