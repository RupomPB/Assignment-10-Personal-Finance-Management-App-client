import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const UpdateProfile = () => {

    const {user, userInfo} = use(AuthContext);
    const [name, setName] =useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const navigate = useNavigate();

    const handleUpdate=(e)=>{
        e.preventDefault();

        userInfo({
            displayName: name,
            photoURL: photoURL,
        })
        .then(()=>{
            toast.success('✅ Profile Updated Successfully');
            navigate('/profile');
        })
        .catch((error)=>{
            toast.error(error.message);
        })

    }

    return (
         <div className="min-h-screen flex justify-center items-center bg-base-200">
        <form
          onSubmit={handleUpdate}
          className="bg-white p-8 rounded-xl shadow-md w-[400px]"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            Update Profile
          </h2>
          <div className="form-control mb-4">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn bg-linear-to-r from-[#db28eb] to-[#e84646]  w-full mt-4">
            Update Information
          </button>
          
        </form>
      </div>
    );
};

export default UpdateProfile;