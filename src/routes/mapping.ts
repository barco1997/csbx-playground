export const MAPPING = Object.freeze({
  REDIRECT: "/",
  MAIN: "/main/*",
  MAIN_ABOUT: "/main/about",
  CONTACTS: "/contacts",
});

export const VIEW_PATH_MAPPING = Object.entries(MAPPING).map(
  ([key, value]) => ({
    view: key,
    path: value,
  })
);
