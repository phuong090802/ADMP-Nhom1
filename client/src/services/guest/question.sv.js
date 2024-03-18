import API from "../api";
import { authHeader } from "../requestHeader";

const getQuestionsSv = (params) => {
  return API.get("questions", {
    params: params,
  });
};

const createQuestionSv = (data) => {
  const tokenHeader = authHeader();
  return API.post("user/questions", data, {
    headers: { "Content-Type": "multipart/form-data", ...tokenHeader },
  });
};

export { getQuestionsSv, createQuestionSv };
