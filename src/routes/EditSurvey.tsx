import { useParams } from 'react-router';

export default function EditSurvey() {
    const { surveyId } = useParams();

    return <div>
        edit survey: {surveyId}
        <a href="/">Go Back</a>
    </div>
}