import { Link } from "react-router-dom";

const ClassCard = ({ item }) => {
  console.log(item);
  return (
    <div className="w-[300px] rounded bg-gray-200 pb-3 h-full mx-auto flex flex-col justify-between">
      <div className="rounded-md p-3">
        <img src={item.image} alt="" />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-xl">{item.title}</h3>
        <h3>
          Instructor: <span className="font-medium">{item.name}</span>
        </h3>
      </div>
      <div className="flex justify-center">
        <button className="btn py-2 px-3 bg-blue-600 hover:bg-blue-200 text-white rounded">
          <Link to={`/dashboard/my-enrolled-classes/${item.classId}`}>
            Continue
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
