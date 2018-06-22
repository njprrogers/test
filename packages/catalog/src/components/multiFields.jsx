import React from 'react';
import {
  Text
} from "react-form";

const MultiFields = (props) => {
  const { name, formApi } = props;
  return (
    <fieldset>
      {formApi.values[name] &&
          formApi.values[name].map((category, i) => (
            <div
              key={`${name}${i}`}
              className="additional-field-divider"
            >
              <label htmlFor={`${name}-name-${i}`}>{name}</label>
              <Text
                field={[name, i]}
                id={`${name}-name-${i}`}
              />
              <button
                onClick={() => formApi.removeValue(name, i)}
                type="button"
                className="btn btn-danger remove-button"
              >
                - Remove
              </button>
            </div>
          ))}
          <button
              type="button"
              onClick={() => formApi.addValue(name, "")}
              className="add-button btn btn-success"
          >
            + Add {name}
          </button>
    </fieldset>
  )
}

export default MultiFields;