import { isEmpty } from "lodash";

export default function isStringValid(text: string | null | undefined): text is string {
  return Boolean(text) && !isEmpty(text);
}
