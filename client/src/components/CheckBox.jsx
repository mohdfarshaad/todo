import PropTypes from "prop-types";

function CheckBox({ label: checkboxLabel, value: checkboxValue, onValueChange: handleValueChange }) {
  return (
    <div className="flex items-center space-x-2 p-4">
      <input
        type="checkbox"
        value={checkboxValue}
        onChange={(event) => handleValueChange(event.target.value)}
      />
      <label htmlFor="" className="text-white">
        {checkboxLabel}
      </label>
    </div>
  );
}


CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

export default CheckBox;
