import * as vscode from "vscode";
import { GitExtension } from "../../types/vscode";

export default function getGitExtension() {
  return vscode.extensions.getExtension<GitExtension>("vscode.git");
}
