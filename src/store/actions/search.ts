import { api } from "./../../helpers/conn";
import { isSuccess } from "../actionUtilities";
import {
  SET_REPO_INFO,
  SET_FETCHING,
  CLEAR_REPO_INFO,
  SET_ERROR_MESSAGE,
} from "../actionTypes";

const clearRepoInfo = (): any => ({
  type: CLEAR_REPO_INFO,
});
const setFetching = (isFetching: Boolean): any => ({
  type: SET_FETCHING,
  payload: { isFetching },
});
const setErrorMsg = (errorMsg: String): any => ({
  type: SET_ERROR_MESSAGE,
  payload: { errorMsg },
});
const setRepoInfo = (data: any): any => ({
  type: SET_REPO_INFO,
  payload: { repoData: data },
});

export function searchRepo(authorization: string, owner: string, repo: string) {
  return (dispatch: any) => {
    dispatch(clearRepoInfo());
    dispatch(setFetching(true));

    api
      .get("get-repository", {
        params: {
          owner,
          repo,
        },
        headers: {
          authorization,
        },
      })
      .then((result) => {
        isSuccess(result)
          ? dispatch(setRepoInfo(result.data.data))
          : dispatch(setErrorMsg(result.data.message));
      })
      .catch((err) => console.log(err))
      .finally(() => dispatch(setFetching(false)));
  };
}
