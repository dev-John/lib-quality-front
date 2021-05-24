import axios from "axios";
import { Input } from "antd";
import { Row, Col } from "antd";
import ResultCard from "./ResultCard";
import { useState } from "react";

const { Search } = Input;

const SearchComponent = () => {
  const [authorization, setAuthorization] = useState(String);
  const [owner, setOwner] = useState(String);
  const [repo, setRepo] = useState(String);

  const getRepoInfo = () => {
    axios.get("get-repository", {
      headers: {
        authorization,
      },
    });
  };

  return (
    <>
      <h1>Search for your fav repo</h1>
      <Row>
        <Col span={6} offset={6}>
          <Input
            placeholder="Repo Owner (ex: Facebook)"
            onChange={(e) => setOwner(e.target.value)}
          />
        </Col>
        <Col span={6}>
          <Input
            placeholder="Repo Name (ex: React)"
            onChange={(e) => setRepo(e.target.value)}
          />
        </Col>

        <Col span={12} offset={6}>
          <Search
            placeholder="Github Access Token"
            onChange={(e) => setAuthorization(e.target.value)}
            enterButton
          />
        </Col>
      </Row>

      <ResultCard />
    </>
  );
};

export default SearchComponent;
