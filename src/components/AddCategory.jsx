import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ onNewCategorty }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target: { value } }) => setInputValue(value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue("");
    onNewCategorty(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategorty: PropTypes.func.isRequired,
};
