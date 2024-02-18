import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MdOutlineAddBox } from "react-icons/md";

import UserCard from "../component/Home/UserCard";
import UserTable from "../component/Home/UserTable";
import Spinner from "../component/Spinner";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5556/books");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data.data);
        setLoading(false);
      } catch (error) {
        console.error("There was a problem with your fetch operation:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
