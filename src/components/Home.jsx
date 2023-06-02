import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react";
import { getUsers } from "../redux/UserReducer";
import Loader from "./Loaders/Loader";
import CardComponent from "./CardComponent/CardComponent";

const Home = () => {
    const { users, loading } = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return (
        <>{
            loading ? <Loader /> :
                <div className="container" >
                    <h1>Home</h1>

                    <div className="row">
                        {
                            users && users.map((user) => (
                                < CardComponent userData={user} key={user.id} />
                            ))
                        }
                    </div>
                </div>
        }
        </>
    )
}

export default Home
