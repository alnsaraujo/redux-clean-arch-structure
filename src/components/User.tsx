
import { useState } from "react";
import { useUsersController } from "../application/controller/users";

export function User() {
    const [name, setName] = useState<string>('');
    const { users, onAddUser } = useUsersController();

    function handleAddUser() {
        onAddUser(name);
        setName('');
    }

    return <>
        <input name="name" placeholder="Enter" type="text" value={name} onChange={e => setName(e.target.value)} />
        <button disabled={!name?.length} onClick={handleAddUser}>add</button>
        {users.map(user => <div key={user.id}>{user.name}</div>)}
    </>


}