import { connect } from "react-redux";

import ResultCard from "../components/ResultCard";

import { searchRepo } from "../store/actions/search";

const mapStateToProps = (state: any) => {
  return { repo: state.search.repo };
};

const mapDispatchToProperties = (dispatch: any) => ({
  searchRepo: (authorization: string, owner: string, repo: string) =>
    dispatch(searchRepo(authorization, owner, repo)),
});

export default connect(mapStateToProps, mapDispatchToProperties)(ResultCard);
