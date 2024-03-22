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
 fontSize: '18px',
 color: "#ffa45c", // Set your desired arrow color
  cursor: "pointer",
  background: "transparent",
  border: "none",
  padding: '25px',
  margin: '0px'
};

const SampleNextArrow: React.FC<SampleArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, ...arrowStyles }}
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
      style={{ ...style, ...arrowStyles}}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export { SampleNextArrow, SamplePrevArrow };
