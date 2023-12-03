import * as vscode from "vscode";
import { GitExtension, Repository } from "../types/vscode";
import { isEmpty } from "lodash";

export function isGitExtensionValidate(
  gitExtension: vscode.Extension<GitExtension> | undefined
): gitExtension is vscode.Extension<GitExtension> {
  if (!gitExtension) {
    vscode.window.showErrorMessage("Git extension is not installed.");
    return false;
  }
  return true;
}

export async function activateGitExtension(gitExtension: vscode.Extension<GitExtension>) {
  if (!gitExtension.isActive) {
    await gitExtension.activate();
  }
  if (!gitExtension.isActive) {
    throw new Error("Git extension is not active");
  }
}

export function getSingleRepository(gitExtension: vscode.Extension<GitExtension>): Repository {
  const repositories = gitExtension.exports.getAPI(1).repositories;

  if (isEmpty(repositories)) {
    throw new Error("No repositories found");
  }
  return repositories[0];
}
