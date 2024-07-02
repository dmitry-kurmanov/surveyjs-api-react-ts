import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';

export default function AddNewSurveyButton({label, onClickHandler}: {label: string, onClickHandler:()=>void}) {
    return <IconButton
    onClick={()=>{onClickHandler();}}
    className="add-new-survey-button"
    color="secondary"
    aria-label={label}
  >
    <AddIcon fontSize="large" />
  </IconButton>
}