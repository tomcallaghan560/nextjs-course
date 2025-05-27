// will use server components with async instead of client components.

export default async function Users() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return (
    <div>
       {" "}
       <h1>User List</h1>
       <ul>
        {users.map((user: { id: number; name: string }) => (
            <li key={user.id}>
                <h3>{user.name}</h3>
            </li>
        ))}
            </ul>{" "} 
    </div>
    );
}

// jsonplaceholder.typicode.com/users // gives us list of 10 users.

// param: add an extension to this route. A param will allow us to get a specific user and 
// have variable in url to render a specific user.
// Unique id for each user. ID for Leanne Graham is 1.
