import { http, HttpResponse } from "msw";

export const testHandlers = [
  http.get("/no", () => {
    return HttpResponse.json({ id: "abc-123" });
  }),
];
