import {useState} from 'react'


export default function addEvents ({setShowEvents}){
    const[showEvents, setShowEvents]= useState("");
   
    const newEvents =() => {
        const newEvents ={
            done:false,
            events:events,
        };
        setShowEvents("")
        fetch(``, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newEvents),

        })

        .then(res => res.json())
        .then(setShowEvents)
        .catch(err => console.err(err))
    };

    return(
        <>
        </>
    )
}