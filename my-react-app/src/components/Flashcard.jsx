import { useState } from "react";

export default function Flashcard() {
  const flashcard = [
    {
      questions: "You won't lose weight if you don't stop eating much",
      answer: "Unless you stop eating so much, you won't lose weight",
    },
    {
      questions: "Jane has been working for KPNG for 6 years",
      answer: "It has been 6 years since Jane started working for KPNG",
    },
    {
      questions: "He is my friend as well as yours",
      answer: "He is not only my friend but also yours",
    },
    {
      questions: "The water was so cold that the children could not swim in it",
      answer: "Water was not warm enough for the children to swim in it",
    },
    {
      questions:
        "After for years abroad, Mr.Alan returned home as an excellent engineer",
      answer:
        "After Mr.Alan had been abroad for four years, he returned home as en excellent engineer",
    },
    {
      questions: "What is the height of this skyscraper?",
      answer: "How high is this skyscraper",
    },
    {
      questions:
        "The book was very interesting. I borrowed it form the school library",
      answer:
        "The book was so interesting that I borrowed it form the school library",
    },
    {
      questions: "The heavy rain made it impossible for us to have our picnic",
      answer: "We were unable to have our picnic because of the heavy rain",
    },
    {
      questions: "They think that the owner of the house has gone abroad",
      answer: "The owner of the house is thought to have gone abroad",
    },
    {
      questions:
        "My grandfather used to be an astronaut. He has been retired for ten years now",
      answer:
        "My grandfather, who used to be an astronaut, has been retired for ten years",
    },
    {
      questions: "To live in the countryside alone could be hard for her",
      answer: "She might find it hard to live in the countryside alone",
    },
    {
      questions: "Where's the best place to buy souvenirs?",
      answer: "I asked her where the best place to buy souvenirs was",
    },
    {
      questions: `"I must do my assignment about the marketing plan tonight," said Jasson`,
      answer:
        "Jasson said that he had to do his assignment about the marketing plan that night",
    },
    {
      questions: "My mother used to play volleyball when she was young",
      answer: "My mother doesn't play volleyball any more",
    },
    {
      questions: "There was an art gallery in front of my house many years ago",
      answer:
        "There used to be an art gallery in front of my house many years ago",
    },
    {
      questions: "They lost the match because of the heavy rain",
      answer: "If it hadn't rained heavily, they wouldn't have lost the match",
    },
  ];
  const getRandomIndex = () => Math.floor(Math.random() * flashcard.length);
  const [index, setIndex] = useState(getRandomIndex());
  const [inputVal, setInputVal] = useState("");
  const [result, setResult] = useState(null);

  const current = flashcard[index];

  function checkAnswer(e) {
    e.preventDefault();
    setResult(
      current.answer.toLowerCase() === inputVal.trim().toLocaleLowerCase()
    );
  }

  function nextQuestion() {
    setIndex(getRandomIndex());
    setInputVal("");
    setResult(null);
  }

  return (
    <>
      <form onSubmit={checkAnswer}>
        <label>{current.questions}</label>
        <br />
        <textarea
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        ></textarea>
        <br />
        <button>Submit</button>
        <button type="button" onClick={nextQuestion}>
          Next
        </button>
      </form>

      {result !== null && (
        <p>{result ? "✅ Correct" : `❌ Wrong! Answer is: ${current.answer}`}</p>
      )}
    </>
  );
}
