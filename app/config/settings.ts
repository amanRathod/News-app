import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://fast-island-03332.herokuapp.com",
  },
  staging: {
    apiUrl: "https://fast-island-03332.herokuapp.com",
  },
  prod: {
    apiUrl: "https://fast-island-03332.herokuapp.com",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();