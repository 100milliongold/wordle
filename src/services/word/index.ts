import useSWR from 'swr';
import axios, { AxiosError } from 'axios';
import { WORD_RES, WORD_ERR_RES } from 'types';

const word = (word: string) =>
  `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

function useWord(str: string) {
  const { data, error, isLoading } = useSWR(word(str), fetcher);

  return {
    user: data,
    isLoading,
    isError: error as AxiosError<WORD_ERR_RES> | undefined,
  };
}

const fetcher = (url: string) =>
  axios.get<WORD_RES>(url).then((res) => res.data);

export default useWord;
