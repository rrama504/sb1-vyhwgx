export const generateRandomData = () => {
  return {
    temperature: (20 + Math.random() * 10).toFixed(1),
    humidity: (40 + Math.random() * 20).toFixed(1),
    light: Math.floor(800 + Math.random() * 800),
    ssim: (0.85 + Math.random() * 0.1).toFixed(3),
    psnr: (30 + Math.random() * 5).toFixed(2),
    processingTime: Math.floor(20 + Math.random() * 10)
  };
};