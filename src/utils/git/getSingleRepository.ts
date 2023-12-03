import * as vscode from "vscode";
import { isEmpty } from "lodash";
import { GitExtension, Repository } from "../../types/vscode";

export function getSingleRepository(gitExtension: vscode.Extension<GitExtension>): Repository {
  const repositories = gitExtension.exports.getAPI(1).repositories;

  if (isEmpty(repositories)) {
    throw new Error("No repositories found");
  }
  return repositories[0];
}
