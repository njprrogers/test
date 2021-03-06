import Client from "./client";

export default class Exports extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === "string") {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = "API";

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/exports`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/exports`, {
      ...options,
      method: "POST"
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/exports/versions`,
      options
    );
  }

  getById(organization, id, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/exports/${id}`,
      options
    );
  }

  deleteById(organization, id, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/exports/${id}`, {
      ...options,
      method: "DELETE"
    });
  }
}
