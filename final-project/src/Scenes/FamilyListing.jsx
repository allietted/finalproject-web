import { useState, useEffect } from 'react';
import FamilyDetails from '../Scenes/FamilyDetails'

export function FamilyListing() {
    // const[showEvents, setShowEvents]= useState("");
    const [data, setData] = useState("")

    useEffect(() => {
        fetch(`https://final-project-api-ad.web.app/events`)
            .then(res => res.json())
            .then(setData)
            .catch(err => console.err(err))
    }, [setData])




    return (
        <div>
            {!data
                ? (<p>Loading....</p>)
                : (data.map(
                    (element) => (
                        <FamilyDetails
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

