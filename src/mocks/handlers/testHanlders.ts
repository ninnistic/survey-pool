import { http, HttpResponse } from "msw";
import { commonQuestions } from "../fixtures/common_question";
import { aQuestions } from "../fixtures/a_questions";

export const testHandlers = [
  http.get("/api/question/common", () => {
    return HttpResponse.json(commonQuestions);
  }),
  http.get(`api/question/:typeID`, () => {
    return HttpResponse.json(aQuestions);
  }),
];
