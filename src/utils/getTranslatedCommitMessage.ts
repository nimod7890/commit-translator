import * as vscode from "vscode";
import { postDeeplApi } from "../api/postDeeplApi";

type getTranslatedCommitMessageProps = {
  commit: string;
  apiKey: string;
};

export default async function getTranslatedCommitMessage({
  commit,
  apiKey,
}: getTranslatedCommitMessageProps): Promise<string> {
  try {
    const response = await postDeeplApi({ text: commit, apiKey });
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
