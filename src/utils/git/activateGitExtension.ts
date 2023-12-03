import * as vscode from "vscode";
import { GitExtension } from "../../types/vscode";

export async function activateGitExtension(gitExtension: vscode.Extension<GitExtension>) {
  if (!gitExtension.isActive) {
    await gitExtension.activate();
  }
  if (!gitExtension.isActive) {
    throw new Error("Git extension is not active");
  }
}
