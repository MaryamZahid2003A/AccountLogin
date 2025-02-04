import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useLogoutMutation } from './store/Slice/UserApiSlice';
import { logout } from './store/Slice/UserSlice.js';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

export default function NavBar() {
  const { userInfo } = useSelector((state) => state.auth1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApi, { isLoading }] = useLogoutMutation();

  const SubmitLogout = async (e) => {
    e.preventDefault();
    try {
      await logoutApi().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.error("Logout error:", err);
      toast.error(err?.data?.message || err.error);
    }
  };
  console.log("NavBar userInfo:", userInfo);

  return (
    <>
      <div className="w-full h-24 bg-white opacity-60 flex items-center px-4">
        <h1 className="text-black text-3xl ml-10">Login Authentication</h1>
        {!userInfo ? (
          <div className="ml-auto mr-10 flex items-center">
            <Link to="/login" className="text-2xl mr-3 text-blue-700 hover:text-red-900">Sign In</Link>
            <Link to="/signup" className="text-2xl ml-3 text-blue-700 hover:text-red-900">Sign Up</Link>
          </div>
        ) : (
          <div className="ml-auto flex flex-col items-end">
            <h1 className="text-2xl mr-10">{userInfo.name}</h1>
            <div className="flex mr-10">
              <Link to="/profile" className="text-1xl mr-3 text-blue-700 hover:underline-offset-auto">Profile</Link>
              <button className="text-1xl text-red-700 hover:underline-offset-auto" onClick={SubmitLogout} disabled={isLoading}>
                {isLoading ? 'Logging out...' : 'Logout'}
              </button>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
}
