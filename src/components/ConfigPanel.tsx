import React, { useState } from 'react';
import { X, RefreshCw } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ConfigPanelProps {
  onClose: () => void;
}

const ConfigPanel: React.FC<ConfigPanelProps> = ({ onClose }) => {
  const [isAdaptiveProcessing, setIsAdaptiveProcessing] = useState(true);
  const [brightness, setBrightness] = useState(50);
  const [contrast, setContrast] = useState(50);
  const [noiseReduction, setNoiseReduction] = useState(50);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-end">
      <div className="w-[400px] h-full bg-slate-800 p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Configuration</h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-700 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-slate-300 mb-3">Image Processing</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm mb-1 block">Brightness</label>
                <Slider
                  value={[brightness]}
                  onValueChange={([value]) => setBrightness(value)}
                  max={100}
                  step={1}
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">Contrast</label>
                <Slider
                  value={[contrast]}
                  onValueChange={([value]) => setContrast(value)}
                  max={100}
                  step={1}
                />
              </div>
              <div>
                <label className="text-sm mb-1 block">Noise Reduction</label>
                <Slider
                  value={[noiseReduction]}
                  onValueChange={([value]) => setNoiseReduction(value)}
                  max={100}
                  step={1}
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-300 mb-3">Auto-Adjustment</h3>
            <div className="flex items-center justify-between bg-slate-700/50 p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4" />
                <span>Adaptive Processing</span>
              </div>
              <Switch
                checked={isAdaptiveProcessing}
                onCheckedChange={setIsAdaptiveProcessing}
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-300 mb-3">Alert Thresholds</h3>
            <div className="grid grid-cols-2 gap-3">
              <Input type="number" placeholder="Min SSIM" className="bg-slate-700" />
              <Input type="number" placeholder="Min PSNR" className="bg-slate-700" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 bg-slate-800 border-t border-slate-700">
          <Button className="w-full">
            Apply Changes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;