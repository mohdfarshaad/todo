import { Pencil, Trash } from "lucide-react";
import PropTypes from "prop-types";

function TodoList({
  value: value,
  onChange: onChange,
  onUpdate: onUpdate,
  onDelete: onDelete,
  readOnly: readOnly = false,
}) {
  return (
    <div className="flex space-x-2 p-4 bg-white rounded-lg">
      <input type="checkbox" className="w-5" />
      <input
        type="text"
        className="w-max p-4  rounded-lg  outline-black border-gray border-2"
        value={value}
        onChange={onChange}
        readOnly={readOnly}
      />
      <button
        onClick={onUpdate}
        className="bg-white p-4 rounded-lg border-gray border-2 "
      >
        <Pencil color="blue" />
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
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
};

export default TodoList;
