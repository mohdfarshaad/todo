import PropTypes from "prop-types";

function Button({ label: buttonLabel, onClick: handleClick }) {
  return (
    <div>
      <button
        className="px-10 md:px-8 bg-slate-500  text-white py-4 rounded-md"
        onClick={handleClick}
        type="button"
      >
        {buttonLabel}
      </button>
    </div>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
