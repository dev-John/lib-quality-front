import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const ResultCard = ({ repoName, repo }: any) => {
  return (
    <>
      {repo && repo.openIssues ? (
        <Card style={{ width: "100%", marginTop: 16 }}>
          <Meta title={repoName} description="_____________________" />
          <br />
          <h4>Open Issues: {repo.openIssues}</h4>
          <h4>Avg Age: {repo.avgAge}</h4>
          <h4>Std Age: {repo.stdAge}</h4>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default ResultCard;
