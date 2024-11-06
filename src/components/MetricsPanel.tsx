import React from 'react';
import { Card } from "@/components/ui/card";
import type { SensorData } from '../hooks/useSocket';

interface MetricsPanelProps {
  data: SensorData | null;
}

const MetricsPanel: React.FC<MetricsPanelProps> = ({ data }) => {
  const metrics = [
    {
      label: "SSIM Score",
      value: data?.ssim || "0.892",
      color: "text-blue-400"
    },
    {
      label: "PSNR",
      value: `${data?.psnr || "32.45"} dB`,
      color: "text-green-400"
    },
    {
      label: "Processing Time",
      value: `${data?.processingTime || "24"}ms`,
      color: "text-purple-400"
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-slate-800 border-slate-700 p-4">
          <h3 className="text-sm font-medium text-slate-300">{metric.label}</h3>
          <p className={`text-2xl font-bold ${metric.color}`}>{metric.value}</p>
        </Card>
      ))}
    </div>
  );
};

export default MetricsPanel;