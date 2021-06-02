// import { makeActionCreator } from "../../helpers";k
import { SET_REPO_INFO } from "../actionTypes";
import { api } from "./../../helpers/conn";

const setRepoInfo = (data: any): any => ({
  type: SET_REPO_INFO,
  payload: { repoData: data },
});

export function searchRepo(authorization: string, owner: string, repo: string) {
  console.log("AQUI");

  return (dispatch: any) => {
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
        console.log(result.data);
        dispatch(setRepoInfo(result.data.data));
      });
  };
}
