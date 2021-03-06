import Client from "./client";

export default class Centers extends Client {
  constructor(opts) {
    let options = opts;

    if (typeof opts === "string") {
      options = { host: opts }; // convert host string to options object
    }

    options.serviceName = "API";

    super(options);
  }

  get(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/centers`, options);
  }

  post(organization, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/centers`, {
      ...options,
      method: "POST"
    });
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/centers/versions`,
      options
    );
  }

  getByKey(organization, key, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/centers/${key}`,
      options
    );
  }

  putByKey(organization, key, options = {}) {
    return this.makeRequest(`${this.host}/${organization}/centers/${key}`, {
      ...options,
      method: "PUT"
    });
  }
}
