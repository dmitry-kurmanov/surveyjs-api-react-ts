import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../state-container/store.ts';
import {setLocale} from "../../state-container/slices/localeSlice.ts"

export default function Header() {
  const currentLocale = useSelector((state:RootState) => state.locale.value);
  const dispatch = useDispatch();

    return <header>
      <label>
  <select name="locale" defaultValue={currentLocale} onChange={e => dispatch(setLocale(e.target.value))}>
    <option value="en">EN</option>
    <option value="ru">RU</option>
  </select>
</label>
    </header>
}