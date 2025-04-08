import { useState } from "react";
import info from "./quizInfo.json";
import puu from "../assets/characters/puu.png";
import kataja from "../assets/characters/kataja.png";
import klonk from "../assets/characters/klonk.png";
import puska from "../assets/characters/puska.png";
import saga from "../assets/characters/saga.png";
import simppa from "../assets/characters/simppa.png";
import suurvelho from "../assets/characters/suurvelho.png";
import tilda from "../assets/characters/tilda.png";
import ulkopuolinen from "../assets/characters/ulkopuolinen.png";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const images = {
    Puu: puu,
    Kataja: kataja,
    Klonk: klonk,
    Puska: puska,
    Saga: saga,
    Simppa: simppa,
    Suurvelho: suurvelho,
    Tilda: tilda,
    Ulkopuolinen: ulkopuolinen,
  };

  const questions = [
    {
      question: "Mikä on lempivärisi?",
      options: [
        { answer: "Punainen", role: "Puska" },
        { answer: "Ruskea", role: "Puu" },
        { answer: "Keltainen", role: "Tilda" },
        { answer: "Oranssi", role: "Ulkopuolinen" },
        { answer: "Sininen", role: "Saga" },
        { answer: "Valkoinen", role: "Suur-Velho" },
        { answer: "Vihreä", role: "Kataja" },
        { answer: "Vaaleanpunainen", role: "Simppa" },
        { answer: "Harmaa", role: "Klonk" },
      ],
    },
    {
      question: "Mitä teet vapaa-ajalla?",
      options: [
        { answer: "Seuraan muita", role: "Puska" },
        { answer: "Nukun", role: "Puu" },
        { answer: "Tapaan sukulaisia", role: "Tilda" },
        { answer: "Suunnittelen tulevaa", role: "Ulkopuolinen" },
        { answer: "Silitän lemmikkiäni", role: "Saga" },
        { answer: "Huolehdin naapuruston hyvinvoinnista", role: "Suur-Velho" },
        { answer: "Hoidan puutarhaa", role: "Kataja" },
        { answer: "Viihdytän muita", role: "Simppa" },
        { answer: "Puuhastelen", role: "Klonk" },
      ],
    },
    {
      question: "Mikä kuvaa sinua parhaiten?",
      options: [
        { answer: "Utelias", role: "Puska" },
        { answer: "Rauhallinen", role: "Puu" },
        { answer: "Hyvä ystävä", role: "Tilda" },
        { answer: "Rohkea", role: "Ulkopuolinen" },
        { answer: "Auttavainen", role: "Saga" },
        { answer: "Arvokas", role: "Suur-Velho" },
        { answer: "Viisas", role: "Kataja" },
        { answer: "Hauska", role: "Simppa" },
        { answer: "Hyvä neuvomaan", role: "Klonk" },
      ],
    },
  ];

  const handleAnswerClick = (role) => {
    const newAnswers = [...answers, role];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult(newAnswers);
    }
  };

  const calculateResult = (answers) => {
    let shuffledAnswers = answers
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const roleCounts = shuffledAnswers.reduce((counts, role) => {
      counts[role] = (counts[role] || 0) + 1;
      return counts;
    }, {});

    const resultrole = Object.keys(roleCounts).reduce((a, b) =>
      roleCounts[a] > roleCounts[b] ? a : b
    );

    setResult(resultrole);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  return (
    <div className="role-quiz">
      <h1>Mikä hahmo et ole -testi</h1>
      {result ? (
        <div className="result">
          <h2>Et ole: {result}!</h2>
          <p>{info[result]}</p>
          <img src={images[result]} />
          <button onClick={restartQuiz}>Tee testi uudelleen</button>
        </div>
      ) : (
        <div className="question">
          <h2>{questions[currentQuestion].question}</h2>
          <ol className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button
                  key={index}
                  onClick={() => handleAnswerClick(option.role)}
                >
                  {option.answer}
                </button>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default Quiz;
