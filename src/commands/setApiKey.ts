import * as vscode from "vscode";
import { setConfigurationValue } from "../utils/setConfiguration";
import validateString from "../utils/validateString";
import { ApiKey } from "../constants/api";

export async function setApiKeyCommand() {
  const apiKey = await vscode.window.showInputBox({
    title: "Please enter your API Key",
  });

  if (!validateString(apiKey)) {
    vscode.window.showErrorMessage("api key should be string type");
    return;
  }

  await setConfigurationValue(ApiKey, apiKey);

  return apiKey;
}
