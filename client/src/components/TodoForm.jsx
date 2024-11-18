import PropTypes from "prop-types";

function TodoForm({ onClick: onClick, value: value, onChange: onChange }) {
  return (
    <div className="flex justify-center content-center mb-4 space-x-4">
      <input
        type="text"
        className="mb-3  py-4 px-3 outline-none focus:outline-none text-black rounded-md"
        placeholder="Title"
        value={value}
        onChange={onChange}
      />
      <button
        onClick={onClick}
        className=" bg-zinc-600 rounded-lg py-3  w-20 h-14  md:ml-3"
      >
        Add
      </button>
    </div>
  );
}

TodoForm.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export default TodoForm;
