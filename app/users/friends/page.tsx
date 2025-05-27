import { useState } from "react";

async function MakePostRequest() {
    //const res = await fetch("/api/hello", {
    const res = await fetch(`/api/hello`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({name: "Jack"}),
    });

const data = await res.json();
return { data };
}

export default async function Friends() {
const [message, setMessage] = useState("");
const onClick =async () => {
    const { data } = await MakePostRequest();
    setMessage(data.message)
};
return <h1> Heyy Friends, {message} <button onClick={onClick}> Clicke Here</button></h1>;
}