import React from "react";
import { Card, Spin, Alert } from "antd";

const { Meta } = Card;

const ResultCard = ({ repoName, repo, isFetching, errorMsg }: any) => {
  return (
    <div style={{ marginTop: 16 }}>
      {isFetching ? <Spin size="large" /> : ""}
      {errorMsg ? (
        <Alert message={errorMsg} type="error" showIcon closable />
      ) : (
        ""
      )}
      {repo && repo.openIssues ? (
        <Card style={{ width: "100%" }}>
          <Meta title={repoName} description="_____________________" />
          <br />
          <h4>Open Issues: {repo.openIssues}</h4>
          <h4>Avg Age: {repo.avgAge}</h4>
          <h4>Std Age: {repo.stdAge}</h4>
        </Card>
      ) : (
        ""
      )}
    </div>
  );
};

export default ResultCard;
