import { http, HttpResponse } from "msw";
// import { commonQuestions } from "../fixtures/common_question";
import { aQuestions } from "../fixtures/a_questions";
export const testHandlers = [
  http.get("/api/question/common", () => {
    return HttpResponse.json(aQuestions);
  }),
];
