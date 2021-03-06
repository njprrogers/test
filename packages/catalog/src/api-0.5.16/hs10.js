import Client from "./client";

export default class Hs10 extends Client {
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
      `${this.host}/${organization}/harmonization/hs10`,
      options
    );
  }

  getVersions(organization, options = {}) {
    return this.makeRequest(
      `${this.host}/${organization}/harmonization/hs10/versions`,
      options
    );
  }
}
