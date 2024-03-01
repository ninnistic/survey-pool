import { http, HttpResponse } from "msw";
import { commonQuestions } from "../fixtures/common_question";
import { aQuestions } from "../fixtures/a_questions";

export const questionHandlers = [
  http.get(`/api/question/common`, () => {
    return HttpResponse.json(commonQuestions);
  }),
  http.get(`/api/question/:typeId`, () => {
    return HttpResponse.json(aQuestions);
  }),
  http.post(`/api/answers/common`, () => {
    return HttpResponse.json({
      status: 200,
      data: {
        isSuccess: true,
        nextTypeId: "1",
        userId: "A12QTB",
      },
    });
  }),
  http.post(`/api/answers/:typeID`, () => {
    return HttpResponse.json({
      status: 200,
      data: {
        isSuccess: true,
      },
    });
  }),
];
