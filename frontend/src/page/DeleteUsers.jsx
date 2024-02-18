import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteUsers = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteUser = async () => {
    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5556/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    }
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Delete Users</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are You Sure You want to delete this user?</h3>

        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeleteUser}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};

export default DeleteUsers;
