import Client from "./client";

export default class ExperienceDefaults extends Client {
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
      `${this.host}/${organization}/experience/defaults`,
      options
    );
  }
}
