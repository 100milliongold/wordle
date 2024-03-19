/**
 * WORD API response
 */
export interface WORD_RES {
  word: string;
  phonetic: string;
  phonetics: WORD_RES_PHONETIC[];
  origin: string;
  meanings: WORD_RES_Meaning[];
}

export interface WORD_RES_Meaning {
  partOfSpeech: string;
  definitions: WORD_RES_DEFINITION[];
}

export interface WORD_RES_DEFINITION {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export interface WORD_RES_PHONETIC {
  text: string;
  audio?: string;
}

export interface WORD_ERR_RES {
  title: string;
  message: string;
  resolution: string;
}
