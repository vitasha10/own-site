import { AnyTxtRecord } from "dns";
import "./portfolioList.scss";

export default function PortfolioList({ id, title, active, setSelected } : {id: any, title: any, active: any, setSelected:any}) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}