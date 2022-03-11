import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const HeroDesignSvg = React.forwardRef((props, ref) => {
  const squareRef1 = useRef();
  const squareRef2 = useRef();
  const squareRef3 = useRef();
  const squareRef4 = useRef();
  const squareRef5 = useRef();
  const squareRef6 = useRef();
  const squareRef7 = useRef();
  const squareRef8 = useRef();

  useEffect(() => {
    gsap.from(
      [
        squareRef1.current,
        squareRef2.current,
        squareRef3.current,
        squareRef4.current,
        squareRef5.current,
        squareRef6.current,
        squareRef7.current,
        squareRef8.current,
      ],
      {
        stagger: 0.2,
        scale: 0.1,
        duration: 1,
        ease: "back.out(1.7)",
      }
    );
  });

  return (
    <StyledHeroDesignSvg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="686"
      height="688"
      viewBox="0 0 686 688"
    >
      <g id="blockdesign" transform="translate(-935 -289)">
        <rect
          ref={squareRef1}
          className="square-anim"
          data-name="Rectangle 2"
          width="172"
          height="172"
          rx="19"
          transform="translate(1277 289)"
          fill="#6e00ff"
        />
        <rect
          ref={squareRef2}
          className="square-anim"
          data-name="Rectangle 10"
          width="172"
          height="172"
          rx="86"
          transform="translate(1277 461)"
          fill="#ff64cb"
        />
        <rect
          ref={squareRef3}
          className="square-anim"
          data-name="Rectangle 8"
          width="172"
          height="172"
          rx="19"
          transform="translate(1449 461)"
          fill="#e5d5fa"
        />
        <rect
          ref={squareRef4}
          className="square-anim"
          data-name="Rectangle 5"
          width="172"
          height="172"
          rx="19"
          transform="translate(1277 633)"
          fill="#6e00ff"
        />
        <rect
          ref={squareRef5}
          className="square-anim"
          data-name="Rectangle 3"
          width="172"
          height="172"
          rx="19"
          transform="translate(1107 461)"
          fill="#fff"
        />
        <rect
          ref={squareRef6}
          className="square-anim"
          data-name="Rectangle 9"
          width="172"
          height="172"
          rx="86"
          transform="translate(1107 633)"
          fill="#00f7ff"
        />
        <rect
          ref={squareRef7}
          className="square-anim"
          data-name="Rectangle 7"
          width="172"
          height="172"
          rx="19"
          transform="translate(935 633)"
          fill="#fff"
          opacity="0.17"
        />
        <rect
          ref={squareRef8}
          className="square-anim"
          data-name="Rectangle 4"
          width="172"
          height="172"
          rx="19"
          transform="translate(1107 805)"
          fill="#fff"
        />
      </g>
    </StyledHeroDesignSvg>
  );
});

const StyledHeroDesignSvg = styled.svg`
  display: none;

  @media only screen and (min-width: ${({ theme }) => theme.large}) {
    display: unset;
    width: 100%;
    margin-left: -50%;
    margin-top: 15%;
  }
`;

export default HeroDesignSvg;
