import React from 'react';
import { LineChart, Clock, Zap } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AnalyticsPanel = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-blue-400" />
          <span className="text-sm">Processing Time Trend</span>
        </div>
        <Select defaultValue="hour">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hour">Last Hour</SelectItem>
            <SelectItem value="day">Last Day</SelectItem>
            <SelectItem value="week">Last Week</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="h-32 bg-slate-700/50 rounded-lg flex items-center justify-center">
        <LineChart className="w-6 h-6 text-slate-500" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-700/50 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-slate-300">Success Rate</span>
          </div>
          <p className="text-xl font-bold">98.5%</p>
        </div>
        <div className="bg-slate-700/50 p-3 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-slate-300">Avg. Time</span>
          </div>
          <p className="text-xl font-bold">24ms</p>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPanel;