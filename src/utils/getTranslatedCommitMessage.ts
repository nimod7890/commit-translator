import { AxiosError } from "axios";
import { postDeeplApi } from "../api/postDeeplApi";
import { setApiKeyCommand } from "../commands";
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
      getConfiguration().get<string | undefined>("deepl.targetLanguage") ??
      "EN";

    const response = await postDeeplApi({
      text: commit.trim(),
      apiKey: apiKey,
      targetLanguage: targetLanguage.trim(),
    });
    return response.translations[0].text;
  } catch (error) {
    if (error instanceof AxiosError && error.response?.status === 403) {
      const errorMessage = "The API Key is invalid, please enter it again.";
      setApiKeyCommand();
      throw new Error(errorMessage);
    } else if (error instanceof Error) {
      const errorMessage = "Error in deepl api: " + error.message;
      throw new Error(errorMessage);
    } else {
      const errorMessage =
        "An unexpected error occurred while translating the commit message.";
      throw new Error(errorMessage);
    }
  }
}
