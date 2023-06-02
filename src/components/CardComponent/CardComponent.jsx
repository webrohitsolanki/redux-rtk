import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './CardComponent.css'
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../redux/UserReducer';

const CardComponent = ({ userData }) => {
    const dispatch = useDispatch();


    return (
        <div className="col-lg-3 col-sm-6 mb-4">

            <div className="card w-100">
                <div className="card-header">
                    <div className="tools">

                        <div className="circle">
                            <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                                <Link to={`/edit/${userData && userData.id}`}>
                                    <span className="yellow box">
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </span>
                                </Link>
                            </OverlayTrigger>
                        </div>

                        <div className="circle">
                            <OverlayTrigger overlay={<Tooltip>View</Tooltip>}>
                                <span className="green box"><i className="fa-solid fa-eye"></i></span>
                            </OverlayTrigger>
                        </div>

                        <div className="circle">
                            <OverlayTrigger overlay={<Tooltip>Delete</Tooltip>}>
                                <span className="red box" onClick={() => dispatch(deleteUser(userData && userData.id))}><i className="fa-solid fa-x"></i></span>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="card__content">
                        <p>NAME:- {userData.name}</p>
                        <p>Age:- {userData.age}</p>
                        <p>Gender:- {userData.gender}</p>
                        <p>Email:- {userData.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardComponent


