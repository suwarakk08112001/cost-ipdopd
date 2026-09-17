// src/boot/axios.ts
// import { boot } from "quasar/wrappers";
import { boot } from "quasar/wrappers";
import axios from "axios";
import type {
  AxiosInstance,

} from "axios";

declare module "vue" {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// function getApiBaseURL(): string {
//   const url = import.meta.env.VITE_API_URL;

//   return typeof url === 'string' && url.length > 0
//     ? url
//     :'https://medicalpalianbackend.vercel.app/api/v1'
//     // : 'http://localhost:3007/api/v1';
// }

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://192.168.0.38:4005/api/v1"
  // "http://localhost:3007/api/v1",
});



export { api };
