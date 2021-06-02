import React from "react";
import { Card, Avatar } from "antd";

const { Meta } = Card;

const ResultCard = ({ repo }: any) => {
  console.log("Resut CARD", repo);
  return (
    <>
      <Card style={{ width: "100%", marginTop: 16 }}>
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Card title"
          description="Infos about the repository"
        />
        <br />
        <h4>Open Issues: {repo.openIssues}</h4>
        <h4>Avg Age: {repo.avgAge}</h4>
        <h4>Std Age: {repo.stdAge}</h4>
      </Card>
    </>
  );
};

export default ResultCard;
