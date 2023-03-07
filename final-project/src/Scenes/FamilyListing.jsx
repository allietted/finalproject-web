import { useState, useEffect } from 'react';
import FamilyDetails from '../Scenes/FamilyDetails'


export default function FamilyListing() {
    // const[showEvents, setShowEvents]= useState("");
    const [data, setData] = useState("")

    useEffect(() => {
        fetch(`https://final-project-api-ad.web.app/familyevents`)
            .then(res => res.json())
            .then(setData)
            .catch(err => console.error(err))
    }, [])




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

