import { useState } from 'react';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

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
        { answer: "Musta", role: "Sotka" },
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
        { answer: "Pidän huolta jälkeläisestäni", role: "Sotka" },
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
        { answer: "Omituinen", role: "Sotka" },
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
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value)
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
      <h1>Mikä hahmo olet -testi</h1>
      {result ? (
        <div className="result">
          <h2>Olet: {result}!</h2>
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
