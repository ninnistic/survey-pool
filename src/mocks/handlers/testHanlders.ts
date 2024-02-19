import { http, HttpResponse } from "msw";
import { commonQuestions } from "../fixtures/common_question";
export const testHandlers = [
  http.get("/api/question/common", () => {
    return HttpResponse.json(commonQuestions);
  }),
];
