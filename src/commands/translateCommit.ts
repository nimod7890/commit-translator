import { isEmpty } from "lodash";
import * as vscode from "vscode";
import { setApiKeyCommand } from ".";
import { GitExtension } from "../types/vscode";

import { getDeepLApiKey } from "../utils/getDeepLApiKey";
import { getTranslatedCommitMessage } from "../utils/getTranslatedCommitMessage";
import {
  activateGitExtension,
  getSingleRepository,
  isGitExtensionValidate,
} from "../utils/gitExtension";
import validateString from "../utils/validateString";

export async function translateCommitCommand() {
  /** 1. (success) check if git extension is valid */
  const gitExtension =
    vscode.extensions.getExtension<GitExtension>("vscode.git");
  if (!isGitExtensionValidate(gitExtension)) {
    return;
  }
  await activateGitExtension(gitExtension);

  /** 2. (success ?) check if apiKey is valid */
  let apikey: string | undefined = getDeepLApiKey();
  if (!validateString(apikey)) {
    apikey = await setApiKeyCommand();
    // vscode.window.showInformationMessage(apikey as string);
    // await vscode.commands.executeCommand(Commands.SetApiKey);
  }

  // if (!isValidateApiKey()) {
  //   vscode.window.showInformationMessage("api key is invalid");
  //   return;
  // vscode.window.showInformationMessage(apikey as string);
  // await vscode.commands.executeCommand(Commands.SetApiKey);
  // }

  /** 3. (success) get repository from git */
  const repository = getSingleRepository(gitExtension);

  /** 4. (success) get commit from repository */
  const commit = repository.inputBox.value;
  if (isEmpty(commit)) {
    vscode.window.showErrorMessage("Commit message is empty");
    return;
  }
  /** 5. (success) translate commit message with Deepl api */
  const translatedMessage = await getTranslatedCommitMessage({
    apikey: apikey as string,
    commit,
  });

  /** 6. (success) log translated commit */
  repository.inputBox.value = translatedMessage;
}
