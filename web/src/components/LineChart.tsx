import React, { useRef, useEffect } from "react";
import Dygraph from "dygraphs";
import "dygraphs/dist/dygraph.min.css";

interface LineChartProps {
  labels: string[];
  dataPoints: number[];
  title?: string;
}

const LineChart: React.FC<LineChartProps> = ({ labels, dataPoints, title }) => {
  const graphRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (graphRef.current) {
      const data = labels.map((label, i) => [Number(label), dataPoints[i]]);

      new Dygraph(graphRef.current, data, {
        labels: ["Chunk", "Entropy"],
        title: title || "",
        ylabel: "Entropy",
        xlabel: "Chunk",
        strokeWidth: 1.5,
        fillGraph: true,
        color: "rgb(59, 130, 246)",
      });
    }
  }, [labels, dataPoints, title]);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg w-full">
      <div ref={graphRef} style={{ width: "100%", height: "300px" }}></div>
    </div>
  );
};

export default LineChart;
