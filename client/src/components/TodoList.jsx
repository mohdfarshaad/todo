import { Pencil, Trash, Save } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

function TodoList({
  value: value,
  onChange: onChange,
  onDelete: onDelete,
  onSave: onSave,
}) {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div className="flex space-x-2 p-4 bg-white rounded-lg mb-4">
      <input type="checkbox" className="w-5" />
      <input
        type="text"
        className="w-max p-4  rounded-lg text-black focus:outline-none border-gray border-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        readOnly={!isEditing}
      />

      <button
        onClick={() => {
          if (isEditing) {
            onSave();
          }
          setIsEditing(!isEditing);
        }}
        className="bg-white p-4 rounded-lg border-gray border-2 "
      >
        {isEditing ? <Save color="green" /> : <Pencil color="blue" />}
      </button>
      <button
        onClick={onDelete}
        className="bg-white p-4 rounded-lg border-gray border-2"
      >
        <Trash color="red" />
      </button>
    </div>
  );
}

TodoList.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
