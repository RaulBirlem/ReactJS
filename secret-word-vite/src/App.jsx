
import './App.css'

import StartScreen from './components/StartScreen'
import Game from "./components/Game"
import GameOver from "./components/GameOver"
import { useCallback, useEffect, useState } from 'react'

import {wordsList} from "./assets/Words"

const stages = [
  {id:1, name:"start"},
  {id:2, name:"game"},
  {id:3, name:"end"}
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage]=useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score,setScore] = useState(10);

  const pickWordAndCategory = useCallback(() =>{
    const categories =Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

  

    const word = words[category][Math.floor(Math.random() * words[category].length)];

   
    return {word,category}

  },[words]);//useCallback need 'words' working


  //starts the game
  const startGame = useCallback(() => {

    //clear all letters
    clearLetterStates();


    //pickword and pick category
   const {word,category} = pickWordAndCategory();


    // create array of letters from chosen word
    let wordLetter = word.split("");

    wordLetter = wordLetter.map((l) => l.toLowerCase());

    

    //fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetter);

    setGameStage(stages[1].name);
  },[pickWordAndCategory]);//useCallback need 'pickWordAndCategory' working


  //process the letter input
  const verifyLetter = (letter) =>{
    const normalizedLetter = letter.toLowerCase();
  //verifry letter already utilized
    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return;
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters) =>[
        ...actualGuessedLetters,
        normalizedLetter//add
      //add correct letter to array
      ])
    }else {
      setWrongLetters((actualWrongLetters) =>[
        ...actualWrongLetters,
        normalizedLetter//add
      //add wrong letter to array
      ])
      // decrement guesses
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }


 //stop game if guess = 0 
  useEffect(() => { 
    //reset all stages (restart) when game over
    if(guesses <= 0){
      clearLetterStates();
      setGameStage(stages[2].name);
    }
  
  }, [guesses])
  
//check win condition
  useEffect(()=> {
    //...new Set() take unique items to array
    const uniqueLetters =[... new Set(letters)];

    //win condition
    if(guessedLetters.length === uniqueLetters.length){
      //add score
      setScore((actualScore) => actualScore += 100);

      //restart game with score
      startGame();
    }


  },[guessedLetters, letters, startGame]);
//useCallback to fix this dependency of startGame


// restart
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);

  }

  return (
   <div className="App">
    {gameStage === "start" && <StartScreen startGame={startGame}/>}
    {gameStage === "game" && <Game 
    verifyLetter={verifyLetter} 
    pickedWord={pickedWord} 
    pickedCategory={pickedCategory} 
    letters={letters}
    guessedLetters={guessedLetters}
    wrongLetters={wrongLetters}
    guesses={guesses}
    score={score}/>}
    {gameStage === "end" && <GameOver retry={retry} score={score}/>}
   </div>
  )
}

export default App
