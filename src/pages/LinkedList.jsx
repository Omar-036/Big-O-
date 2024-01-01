import { Link } from "react-router-dom";
import Header from "../components/Header";

function LinkedList() {
  return (
    <div>
      <Header />
      <h1 className="text-center text-6xl m-12">Linked List</h1>
      <Link to="quiz">
        <button className="bg-primaryDarkBlue block rounded-md text-3xl text-white px-4 py-2 font-semibold mx-auto mt-12">
          Take Quiz
        </button>
      </Link>
    </div>
  );
}

export default LinkedList;
