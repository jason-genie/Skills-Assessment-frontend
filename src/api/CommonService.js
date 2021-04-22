/** @format */

import axios from "axios";
import NProgress from "nprogress";

export const namespaced = true;

const baseUrl = process.env.VUE_APP_API_URL;

const apiClient = axios.create({
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  }
});

export default {
  async getEducations() {
    return apiClient
      .get(`/education`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
  async getWorkExp() {
    return apiClient
      .get(`/education`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
  async getRandomNumber() {
    return apiClient
      .get(`/randomNumber`)
      .then((result) => {
        NProgress.done();
        return result;
      })
      .catch();
  },
};