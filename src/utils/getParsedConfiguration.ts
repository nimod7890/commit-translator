import { configurationSchema } from "../types/configuration";
import { getConfiguration } from "./getConfiguration";

export default function getParsedConfiguration() {
  return configurationSchema.parse(getConfiguration());
}
