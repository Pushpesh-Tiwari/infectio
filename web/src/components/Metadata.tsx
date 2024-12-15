import React from "react";
import Table from "./Table";

interface Metadata {
  title: string;
  value: string;
}

interface MetadataProps {
  metadata: Metadata[];
}

const Metadata: React.FC<MetadataProps> = ({ metadata }) => {
  metadata = metadata.sort((a, b) => a.title.localeCompare(b.title));

  const columns = [
    { label: "Title", dataKey: "title" as keyof Metadata },
    { label: "Value", dataKey: "value" as keyof Metadata },
  ];

  return (
    <Table
      search={false}
      data={metadata}
      columns={columns}
      searchKeys={["title", "value"]}
    />
  );
};

export default Metadata;
