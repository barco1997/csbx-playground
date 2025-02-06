import { View } from "./types";

export const MAPPING = Object.freeze({
  REDIRECT: "/",
  MAIN: "/main/*",
  MAIN_ABOUT: "/main/about",
  MAIN_FEEDBACK: "/main/feedback",
  CONTACTS: "/contacts",
});

export const VIEW_PATH_MAPPING = Object.entries(MAPPING).map(
  ([key, value]) => ({
    view: key as View,
    path: value,
  })
);
