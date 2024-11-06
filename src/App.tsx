import React, { useState } from 'react';
import { Camera, Settings, Download, AlertCircle, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useSocket } from './hooks/useSocket';
import ImageDisplay from './components/ImageDisplay';
import SensorPanel from './components/SensorPanel';
import AnalyticsPanel from './components/AnalyticsPanel';
import ConfigPanel from './components/ConfigPanel';
import MetricsPanel from './components/MetricsPanel';

function App() {
  const [showConfig, setShowConfig] = useState(false);
  const { sensorData, alerts } = useSocket();

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Alerts Section */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto p-4 space-y-2">
          {alerts.map((alert) => (
            <Alert 
              key={alert.id} 
              variant={alert.type === 'error' ? 'destructive' : 'warning'}
              className="bg-slate-800 border-slate-700"
            >
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>{alert.message}</span>
                <span className="text-sm opacity-70">{new Date(alert.timestamp).toLocaleTimeString()}</span>
              </AlertDescription>
            </Alert>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6 pt-20">
        <header className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Camera className="w-8 h-8 text-blue-400" />
            <h1 className="text-2xl font-bold">AutoVision Restore</h1>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline"
              onClick={() => setShowConfig(!showConfig)}
              className="flex items-center gap-2"
            >
              <Settings className="w-4 h-4" />
              Settings
            </Button>
            <Button className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export Report
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6">
          {/* Main Image Section */}
          <div className="col-span-8 space-y-6">
            <Card className="bg-slate-800 border-slate-700">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold">Live Restoration</h2>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                      Live
                    </span>
                  </div>
                </div>
                <ImageDisplay type="restored" isLive={true} />
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-slate-800 border-slate-700">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Input Image</h2>
                  <ImageDisplay type="input" />
                </div>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Deteriorated Image</h2>
                  <ImageDisplay type="deteriorated" />
                </div>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 space-y-6">
            <MetricsPanel data={sensorData} />
            
            <Card className="bg-slate-800 border-slate-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Environmental Sensors</h2>
                <SensorPanel data={sensorData} />
              </div>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Performance Analytics</h2>
                <AnalyticsPanel data={sensorData} />
              </div>
            </Card>
          </div>
        </div>
      </div>

      {showConfig && <ConfigPanel onClose={() => setShowConfig(false)} />}
    </div>
  );
}

export default App;