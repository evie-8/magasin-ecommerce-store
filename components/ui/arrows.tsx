import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { CSSProperties } from "styled-components";

interface SampleArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const arrowStyles: CSSProperties = {
  display: "block",
  fontSize: "20px", // Adjust the font size as needed
  color: "#ffa45c", // Set your desired arrow color
  cursor: "pointer",
  background: "transparent",
  border: "none",
};

const SampleNextArrow: React.FC<SampleArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles, marginLeft: "5px" }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const SamplePrevArrow: React.FC<SampleArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles, marginRight: "10px" }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export { SampleNextArrow, SamplePrevArrow };
