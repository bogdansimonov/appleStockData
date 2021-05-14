import "./styles/CustomTooltip.css";
import moment from "moment";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload?.length) {
    const dateTime = moment(new Date(payload[0].payload.Date)).format(
      "MM/DD HH:mm"
    );
    const close = Number(payload[0].payload.Close).toFixed(3);
    return (
      <div className="stock-data-tooltip">
        <b>Date/Time:</b>: {dateTime}
        <br />
        <b>Close:</b>: {close}
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
