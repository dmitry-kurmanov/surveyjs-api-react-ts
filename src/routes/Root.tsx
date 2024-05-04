import Counter from '../components/counter/Counter.tsx'
import SurveysList from '../components/surveyList/SurveysList.tsx'

function App() {
  return (
    <>
      <div><Counter /></div>
      <br />
      <div className="survey-list-container">
        <SurveysList />
      </div>
    </>
  );
}

export default App;
