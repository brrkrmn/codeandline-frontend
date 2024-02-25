import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../reducers/userReducer";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser())
    navigate('/')
  }

  return (
    <button onClick={handleLogout}>Log out</button>
  )
}

export default Dashboard