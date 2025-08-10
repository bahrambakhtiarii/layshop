'use client';

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import type { Slide } from "yet-another-react-lightbox";

interface CarouselProps {
  slides: Slide[];
  open: boolean;                
  onClose: () => void;          
  index: number;                
  onIndexChange: (index: number) => void; 
}

export default function Carousel({
  slides,
  open,
  onClose,
  index,
  onIndexChange,
}: CarouselProps) {
  return (
    <>
      <Lightbox
        open={open}
        close={onClose}
        index={index}
        slides={slides}
        on={{ view: ({ index: current }) => onIndexChange(current) }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </>
  );
}
