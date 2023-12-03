import * as vscode from "vscode";
import { WorkspaceKey } from "../constants/workspace";

export function getConfiguration() {
  return vscode.workspace.getConfiguration(WorkspaceKey);
}
