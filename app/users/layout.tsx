export default function UserLayout({children}: {children: React.ReactNode}){
    return (
        <div>
            {" "}
            <h1 style={{color: 'red'}}>This is a User Route</h1>
            {children}
        </div>
    );
}

// It works in users/1 etc only not contact or about.