import ButtonComponent from "./button";

export default async function Contact() {
    console.log("Hey is this in the server of client?");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts)
    // in server components you can directly do fetch requests, access databases w/o api endpoints
    return (
        <div>
            <ButtonComponent />
        </div>
    );
}

// Here I want server but not client however I want button which needs client. Have to
            // make two different components. Can call client component from server component
// server componenents are pre-rendered on the server and SE like Google web engine crawlers can get web content without
// JS execution. If in client components, the content is not rendered until the JS is executed so SE might miss it and thus rank
// lower in search results.