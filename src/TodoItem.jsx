import PropTypes from "prop-types";
import { useState } from "react";

const TodoItem = ({ todo, removeTaskWithIndex, status, deadline, completed, onCheckboxChange }) => {
  const [isChecked, setIsChecked] = useState(completed);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onCheckboxChange();
  };

  const getStatusColor = () => {
    if (isChecked) {
      return "text-green-500";
    }

    switch (status) {
      case "overdue":
        return "text-red-500";
      case "pending":
        return "text-gray-500";
      case "completed":
        return "text-green-500";
      default:
        return "";
    }
  };

  const formattedDeadline = new Date(deadline).toLocaleString();

  return (
    <li className={`flex items-center justify-between w-full gap-5 ${getStatusColor()} text-xl p-2 bg-pink-50 rounded-md mb-2`}>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <div style={{ color: isChecked ? "green" : "" }}>{todo}</div>
        <div style={{ color: isChecked ? "green" : "" }}>Deadline: {formattedDeadline}</div>
      </div>
      <button onClick={removeTaskWithIndex}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"
          />
        </svg>
      </button>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.string.isRequired,
  removeTaskWithIndex: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  deadline: PropTypes.instanceOf(Date).isRequired,
  completed: PropTypes.bool.isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default TodoItem;
