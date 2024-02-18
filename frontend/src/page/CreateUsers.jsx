import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const CreateUsers = () => {
  const [fullname, setFullname] = useState("");
  const [nickname, setNickname] = useState("");
  const [dateofBirth, setDateofBirth] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveUser = () => {
    const data = {
      fullname,
      nickname,
      dateofBirth,
      age,
      gender,
    };
    setLoading(true);

    try {
      const response = fetch("http://localhost:5556/users", {
        method: "POST",
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
      <h1 className="text-3xl my-4">Create Users</h1>
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
          <label className="text-xl mr-4 text-gray-500">Nickname</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">DateofBirth</label>
          <input
            type="number"
            value={dateofBirth}
            onChange={(e) => setDateofBirth(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Gender</label>
          <input
            type="number"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2  w-full "
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleSaveUser}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateUsers;
