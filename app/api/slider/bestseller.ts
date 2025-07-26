// pages/api/slider/index.ts

import type { NextApiRequest, NextApiResponse } from 'next';

// Define the shape of a slider item (only product ID for now)
interface SliderItem {
  id: string; // The ID of the product to feature in the slider
  // You might add other properties here later if needed, e.g., a specific banner image for the slider, or a short promotional text
  // sliderImage?: string;
  // promotionalText?: string;
}

// Mock data for slider items
const SLIDER_DATA: SliderItem[] = [
  { id: '1' }, // Apple AirPods Pro 2
  { id: '4' }, // PlayStation 5
  { id: '3' }, // Apple Watch Series 9
  { id: '7' }, // JBL Flip 6 (if you want to feature a speaker)
  // ... add more product IDs you want to feature in the slider
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<SliderItem[] | { message: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // You might add some basic filtering or pagination for sliders here if you have many
  // For now, just return all slider items
  res.status(200).json(SLIDER_DATA);
}