import { postDeeplApi } from "../api/postDeeplApi";
import * as vscode from "vscode";
type getTranslatedCommitMessageProps = {
  commit: string;
  apikey: string;
};

export async function getTranslatedCommitMessage({
  commit,
  apikey,
}: getTranslatedCommitMessageProps): Promise<string> {
  try {
    const response = await postDeeplApi({ text: commit, apiKey: apikey });
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
