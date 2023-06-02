import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { createUser } from '../redux/UserReducer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Create = () => {
    const [user, setUser] = useState({ name: '', email: '', age: '', gender: '' })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const getInputValue = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createUser(user))
        navigate('/')
        toast.success("created");
    }


    return (
        <>
            <div className="card w-50 my-4">
                <div className="card-body">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="username" name="name" onChange={getInputValue} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="abc@gmail.com" name="email" onChange={getInputValue} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>age</Form.Label>
                            <Form.Control type="Number" placeholder="Age" name="age" onChange={getInputValue} />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Check
                                type="radio"
                                id='male'
                                label='Male'
                                name="gender"
                                value="male"
                                onChange={getInputValue}
                            />
                            <Form.Check
                                type="radio"
                                id='female'
                                label='FeMale'
                                name="gender"
                                value="female"
                                onChange={getInputValue}
                            />
                        </Form.Group>

                        <Button variant="success" type="submit">Submit</Button>

                    </Form>
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light">
            </ToastContainer>
        </>
    )
}

export default Create
