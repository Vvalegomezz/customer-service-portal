import { WebApi } from "dataverse-webapi/lib/node";

const config = {
  webApiUrl: "https://your-dataverse-instance-url.com/api/data/v9.1/",
  appId: "your-app-id",
  authority: "https://login.microsoftonline.com/your-tenant-id",
  redirectUri: "http://localhost:3000",
};

const service = new WebApi(config);

export default service;