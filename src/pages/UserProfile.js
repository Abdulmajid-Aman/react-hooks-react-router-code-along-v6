import NavBar from "../components/NavBar"
import { useParams } from "react-router-dom";
import { useState , useEffect } from "react";

function UserProfile() {
    const params = useParams()
    let userId = params.your_profile_id
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch(`http://localhost:4000/users/${userId}`)
        .then(res => res.json())
        .then(data => setUser(data))
    }, [userId])

    if (!user.name) {
        return <h1>Loading ....</h1>
    }

  return (
    <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>{user.name}</h1>
        </main>
    </>
  )
}

export default UserProfile