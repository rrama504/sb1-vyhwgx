import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export interface SensorData {
  temperature: string;
  humidity: string;
  light: number;
  ssim: string;
  psnr: string;
  processingTime: number;
}

export interface Alert {
  id: number;
  type: 'warning' | 'error';
  message: string;
  timestamp: string;
}

export const useSocket = () => {
  const [sensorData, setSensorData] = useState<SensorData | null>(null);
  const [alerts, setAlerts] = useState<Alert[]>([]);

  useEffect(() => {
    socket.on('sensorData', (data: SensorData) => {
      setSensorData(data);
    });

    socket.on('newAlert', (alert: Alert) => {
      setAlerts(prev => [alert, ...prev].slice(0, 5));
    });

    return () => {
      socket.off('sensorData');
      socket.off('newAlert');
    };
  }, []);

  return { sensorData, alerts };
};