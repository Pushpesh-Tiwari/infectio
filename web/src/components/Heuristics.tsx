import React from "react";
import Table, { ColumnConfig } from "./Table";
import { Heuristic } from "@/types/types";
import { renderSeverity } from "@/utils/display";

interface HeuristicsProps {
  heuristics: Heuristic[];
}

const Heuristics: React.FC<HeuristicsProps> = ({ heuristics }) => {
  const columns: ColumnConfig<Heuristic>[] = [
    {
      label: "Heuristic",
      dataKey: "name",
      cellRenderer: (cell) => {
        // TODO(@filippofinke): Render description as tooltip
        return cell.cellData;
      },
    },
    {
      label: "Severity",
      dataKey: "severity",
      width: 140,
      cellRenderer: (cell) => {
        return renderSeverity(cell.cellData);
      },
    },
  ];

  return <Table search={false} data={heuristics} columns={columns} />;
};

export default Heuristics;
