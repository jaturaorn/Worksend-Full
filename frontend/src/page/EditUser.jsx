import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const EditUser = () => {
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`http://localhost:5556/users/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setFullname(data.fullname);
        setNickname(data.nickname);
        setDateofBirth(data.dateofBirth);
        setAge(data.age);
        setGender(data.gender);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert("An error happened. Please check the console");
        console.error("There was a problem fetching the book:", error.message);
      }
    };

    fetchData();
  }, [id]);

  const handleEditUser = async () => {
    const data = {
      fullname,
      nickname,
      dateofBirth,
      age,
      gender,
    };

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:5555/books/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
      <h1 className="text-3xl my-4">Edit Users</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Fullname</label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={dateofBirth}
            onChange={(e) => setDateofBirth(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="number"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditUser}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditUser;
