import wordBank from "./wordle-seven.txt";

export const boardDefault = [
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
    ["", "", "", "", "", "", ""],
  ];

  export const generateWordSet = async () => {
    let wordSet;
    let selectedWord;
    await fetch(wordBank)
      .then((response) => response.text())
      .then((result) => {
        const wordArr = (result.toLowerCase()).split("\n");
        selectedWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
      });
    return { wordSet, selectedWord };
  };