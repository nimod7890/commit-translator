import { client } from ".";

type TranslatedDataResponse = {
  translations: [
    {
      detected_source_language: string;
      text: string;
    }
  ];
};

export const postDeeplApi = async ({
  text,
  apiKey,
}: {
  text: string;
  apiKey: string;
}): Promise<TranslatedDataResponse> => {
  const { data } = await client.post(
    `/v2/translate`,
    { text: [text], target_lang: "EN" },
    { headers: { Authorization: `DeepL-Auth-Key ${apiKey}` } }
  );
  return data;
};
