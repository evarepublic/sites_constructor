"use strict";

import image from "./assets/image.png";
import {
  TitleBlock,
  ImageBlock,
  ColumnsBlock,
  TextBlock,
} from "./classes/blocks";

const text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, libero?
`;

export const model = [
  new TitleBlock("Lorem ipsum dolor sit amet.", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      "font-weight": "bold",
      "font-family": `'Courier New', Courier, monospace`,
      "text-transform": "uppercase",
      "text-align": "center",
      padding: "1.5rem",
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center",
    },
    imageStyles: {
      width: "1500px",
      height: "auto",
    },
    alt: "Space",
  }),
  new ColumnsBlock(
    [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eligendi.",
    ],
    {
      styles: {
        color: "#fff",
        "font-family": `'Courier New', Courier, monospace`,
        "text-transform": "uppercase",
        padding: "2rem",
      },
    }
  ),
  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      "font-weight": "bold",
      padding: "1rem",
      "font-family": `'Courier New', Courier, monospace`,
      "text-transform": "uppercase",
    },
  }),
];
