// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

// just test key ASD-test-123@ASD-test-123.com
export const surveyjsAccessKey = "18c33d8395564eb290b14458f5601c47";

export interface ISurvey {
  Id: string;
  Name: string;
  Json: string;
}

interface ISurveyInfo {
  Info: {
    UpdatedOn: string;
  };
  Json: string;
}

const baseUrl = "https://api.surveyjs.io/private/Surveys";
const baseQuery = fetchBaseQuery({
  baseUrl,
});
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "surveyjsAPI",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Survey'],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getActiveSurveys: builder.query<ISurvey[], void>({
      // The URL for the request
      query: () => `/getActive?accessKey=${surveyjsAccessKey}`,
      providesTags: ['Survey']
    }),
    getSurveyInfo: builder.query<ISurveyInfo, string>({
      query: (surveyId) =>
        `/getSurveyInfo?accessKey=${surveyjsAccessKey}&surveyId=${surveyId}`,
    }),
    addNewSurvey: builder.mutation<ISurvey, void>({
      query: () => ({
        url: `/create?name=${"New Survey"}&accessKey=${surveyjsAccessKey}`,
        method: "POST",
      }),
      invalidatesTags: ['Survey']
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetActiveSurveysQuery,
  useGetSurveyInfoQuery,
  useAddNewSurveyMutation,
} = apiSlice;
