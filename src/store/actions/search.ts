import { api } from "./../../helpers/conn";

export function searchRepo(authorization: string, owner: string, repo: string) {
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
        console.log(result);
      });
  };
}
