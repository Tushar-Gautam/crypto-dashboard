import React, { useEffect } from "react";
import styles from "./styles.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { FaRupeeSign } from "react-icons/fa";

function List({ coin }) {
  const {
    id,
    image,
    symbol,
    name,
    price_change_percentage_24h: percentageChange,
    current_price: CurrentPrice,
    market_cap,
    total_volume,
    last_updated,
  } = coin;

  function convertDateTime(dateTimeString) {
    const dateTime = new Date(dateTimeString);
    const day = String(dateTime.getDate()).padStart(2, "0");
    const month = String(dateTime.getMonth() + 1).padStart(2, "0");
    const year = String(dateTime.getFullYear()).slice(-2);
    const hours = String(dateTime.getHours()).padStart(2, "0");
    const minutes = String(dateTime.getMinutes()).padStart(2, "0");

    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;

    return {
      date: formattedDate,
      time: formattedTime,
    };
  }

  return (
    <div className="list-wrapper">
      <a href={`coin?${coin.id}`}>
        <td>
          <img src={image} alt="" />
        </td>
        <td>
          <p>{symbol}</p>
          <p>{name}</p>
        </td>
      </a>
      <td>
        {/* {percentageChange.toFixed(2)}% */}
        <div
          className="chip"
          style={{
            color:
              coin.price_change_percentage_24h > 0
                ? "var(--green)"
                : "var(--red)",
            borderColor: percentageChange > 0 ? "var(--green)" : "var(--red)",
          }}
        >
          {percentageChange > 0 ? (
            <span>{"+" + percentageChange.toFixed(2) + "%"}</span>
          ) : (
            <span>{percentageChange.toFixed(2) + "%"}</span>
          )}
        </div>
      </td>
      <td>
        {percentageChange > 0 ? (
          <TrendingUpIcon className="trends up" />
        ) : (
          <TrendingDownIcon className="trends down" />
        )}
      </td>
      <td>
        <FaRupeeSign className="rs" style={{ marginRight: ".2rem" }} />
        {CurrentPrice.toLocaleString("en-IN")}
      </td>
      <td>
        <p>
          <FaRupeeSign className="rs" style={{ marginRight: ".2rem" }} />
          {total_volume.toLocaleString("en-IN")}
        </p>
      </td>
      <td>
        <p className="date">
          {convertDateTime(last_updated).time}{" "}
          {convertDateTime(last_updated).date}
        </p>
      </td>
    </div>
  );
}

export default List;
