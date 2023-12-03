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
  targetLanguage,
}: {
  text: string;
  apiKey: string;
  targetLanguage: string;
}): Promise<TranslatedDataResponse> => {
  const { data } = await client.post(
    `/v2/translate`,
    { text: [text], target_lang: targetLanguage },
    { headers: { Authorization: `DeepL-Auth-Key ${apiKey}` } }
  );
  return data;
};
