import { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loaders/Loader'
import { updateUser } from '../redux/UserReducer';

const Update = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [userToUpdate, setuserToUpdate] = useState();

    const { users, loading } = useSelector((state) => state.users);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser(userToUpdate));
        navigate('/');
    }

    const getInputValue = (e) => {
        setuserToUpdate({ ...userToUpdate, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (id) {
            const singleUser = users && users.filter((user) => user.id === id)
            setuserToUpdate(singleUser[0])
        }
    }, []);
    return (
        <>
            {
                loading ?
                    <Loader />
                    :
                    <div className="card w-50 my-4">
                        <div className="card-body">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="username" name="name" onChange={getInputValue} value={userToUpdate ? userToUpdate.name : ""} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="abc@gmail.com" name="email" onChange={getInputValue} value={userToUpdate ? userToUpdate.email : ""} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>age</Form.Label>
                                    <Form.Control type="Number" placeholder="Age" name="age" onChange={getInputValue} value={userToUpdate ? userToUpdate.age : ''} />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="radio"
                                        id='umale'
                                        label='Male'
                                        name="gender"
                                        value="male"
                                        checked={userToUpdate && userToUpdate.gender === 'male' ? true : false}
                                        onChange={getInputValue}
                                    />
                                    <Form.Check
                                        type="radio"
                                        id='ufemale'
                                        label='FeMale'
                                        name="gender"
                                        value="female"
                                        checked={userToUpdate && userToUpdate.gender === 'female' ? true : false}
                                        onChange={getInputValue}
                                    />
                                </Form.Group>

                                <Button variant="success" type="submit">Update</Button>

                            </Form>
                        </div>
                    </div>
            }
        </>
    )
}

export default Update;