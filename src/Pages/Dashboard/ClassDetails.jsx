import { useParams } from "react-router-dom";
import TerModal from "../../Components/Modals/TerModal";
import { useState } from "react";

const ClassDetails = () => {
  const { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div>
        <button
          onClick={openModal}
          className="btn py-2 px-3 bg-blue-600 hover:bg-blue-200 text-white rounded"
        >
          Teaching Evaluation Report
        </button>
      </div>
      class id {id}
      {/* assignment list in tabular format */}
      <TerModal id={id} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default ClassDetails;
