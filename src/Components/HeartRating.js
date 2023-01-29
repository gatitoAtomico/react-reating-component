import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import styled from "styled-components";

const RatingBorder = styled.div`
  border: 4px solid gray;
  border-radius: 50%;
  padding: 10px;
  background-color: ${(props) =>
    props.numberOfHearts > props.current ? props.color : "gray"};

  border: ${(props) =>
    props.numberOfHearts > props.current
      ? `4px solid ${props.color}`
      : "4px solid gray"};
  margin: 1px;
`;

const HeartsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HearRating = () => {
  let hearts = new Array(5);
  const [heardBorderColor, setHeardBorderColor] = useState("gray");
  const [numberOfHearts, setNumberOfHearts] = useState(0);

  useEffect(() => {
    console.log("heart rating.js useeffect");
  }, [heardBorderColor, numberOfHearts]);

  const handleRating = (numberOfHearts) => {
    switch (numberOfHearts) {
      case 1:
        setHeardBorderColor("crimson");
        setNumberOfHearts(1);
        break;
      case 2:
        setHeardBorderColor("orange");
        setNumberOfHearts(2);
        break;
      case 3:
        setHeardBorderColor("yellow");
        setNumberOfHearts(3);
        break;
      case 4:
        setHeardBorderColor("green");
        setNumberOfHearts(4);
        break;
      case 5:
        setHeardBorderColor("Chartreuse");
        setNumberOfHearts(5);
        break;
      default:
    }
  };

  return (
    <HeartsContainer>
      {[...hearts].map((heart, index) => {
        return (
          <RatingBorder
            color={heardBorderColor}
            numberOfHearts={numberOfHearts}
            current={index}
            onClick={() => alert(index + 1)}
            onMouseEnter={() => handleRating(index + 1)}
            onMouseLeave={() => {
              setHeardBorderColor("gray");
              setNumberOfHearts(0);
            }}
          >
            <FaHeart
              color={numberOfHearts >= index + 1 ? "darkred" : "white"}
            />
          </RatingBorder>
        );
      })}
    </HeartsContainer>
  );
};

export default HearRating;
