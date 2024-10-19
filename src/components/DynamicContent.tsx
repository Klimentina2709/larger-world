import db from "../db.json";
import "./dynamicContent.css";
import { Link } from "react-router-dom";

interface DataItem {
  icon: string;
  title: string;
  subtitle: string;
  time: string;
  description: string;
  button: string;
}

const ExploreVideoCard = () => {
  const data: DataItem[] = db.data;
  return (
    <div className="pageBackgroundColor">
      <div>
        {data.map((item, index) => (
          <div className="wrapper80">
            <div key={index}>
              <div className="d-flex">
                <div className="d-flex flex-80">
                  <img src={item.icon} alt="icon-play" />
                  <div className="cardText pBottom">
                    <p className="mBottom title">{item.title}</p>
                    <h4 className="mBottom">{item.subtitle}</h4>
                    <small className="mBottom">{item.time}</small>
                    <p>{item.description}</p>
                  </div>
                </div>
                <div className="flex-20">
                  <div className="watchButton">
                    <Link to={item.title}>
                      <button>{item.button}</button>
                    </Link>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreVideoCard;
