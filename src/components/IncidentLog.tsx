import React from 'react';
import { AlertCircle, Clock, ArrowUpRight } from 'lucide-react';

const IncidentLog = () => {
  const incidents = [
    {
      id: 1,
      timestamp: '2024-03-10 14:23:45',
      type: 'Quality Alert',
      message: 'SSIM score below threshold (0.75)',
      severity: 'high'
    },
    {
      id: 2,
      timestamp: '2024-03-10 14:20:12',
      type: 'System Warning',
      message: 'High temperature affecting sensor performance',
      severity: 'medium'
    },
    {
      id: 3,
      timestamp: '2024-03-10 14:15:30',
      type: 'Processing Error',
      message: 'Frame processing timeout',
      severity: 'low'
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-red-400" />
          <h3 className="font-medium">Recent Incidents</h3>
        </div>
        <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-1">
          View All
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2">
        {incidents.map((incident) => (
          <div key={incident.id} className="flex items-center justify-between bg-slate-700/50 p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <div className={`w-2 h-2 rounded-full ${
                incident.severity === 'high' ? 'bg-red-400' :
                incident.severity === 'medium' ? 'bg-yellow-400' :
                'bg-blue-400'
              }`} />
              <div>
                <p className="font-medium">{incident.type}</p>
                <p className="text-sm text-slate-400">{incident.message}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="w-4 h-4" />
              {incident.timestamp}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IncidentLog;