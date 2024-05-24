import SurveysList from '../components/surveyList/SurveysList.tsx'

import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../state-container/store.ts';
import {setLocale} from "../state-container/slices/localeSlice.ts"

function RootPage() {
  const currentLocale = useSelector((state:RootState) => state.locale.value);
  const dispatch = useDispatch();

  return <>
      <SurveysList />
  </>
}

export default RootPage;
