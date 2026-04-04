import QuestionTimer from './QuestionTimer';
import Answers from './Answers';

export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answerState,
  onSkipAnswer,
}) {
  return (
    <div id='question'>
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      {/* ^ using key to force re-creation of the timer when the active question changes. basically having a different timer for each question */}
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
        onSelect={onSelectAnswer}
      />
      {/*  ^ using key here to force re-creation of the component when the active question changes */}
    </div>
  );
}
