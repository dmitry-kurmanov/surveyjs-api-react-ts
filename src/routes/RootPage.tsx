import SurveysList from '../components/surveyList/SurveysList.tsx'

import { setLocale } from '../localization/localization.ts';

function RootPage() {
  return <>
    <header>
      <label>
        <select name="locale" defaultValue="en" onChange={e => setLocale(e.target.value)}>
          <option value="en">EN</option>
          <option value="ru">RU</option>
        </select>
      </label>
    </header>
    <main>
      <SurveysList />
    </main>
  </>
}

export default RootPage;
