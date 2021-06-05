import { Input } from "antd";
import { Row, Col } from "antd";
import ResultCard from "../containers/Result";
import { useState } from "react";

const { Search } = Input;

const SearchComponent = ({ searchRepo }: any) => {
  const [authorization, setAuthorization] = useState(String);
  const [owner, setOwner] = useState(String);
  const [repo, setRepo] = useState(String);

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
            onSearch={() => searchRepo(authorization, owner, repo)}
            enterButton
          />
        </Col>
        <Col span={12} offset={6}>
          <ResultCard repoName={owner.concat("/").concat(repo)} />
        </Col>
      </Row>
    </>
  );
};

export default SearchComponent;
