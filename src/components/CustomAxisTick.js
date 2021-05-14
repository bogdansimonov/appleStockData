import moment from "moment";

const CustomAxisTick = ({ x, y, payload }) => {
    const dateVal = moment(new Date(payload.value));
    if (dateVal.isValid()) {
      const dateTip = dateVal.format("DD MMM");
      return (
        <g transform={`translate(${x},${y})`}>
          <text
            x={0}
            y={0}
            dy={16}
            fontFamily="bold"
            textAnchor="start"
            fill="#363636"
          >
            {dateTip}
          </text>
        </g>
      );
    }
  };

  export default CustomAxisTick;
