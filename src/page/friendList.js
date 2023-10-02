import { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { setAllUsers } from "../store/users/usersSlice";
import UserLoader from "../Components/userLoader";

function FriendList() {
    let Users = useSelector(state => state.users.users)
    let dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)

    async function getUsers() {
        let response = await fetch("https://reqres.in/api/users")
        let data = await response.json()
        .catch( err => {
            console.log(err);
            alert("Something has gone wrong")
        })
        .finally(() => setLoading(false))
        dispatch(setAllUsers(data.data));
    }

    useEffect(() => {
        getUsers()
    }, [])
    return(
        <main>
            <div>
                {isLoading && <UserLoader style={{ marginTop: "1em", width: "18em"}} />}
                {!isLoading && Users.map((el, index) =>
                    <div key={index} >
                        <div style={{ marginTop: "1em", width: "18em", display: "flex"}}>
                            <img style={{height: "3em", borderRadius: "50em 50em"}} src={el.avatar}/>
                            <div style={{ marginLeft: "1em"}}>
                                <div><strong>{el.first_name} {el.last_name}</strong></div>
                                <p>{el.email}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default FriendList