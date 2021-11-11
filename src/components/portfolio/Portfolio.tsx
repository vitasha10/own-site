import { useEffect, useState } from "react";
import PortfolioList from "../portfoliolist/PortfolioList";
import "./portfolio.scss";
import {
  webPortfolio,
  mobilePortfolio,
  actualPortfolio,
  botsPortfolio,
  workexperiencePortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("actual");
  const [data, setData] : [data: any, setData: any] = useState([]);
  const list = [
    {
      id: "actual",
      title: "Actual",
    },
    {
      id: "web",
      title: "Web projects (closed)",
    },
    {
      id: "mobile",
      title: "Mobile Apps (closed)",
    },
    {
      id: "bots",
      title: "Bots (closed)",
    },
    {
      id: "workexperience",
      title: "Work experiences",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "actual":
        setData(actualPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "bots":
        setData(botsPortfolio);
        break;
      case "workexperience":
        setData(workexperiencePortfolio);
        break;
      default:
        setData(actualPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d:any) => (
          <div className="item">
            <a href={d.img}>
              <img
                src={d.img}
                alt=""
              />
            </a>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <h2>
        You can open any of the projects by clicking on them. <br /> 
        There're 19 public projects and also I have 8 private. <br />
        Anyway if you're intrested - go to my <a href="https://github.com/vitasha10">GitHub</a>.
      </h2>
    </div>
  );
}