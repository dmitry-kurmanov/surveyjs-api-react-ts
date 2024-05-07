import Counter from '../components/counter/Counter.tsx'
import SurveysList from '../components/surveyList/SurveysList.tsx'

function RootPage() {
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

export default RootPage;