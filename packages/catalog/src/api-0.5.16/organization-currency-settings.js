import Client from "./client";

export default class OrganizationCurrencySettings extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === "string") {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = "API";

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/currency/settings`,
      options
    );
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/currency/settings`, {
      ...options,
      method: "POST"
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/currency/settings/versions`,
      options
    );
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/currency/settings/${id}`,
      options
    );
  }

  putById(organization, id, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/currency/settings/${id}`,
      {
        ...options,
        method: "PUT"
      }
    );
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/currency/settings/${id}`,
      {
        ...options,
        method: "DELETE"
      }
    );
  }
}
