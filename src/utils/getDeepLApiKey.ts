import { ApiKey } from "../constants/api";
import { getConfiguration } from "./configuration/getConfiguration";

export default function getDeepLApiKey(): string | undefined {
  const apiKey = getConfiguration().get<string | undefined>(ApiKey);
  return apiKey;
}
