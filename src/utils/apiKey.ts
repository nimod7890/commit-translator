import getParsedConfiguration from "./getParsedConfiguration";
import validateString from "./validateString";

export function getApiKey() {
  const {
    deepl: { apiKey },
  } = getParsedConfiguration();
  return apiKey;
}

export function isValidateApiKey() {
  const apiKey = getApiKey();
  return validateString(apiKey);
}
