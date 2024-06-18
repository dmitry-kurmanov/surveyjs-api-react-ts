import { useSelector, useDispatch } from "react-redux";
import { IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import Link from "@mui/material/Link";

import { RootState } from "../../state-container/store.ts";
import { setLocale, setTheme } from "../../state-container/slices/settings.ts";
import "./Header.scss";
import getTexts from "../../localization/localization.ts";

export default function Header() {
  const currentLocale = useSelector(
    (state: RootState) => state.settings.value.locale,
  );
  const currentTheme = useSelector(
    (state: RootState) => state.settings.value.theme,
  );
  const dispatch = useDispatch();
  const theme = useTheme();
  const { darkMode, lightMode } = getTexts(currentLocale).settings;

  return (
    <header>
      <div className="logo">
        <Link href="/">
          <HomeIcon fontSize="large" />
        </Link>
      </div>
      <div className="settings-container">
        <label>
          <select
            name="locale"
            defaultValue={currentLocale}
            onChange={(e) => {
              const newLocale = e.target.value;
              document.documentElement.lang = newLocale;
              dispatch(setLocale(newLocale));
            }}
          >
            <option value="en">EN</option>
            <option value="ru">RU</option>
          </select>
        </label>
        <div className="theme-switcher">
          {theme.palette.mode === "dark" ? darkMode : lightMode}
          <IconButton
            onClick={() =>
              dispatch(setTheme(currentTheme === "dark" ? "light" : "dark"))
            }
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </div>
      </div>
    </header>
  );
}
