import * as vscode from "vscode";
import { setApiKeyCommand } from ".";
import { isGitExtensionValid, activateGitExtension, getSingleRepository } from "../utils/git";
import getTranslatedCommitMessage from "../utils/getTranslatedCommitMessage";
import getDeepLApiKey from "../utils/getDeepLApiKey";
import isStringValid from "../utils/isStringValid";
import { isEmpty } from "lodash";
import getGitExtension from "../utils/git/getGitExtension";

export async function translateCommitCommand() {
  /** 1. check if git extension is valid & activate git extension*/
  const gitExtension = getGitExtension();
  if (!isGitExtensionValid(gitExtension)) {
    return;
  }
  await activateGitExtension(gitExtension);

  /** 2. check if apiKey exists*/
  let apiKey = getDeepLApiKey();
  if (!isStringValid(apiKey)) {
    apiKey = await setApiKeyCommand();
  }

  if (!isStringValid(apiKey)) {
    return;
  }

  /** 3. get repository from git */
  const repository = getSingleRepository(gitExtension);

  /** 4. get commit from repository */
  const commit = repository.inputBox.value;
  if (isEmpty(commit)) {
    vscode.window.showErrorMessage("Commit message is empty");
    return;
  }

  /** 5. translate commit message with Deepl api */
  const translatedMessage = await getTranslatedCommitMessage({
    commit,
    apiKey,
  });

  /** 6. log translated commit */
  repository.inputBox.value = translatedMessage;
}
