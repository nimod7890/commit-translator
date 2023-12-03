import { WorkspaceKey } from "./workspace";

const enum Commands {
  SetApiKey = `${WorkspaceKey}.setApiKey`,
  TranslateCommit = `${WorkspaceKey}.translateCommit`,
}

export default Commands;
