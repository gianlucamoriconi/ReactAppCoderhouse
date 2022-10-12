const Ellipsis = (props) => (
  <div className="ellipsis">
    <div className="m-auto">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "0 0",
          display: "block",
          shapeRendering: "auto",
        }}
        width={88}
        height={88}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        {...props}
      >
        <circle cx={84} cy={50} r={10} fill="#ff980e">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="0.5555555555555556s"
            calcMode="spline"
            keyTimes="0;1"
            values="10;0"
            keySplines="0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="fill"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="discrete"
            keyTimes="0;0.25;0.5;0.75;1"
            values="#ff980e;#ff980e;#ff980e;#ff980e;#ff980e"
            begin="0s"
          />
        </circle>
        <circle cx={16} cy={50} r={10} fill="#ff980e">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="0s"
          />
        </circle>
        <circle cx={50} cy={50} r={10} fill="#ff980e">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.5555555555555556s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-0.5555555555555556s"
          />
        </circle>
        <circle cx={84} cy={50} r={10} fill="#ff980e">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.1111111111111112s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.1111111111111112s"
          />
        </circle>
        <circle cx={16} cy={50} r={10} fill="#ff980e">
          <animate
            attributeName="r"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="0;0;10;10;10"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.6666666666666665s"
          />
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="2.2222222222222223s"
            calcMode="spline"
            keyTimes="0;0.25;0.5;0.75;1"
            values="16;16;16;50;84"
            keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
            begin="-1.6666666666666665s"
          />
        </circle>
      </svg>
    </div>
  </div>
)

export default Ellipsis
