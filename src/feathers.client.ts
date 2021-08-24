import feathers from "@feathersjs/client";
import rest from "@feathersjs/rest-client";

const apiHost = process.env.API_HOST;

const feathersClient = feathers(); // somehow it needs the @feathersjs/authentication-client installed
const restClient = rest(apiHost);

feathersClient.configure(restClient.fetch(window.fetch)); // can also be configured for axios

export default feathersClient;
