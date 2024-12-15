import React from "react";
import Table from "./Table";

interface UrlsProps {
  urls: string[];
}

interface UrlsData {
  value: string;
}

const Urls: React.FC<UrlsProps> = ({ urls }) => {
  const data = urls.map((url) => ({
    value: url,
  }));

  const columns = [{ label: "URL", dataKey: "value" as keyof UrlsData }];

  return <Table data={data} columns={columns} searchKeys={["value"]} />;
};

export default Urls;
