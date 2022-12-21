import React from 'react'
import {useState} from "react"

function chat() {

    const Chats = () => {
        const history = useHistory();
        const { user } = useAuth();
        const [loading, setLoading] = useState(true);
        const handleLogout = async () => {
        await auth.signOut();
        history.push("/");
        };

  return (
    <div>
      
    </div>
  )
}

export default chat;
