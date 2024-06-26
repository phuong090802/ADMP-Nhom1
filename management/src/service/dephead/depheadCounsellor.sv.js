import { createHeader } from "../../util/service.util";
import API from "../api";

export const depheadGetCounsellorsSv = async (params) => {
  const header = await createHeader(["author"]);
  return API.get("department-head/counsellors", {
    headers: header,
    params: params,
  });
};

export const depheadUpdateCounsellorStatusSv = async (counsellorId, data) => {
  const header = await createHeader(["author"]);
  console.log(counsellorId);
  return API.patch(`department-head/counsellors/${counsellorId}`, data, {
    headers: header,
  });
};

export const depheadAddCounsellorSv = async (data) => {
  const header = await createHeader(["author"]);
  return API.post("department-head/counsellors", data, {
    headers: header,
  });
};
