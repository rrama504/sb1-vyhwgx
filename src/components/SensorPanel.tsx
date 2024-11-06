import React from 'react';
import { Sun, Thermometer, Droplets } from 'lucide-react';
import type { SensorData } from '../hooks/useSocket';

interface SensorPanelProps {
  data: SensorData | null;
}

const SensorPanel: React.FC<SensorPanelProps> = ({ data }) => {
  const sensors = [
    {
      icon: <Sun className="w-5 h-5 text-yellow-400" />,
      label: "Ambient Light",
      value: `${data?.light || 1200} lux`,
      status: "Optimal",
      statusColor: "text-green-400"
    },
    {
      icon: <Thermometer className="w-5 h-5 text-red-400" />,
      label: "Temperature",
      value: `${data?.temperature || 24.5}°C`,
      status: Number(data?.temperature) > 25 ? "Warning" : "Normal",
      statusColor: Number(data?.temperature) > 25 ? "text-yellow-400" : "text-green-400"
    },
    {
      icon: <Droplets className="w-5 h-5 text-blue-400" />,
      label: "Humidity",
      value: `${data?.humidity || 45}%`,
      status: "Normal",
      statusColor: "text-green-400"
    }
  ];

  return (
    <div className="space-y-4">
      {sensors.map((sensor, index) => (
        <div key={index} className="flex items-center justify-between bg-slate-700/50 p-4 rounded-lg">
          <div className="flex items-center gap-3">
            {sensor.icon}
            <div>
              <p className="text-sm text-slate-300">{sensor.label}</p>
              <p className="text-lg font-semibold">{sensor.value}</p>
            </div>
          </div>
          <span className={`${sensor.statusColor} text-sm`}>{sensor.status}</span>
        </div>
      ))}
    </div>
  );
};

export default SensorPanel;