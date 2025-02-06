import { generatePath, matchRoutes, useLocation } from "react-router-dom";
import { MAPPING, VIEW_PATH_MAPPING } from "./mapping";
import { LocalPath, View } from "./types";
import queryString, { StringifiableRecord } from "query-string";

export const getPath = ({
  view,
  pathParams = {},
  queryParams = {},
  hashParams = {},
}: {
  view: View;
  pathParams?: StringifiableRecord;
  queryParams?: StringifiableRecord;
  hashParams?: StringifiableRecord;
}) => {
  const initPath = MAPPING[view];
  if (!initPath) {
    return "/";
  }

  const pathWithParams = generatePath(
    initPath,
    pathParams ? { ["*"]: "*", ...pathParams } : undefined
  );

  const path =
    queryString.stringifyUrl({
      url: pathWithParams,
      query: queryParams,
    }) +
    "#" +
    queryString.stringify(hashParams);

  return path;
};

export const useCurrentView = () => {
  const { pathname } = useLocation();

  const matchedPairs = VIEW_PATH_MAPPING.filter(({ path }) => {
    const matches = matchRoutes([{ path }], { pathname }) || [];
    return matches.length > 0;
  });

  const allMatchedViews = matchedPairs
    .sort((pair1, pair2) => {
      const length1 = pair1.path.length;
      const length2 = pair2.path.length;
      if (length1 > length2) {
        return 1;
      } else if (length1 === length2) {
        return 0;
      } else {
        return -1;
      }
    })
    .map((pair) => pair.view);

  //   const mostDetailedMatch = matchedPairs.reduce<{
  //     view?: View;
  //     path?: LocalPath;
  //   }>((acc, currentPair) => {
  //     const isCurrentMoreDetailed =
  //       (acc.path?.length || 0) < currentPair.path.length;
  //     const newView = (
  //       isCurrentMoreDetailed ? currentPair.view : acc.view
  //     ) as View;
  //     const newPath = isCurrentMoreDetailed ? currentPair.path : acc.path;

  //     return {
  //       view: newView,
  //       path: newPath,
  //     };
  //   }, {});

  return {
    currentView: allMatchedViews[allMatchedViews.length - 1],
    allMatchedViews,
  };
};
