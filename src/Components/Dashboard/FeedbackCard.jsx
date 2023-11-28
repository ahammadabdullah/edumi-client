import ReactStars from "react-rating-stars-component";

const FeedbackCard = ({ item }) => {
  const { description, rating, studentEmail, studentName } = item || {};
  return (
    <div className="w-[350px] bg-blue-200 text-blue-500 h-[150px] p-6 space-y-1 rounded-md">
      <h3 className="font-bold text-xl">{description}</h3>
      <div className="flex items-center">
        <ReactStars value={rating}></ReactStars> <span>| {rating}</span>
      </div>
      <p>Student Name: {studentName}</p>
      <p>Student Email: {studentEmail}</p>
    </div>
  );
};

export default FeedbackCard;
