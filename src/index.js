import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Amplify from "aws-amplify";
import config from "./config";
import { Provider } from "react-redux";
import store from "./state/store";

Amplify.configure({
  Auth: {
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
    mandatorySignId: true,
    region: config.cognito.REGION,
    userPoolId: config.cognito.USER_POOL_ID,
    userPoolWebClientId: config.cognito.APP_CLIENT_ID
  },
  Storage: {
    AWSS3: {
      bucket: config.storage.BUCKET,
      region: config.storage.REGION
    }
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
