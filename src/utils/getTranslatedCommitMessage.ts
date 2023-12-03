import * as vscode from "vscode";
import { postDeeplApi } from "../api/postDeeplApi";
import { getConfiguration } from "./configuration/getConfiguration";

type getTranslatedCommitMessageProps = {
  commit: string;
  apiKey: string;
};

export default async function getTranslatedCommitMessage({
  commit,
  apiKey,
}: getTranslatedCommitMessageProps): Promise<string> {
  try {
    const targetLanguage =
      getConfiguration().get<string | undefined>("deepl.targetLanguage") ?? "EN";

    const response = await postDeeplApi({
      text: commit.trim(),
      apiKey: apiKey,
      targetLanguage: targetLanguage.trim(),
    });
    return response.translations[0].text;
  } catch (error) {
    if (error instanceof Error) {
      vscode.window.showErrorMessage(error.message);
      throw error;
    } else {
      throw new Error("An error occurred while translating the commit message.");
    }
  }
}
