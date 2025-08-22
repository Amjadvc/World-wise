import Flag from "../Flag/Flag";
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <Flag emoji={country.emoji} type="marked" />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
