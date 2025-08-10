'use client';

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import type { Slide } from "yet-another-react-lightbox";


interface Props {
    slides: Slide[];
    open: boolean;
    index: number;
    onClose: () => void;
}

const GalleryLightbox: React.FC<Props> = ({ slides, open, onClose, index }) => {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={slides}
      index={index}
      plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
    />
  );
};

export default GalleryLightbox;
