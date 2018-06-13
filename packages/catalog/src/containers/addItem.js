import React, { Component } from "react";
import {
  Form,
  Text,
  Radio,
  RadioGroup,
  TextArea,
  Checkbox,
  Select,
  NestedField
} from "react-form";
import "../css/forms.css";

const categoryOptions = [
  {
    label: "Single",
    value: "single"
  },
  {
    label: "In a Relationship",
    value: "relationship"
  },
  {
    label: "It's Complicated",
    value: "complicated"
  }
];
const required = (field, name) => {
  if (!field || field.trim() === "") {
    return "Please enter a value";
  }
};

class CatalogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(submittedValues) {
    this.setState({ submittedValues });
    console.log("submit form", submittedValues);
  }
  addField(formApi) {
    formApi.addValue("images-tag", "");
    formApi.addValue("images", "");
  }
  componentDidMount() {
    console.log("MOUNTE£D");
    console.log(this);
  }
  render() {
    return (
      <div className="container main">
        <h1>Add a Catalog Item</h1>
        <Form onSubmit={this.submitForm}>
          {formApi => (
            <div>
              <form onSubmit={formApi.submitForm}>
                <fieldset>
                  <div className="row">
                    <div className="field">
                      <label htmlFor="number">Clients unique ID</label>
                      <Text
                        validate={required}
                        field="number"
                        title="Clients unique ID"
                        className={
                          formApi.errors && formApi.errors.number
                            ? "error"
                            : null
                        }
                      />
                      {formApi.errors ? (
                        <p className="form-error">{formApi.errors.number}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="field">
                      <label htmlFor="locale">Locale</label>
                      <Text
                        validate={required}
                        field="locale"
                        title="Locale"
                        className={
                          formApi.errors && formApi.errors.locale
                            ? "error"
                            : null
                        }
                      />
                      {formApi.errors ? (
                        <p className="form-error">{formApi.errors.locale}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="field">
                      <label htmlFor="name">Name</label>
                      <Text
                        validate={required}
                        field="name"
                        title="Name of the actual item in the catalog"
                        className={
                          formApi.errors && formApi.errors.name ? "error" : null
                        }
                      />
                      {formApi.errors ? (
                        <p className="form-error">{formApi.errors.name}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="field">
                      <label htmlFor="price">Price</label>
                      <Text
                        validate={required}
                        field="price"
                        title="Price"
                        className={
                          formApi.errors && formApi.errors.price
                            ? "error"
                            : null
                        }
                      />
                      {formApi.errors ? (
                        <p className="form-error">{formApi.errors.price}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="row">
                    <div className="field">
                      <label htmlFor="description">Description</label>
                      <Text field="description" title="Description" />
                    </div>
                  </div>
                </fieldset>

                <h2>Categories</h2>
                <fieldset>
                  <button
                    onClick={() => formApi.addValue("categories", "")}
                    type="button"
                    className="mb-4 mr-4 btn btn-success"
                  >
                    + Add Category
                  </button>
                  {formApi.values.categories &&
                    formApi.values.categories.map((category, i) => (
                      <div key={`category${i}`}>
                        <label htmlFor={`category-name-${i}`}>Category</label>
                        <Text
                          field={["categories", i]}
                          id={`category-name-${i}`}
                        />
                        <button
                          onClick={() => formApi.removeValue("categories", i)}
                          type="button"
                          className="mb-4 btn btn-danger"
                        >
                          - Remove
                        </button>
                      </div>
                    ))}
                </fieldset>
                <h2>Images</h2>
                <fieldset>
                  <label htmlFor="image-url-first">Image url</label>
                  <Text field="image-url-first" id="image-url-first" />
                  <label htmlFor="image-tag-first">Image tag</label>
                  <Text field="image-tag-first" id="image-tag-first" />
                  {formApi.values.images &&
                    formApi.values.images.map((image, i) => (
                      <div
                        key={`image${i}`}
                        className="additional-field-divider"
                      >
                        <label htmlFor={`image-url-${i}`}>Image url</label>
                        <Text field={["images", i]} id={`image-url-${i}`} />
                        <label htmlFor={`image-tag-${i}`}>Image tag</label>
                        <Text field={["images-tag", i]} id={`image-tag-${i}`} />
                        <button
                          onClick={() => formApi.removeValue("images", i)}
                          type="button"
                          className="btn btn-danger remove-button"
                        >
                          - Remove
                        </button>
                      </div>
                    ))}
                  <button
                    type="button"
                    onClick={() => {
                      formApi.addValue("images-tag", "");
                      formApi.addValue("images", "");
                    }}
                    className="add-button btn btn-success"
                  >
                    + Add Images
                  </button>
                </fieldset>
                <div className="row">
                  <div className="field">
                    <label htmlFor="attributes">Attributes</label>
                    <Text field="attributes" title="Attributes" />
                  </div>
                </div>
                <div className="row">
                  <div className="field">
                    <label htmlFor="dimensions">Dimensions</label>
                    <Text field="dimensions" title="Dimensions" />
                  </div>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
        </Form>
      </div>
    );
  }
}
export default CatalogForm;
/*

item

Example Json: Minimal | Full
The Flow item defines a specific item that can be purchased by a consumer. For many clients, this will map to a Sku.

Field	Type	Required?	Default	Description
id	string	Yes	-	
Globally unique identifier

number	string	Yes	-	
Client’s unique identifier for this object

locale	string	Yes	-	
Example: en_US
name	string	Yes	-	
price	price	Yes	-	
categories	[string]	Yes	[]	
description	string	No	-	
attributes	map[string]	Yes	{}	
Attributes of the items. An attribute of type intent must be given as a string representation of a decimal to be correctly localized.

dimensions	dimensions	Yes	-	
images	[image]	Yes	[]	
local	local	No	-	

*/
