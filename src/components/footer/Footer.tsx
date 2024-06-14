import Link from "@mui/material/Link";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div>Have a problems? Feel free to</div>{" "}
      <Link
        href="https://github.com/dmitry-kurmanov/surveyjs-api-react-ts/issues"
        target="_blanc"
      >
        create an issue.
      </Link>
    </footer>
  );
}
