import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Page | Name of Website",
    description: "A lot of keywords",
    keywords: ["About", "Contact", "Home", "Users"],
    twitter: {
        card: "summary_large_image",
        title: "About Us | Twitter",
    }
}

export default function About() {


    console.log("Hey is this in the sever or client?")
    return <div> About Page
        <p>This is the about page</p>
        <button onClick={() => alert("Hello from the about page")}>Click toaster</button>{" "}
    </div>;
}