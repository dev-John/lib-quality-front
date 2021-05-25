import { connect } from "react-redux";

import Search from "../components/Search";

import { searchRepo } from "../store/actions/search";

const mapDispatchToProperties = (dispatch: any) => ({
  searchRepo: (authorization: string, owner: string, repo: string) =>
    dispatch(searchRepo(authorization, owner, repo)),
});

export default connect(null, mapDispatchToProperties)(Search);
