import * as vscode from "vscode";
import { setApiKeyCommand, translateCommitCommand } from "./commands";
import Commands from "./constants/command";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.TranslateCommit, translateCommitCommand)
  );
  context.subscriptions.push(vscode.commands.registerCommand(Commands.SetApiKey, setApiKeyCommand));
}

export function deactivate() {}
