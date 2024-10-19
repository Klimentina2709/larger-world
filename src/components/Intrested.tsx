import "./Intrested.css";
import IconPlay from "/img/icons/IconPlay.png";
import IconMic from "/img/icons/IconMic.png";
import IconRead from "/img/icons/IconRead.png";
import OneMinuteBtn from "/img/icons/1minute.png";
import HalfHoursBtn from "/img/icons/33minutes.png";

const Intrested = () => {
  return (
    <div className="pageBackgroundColor">
      <div className="wrapper80">
        <div className="container">
          <p>you also might be intrested in</p>
        </div>
        <div className="d-flex">
          <div className="card color-white">
            <div className="d-flex flex-20 title">
              <img src={IconPlay} alt="IconMic" />
              <div className="title-card">
                <p>how do business tackle diversity & inclusion?</p>
              </div>
            </div>
            <div className="content">
              <p>tumi sineke</p>
              <div className="border"></div>
            </div>
            <div className="text">
              <p>
                Tackling diversity and inclusion is a big topic, especially for
                businesses. Tumi Sineke shares how businesses can tackle
                diversity and inclusion in an authentic way.
              </p>
              <div className="buttons">
                <button>
                  <img src={OneMinuteBtn} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="card d-flex color-white">
            <div className="d-flex flex-20 title">
              <img src={IconMic} alt="IconMic" />
              <div className="title-card">
                <p>pour equality: women redefining industries</p>
              </div>
            </div>
            <div className="content">
              <p>join pía carrau</p>
              <div className="border"></div>
            </div>
            <div className="text">
              <p>
                Tackling diversity and inclusion is a big topic, especially for
                businesses. Tumi Sineke shares how businesses can tackle
                diversity and inclusion in an authentic way.
              </p>
              <div className="buttons">
                <button>
                  <img src={HalfHoursBtn} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="card d-flex color-white">
            <div className="d-flex flex-20 title">
              <img src={IconRead} alt="IconMic" />
              <div className="title-card">
                <p>future of work: there has to be another way</p>
              </div>
            </div>
            <div className="content">
              <p>larger.world team</p>
              <div className="border"></div>
            </div>
            <div className="text">
              <p>
                Tackling diversity and inclusion is a big topic, especially for
                businesses. Tumi Sineke shares how businesses can tackle
                diversity and inclusion in an authentic way.
              </p>
              <div className="buttons">
                <button>
                  <img src={OneMinuteBtn} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="card d-flex color-white">
            <div className="d-flex flex-20 title">
              <img src={IconPlay} alt="IconMic" />
              <div className="title-card">
                <p>how do business tackle diversity & inclusion? </p>
              </div>
            </div>
            <div className="content">
              <p>tumi sineke</p>
              <div className="border"></div>
            </div>
            <div className="text">
              <p>
                Tackling diversity and inclusion is a big topic, especially for
                businesses. Tumi Sineke shares how businesses can tackle
                diversity and inclusion in an authentic way.
              </p>
              <div className="buttons">
                <button>
                  <img src={OneMinuteBtn} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intrested;
