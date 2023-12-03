import * as vscode from "vscode";

export function getDeepLApiKey() {
  const apiKey = vscode.workspace
    .getConfiguration("commit-translator.deepl")
    .get<string>("apiKey");

  return apiKey;
}
