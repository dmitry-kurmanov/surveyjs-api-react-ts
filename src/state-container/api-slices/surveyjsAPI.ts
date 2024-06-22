// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";

// just test key
// need encryption for the real one
export const surveyjsAccessKey = "f60db1fb75f440eaaddc46bfca1a8c03";

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
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getActiveSurveys: builder.query<ISurvey[], void>({
      // The URL for the request
      query: () => `/getActive?accessKey=${surveyjsAccessKey}`,
    }),
    getSurveyInfo: builder.query<ISurveyInfo, void>({
      query: surveyId => `/getSurveyInfo?accessKey=${surveyjsAccessKey}&surveyId=${surveyId}`,
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetActiveSurveysQuery, useGetSurveyInfoQuery } = apiSlice;