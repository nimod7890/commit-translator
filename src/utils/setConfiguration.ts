import * as vscode from "vscode";
import { getConfiguration } from "./getConfiguration";

export async function setConfigurationValue(key: string, value: string) {
  const configuration = getConfiguration();
  await configuration.update(key, value, vscode.ConfigurationTarget.Global);
}
