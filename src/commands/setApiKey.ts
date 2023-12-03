import * as vscode from "vscode";
import isStringValid from "../utils/isStringValid";
import { setConfigurationValue } from "../utils/configuration/setConfiguration";
import { ApiKey } from "../constants/api";

export async function setApiKeyCommand() {
  const apiKey = await vscode.window.showInputBox({
    title: "Please enter your API Key",
  });

  if (!isStringValid(apiKey)) {
    vscode.window.showErrorMessage("api key should be string type");
    return;
  }

  await setConfigurationValue(ApiKey, apiKey);

  return apiKey;
}
