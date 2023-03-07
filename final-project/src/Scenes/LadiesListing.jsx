import { useState, useEffect } from 'react';
import LadiesDetails from '../Scenes/LadiesDetails'


export default function LadiesListing() {
    // const[showEvents, setShowEvents]= useState("");
    const [data, setData] = useState("")

    useEffect(() => {
        fetch(`https://final-project-api-ad.web.app/ladiesnight`)
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
                        <LadiesDetails
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