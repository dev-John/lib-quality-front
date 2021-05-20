import { Input } from "antd";
import { Row, Col } from "antd";
import ResultCard from "./ResultCard";

const { Search } = Input;

const SearchComponent = () => {
  return (
    <>
      <h1>Search for your fav repo</h1>
      <Row>
        <Col span={6} offset={6}>
          <Input placeholder="Repo Owner (ex: Facebook)" />
        </Col>
        <Col span={6}>
          <Input placeholder="Repo Name (ex: React)" />
        </Col>

        <Col span={12} offset={6}>
          <Search placeholder="Github Access Token" enterButton />
        </Col>
      </Row>

      <ResultCard />
    </>
  );
};

export default SearchComponent;
