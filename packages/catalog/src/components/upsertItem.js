import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import itemPropType from "../components/propTypes/item";
import { Form, Text, Select, NestedField } from "react-form";
import "../css/forms.css";
import Loader from "./loader";
import MultiFields from "./multiFields";

const required = (field, name) => {
  if (!field) {
    return "Please enter a value";
  }
};

class CatalogForm extends PureComponent {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      formError: "",
      formErrorMsg: ""
    };
  }
  submitForm(submittedValues) {
    this.props.submitForm(submittedValues);
  }
  render() {
    const {
      currencies,
      languages,
      countries,
      loading,
      item,
      edit,
      formErrorMsg,
      success
    } = this.props;
    let defaultValues = {};
    if (item) {
      defaultValues = {
        number: item.number,
        name: item.name,
        locale: item.locale,
        language: item.locale.substring(0, 2),
        country: item.locale.substring(3, 5),
        description: item.description,
        currency: item.price.currency,
        price: item.price.amount,
        category: item.categories,
        categories: {
          category: item.categories
        }
      };
    }

    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="container main">
            <h1>{edit ? "Edit" : "Add"} a Catalog Item</h1>
            <Form onSubmit={this.submitForm} defaultValues={defaultValues}>
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
                            <p className="form-error">
                              {formApi.errors.number}
                            </p>
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
                              formApi.errors && formApi.errors.name
                                ? "error"
                                : null
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
                            type="number"
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
                      <h1>Locale</h1>
                      <div className="row">
                        <div className="field">
                          <label htmlFor="language">Language</label>
                          <Select
                            validate={required}
                            field="language"
                            title="Language"
                            options={languages}
                            className={
                              formApi.errors && formApi.errors.language
                                ? "error"
                                : null
                            }
                          />
                          {formApi.errors ? (
                            <p className="form-error">
                              {formApi.errors.language}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="row">
                        <div className="field">
                          <label htmlFor="country">Country</label>
                          <Select
                            validate={required}
                            field="country"
                            title="Country"
                            options={countries}
                            className={
                              formApi.errors && formApi.errors.country
                                ? "error"
                                : null
                            }
                          />
                          {formApi.errors ? (
                            <p className="form-error">
                              {formApi.errors.country}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="row">
                        <div className="field">
                          <label htmlFor="currency">Currency</label>
                          <Select
                            validate={required}
                            field="currency"
                            title="Currency"
                            options={currencies}
                            className={
                              formApi.errors && formApi.errors.currency
                                ? "error"
                                : null
                            }
                          />
                          {formApi.errors ? (
                            <p className="form-error">
                              {formApi.errors.currency}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    </fieldset>

                    <h2>Categories</h2>
                    <NestedField field="categories">
                      <MultiFields name="category" formApi={formApi} />
                    </NestedField>
                    <h2>Images</h2>
                    <fieldset>
                      {formApi.values.images &&
                        formApi.values.images.map((image, i) => (
                          <div
                            key={`image${i}`}
                            className="additional-field-divider"
                          >
                            <label htmlFor={`image-url-${i}`}>Image url</label>
                            <Text field={["images", i]} id={`image-url-${i}`} />
                            <label htmlFor={`image-tag-${i}`}>Image tag</label>
                            <Select
                              validate={required}
                              field={["images-tag", i]}
                              title={["images-tag", i]}
                              options={[
                                {
                                  label: "thumbnail",
                                  value: "thumbnail"
                                },
                                {
                                  label: "checkout",
                                  value: "checkout"
                                }
                              ]}
                              className={
                                formApi.errors && formApi.errors.currency
                                  ? "error"
                                  : null
                              }
                            />
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
                        + Add images
                      </button>
                    </fieldset>
                    {success ? (
                      <p className="success">Item added succesfully!</p>
                    ) : null}
                    <p className="error-msg">{formErrorMsg}</p>
                    <button type="submit" className="btn submit">
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </Form>
          </div>
        )}
      </div>
    );
  }
}

CatalogForm.propTypes = {
  item: itemPropType(),
  loading: PropTypes.bool,
  currencies: PropTypes.array,
  languages: PropTypes.array,
  countries: PropTypes.array,
  edit: PropTypes.bool,
  number: PropTypes.string,
  submitForm: PropTypes.func,
  formError: PropTypes.bool,
  formErrorMsg: PropTypes.string,
  success: PropTypes.bool
};
CatalogForm.defaultProps = {
  item: {},
  loading: true,
  currencies: [],
  languages: [],
  countries: [],
  edit: false,
  number: "",
  submitForm: () => void 0,
  formError: false,
  formErrorMsg: "",
  success: false
};
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
