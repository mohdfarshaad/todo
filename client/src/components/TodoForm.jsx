import PropTypes from "prop-types";

function TodoForm({ onClick: onClick, value: value, onChange: onChange }) {
  return (
    <div className="flex flex-col md:flex-row justify-center content-center mb-4">
      <input
        type="text"
        className="mb-3 md:mr-3 py-4 px-3 outline-none focus:outline-none text-black rounded-md"
        placeholder="Title"
      />
      <input
        type="text"
        className="mb-3 py-4 px-3 outline-none focus:outline-none text-black rounded-md"
        placeholder="Description"
        value={value}
        onChange={onChange}
      />
      <button
        onClick={onClick}
        className=" bg-zinc-600 rounded-lg py-3  md:w-20 md:h-14  md:ml-3"
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
