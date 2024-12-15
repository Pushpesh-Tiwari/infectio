import React from "react";
import Table from "./Table";

interface StringsProps {
  strings: string[];
}

interface StringData {
  id: number;
  value: string;
  length: number;
}

const Strings: React.FC<StringsProps> = ({ strings }) => {
  const data = strings.map((str, index) => ({
    id: index + 1,
    value: str,
    length: str.length,
  }));

  const columns = [
    { label: "Number", dataKey: "id" as keyof StringData, width: 80 },
    { label: "String", dataKey: "value" as keyof StringData },
    { label: "Length", dataKey: "length" as keyof StringData, width: 80 },
  ];

  return <Table data={data} columns={columns} searchKeys={["value"]} />;
};

export default Strings;
