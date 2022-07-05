import http from "./http";
import apiURL from "../config.json";

const apiEndPoint = apiURL.apiURL + "/vPointToStack";

export function getPickzeitData(data) {
  return http.post(apiEndPoint, data);
}
