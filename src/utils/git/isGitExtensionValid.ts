import * as vscode from "vscode";
import { GitExtension } from "../../types/vscode";

export function isGitExtensionValid(
  gitExtension: vscode.Extension<GitExtension> | undefined
): gitExtension is vscode.Extension<GitExtension> {
  if (!gitExtension) {
    vscode.window.showErrorMessage("Git extension is not installed.");
    return false;
  }
  return true;
}
