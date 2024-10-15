import { useState } from "react";
import splitStringUsingRegex from "../utils/splitStringUsingRegex";

const getTransformStyles = (isMouseEntered: boolean, index: number) => ({
  transform: `translateY(${isMouseEntered ? "-100%" : "0%"})`,
  transitionDelay: `${index * 0.02}s`,
});

const FancyButton = () => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  return (
    <button
      className="fancy-button"
      onMouseEnter={() => setIsMouseEntered(true)}
      onMouseLeave={() => setIsMouseEntered(false)}
      aria-label="Fancy Button"
    >
      <span className="fancy-button-text-container">
        {splitStringUsingRegex("Fancy Button").map((character, index) => (
          <span className="fancy-button-char-container" key={index}>
            <span style={getTransformStyles(isMouseEntered, index)}>
              {character}
            </span>
            <span style={getTransformStyles(isMouseEntered, index)}>
              {character}
            </span>
          </span>
        ))}
      </span>
    </button>
  );
};

export default FancyButton;
