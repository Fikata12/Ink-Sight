import { useContext } from "react"
import { Outlet, useNavigate, useParams } from "react-router-dom";

import AuthContext from "../../contexts/authContext"

import * as reviewService from '../../services/reviewService';

import Paths from "../../utils/paths";

export default function ReviewGuard() {
    const { userId } = useContext(AuthContext);
    const { id } = useParams();
    const navigate = useNavigate();

    reviewService.getOne(id)
        .then(result => {
            if (result._ownerId != userId) {
                navigate(Paths.Reviews);
            }
        });

    return <Outlet />;
}