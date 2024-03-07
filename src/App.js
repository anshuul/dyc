import SvgSprite from "./utility/SvgSpriteLoader";
import { rotues } from "./routes";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from "./common/history";
import AOS from "aos";
import ScrollToTop from './ScrollToTop';
import "antd/dist/reset.css";
import 'aos/dist/aos.css';

//Svg Sprite
import svgFile from "./assets/images/svg/svg-sprite.svg";

function App() {
  // AOS.init();
  useEffect(() => {
    AOS.init({});
    }, [])

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <>
      <SvgSprite url={svgFile} />
      
      <Router
        history={history}
        basename={process.env.REACT_APP_BASENAME || ""}
      >
        {rotues.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => {
                return (
                  <route.layout {...props}>
                    <ScrollToTop>
                    <route.component {...props} />
                    </ScrollToTop>
                  </route.layout>
                );
              }}
            />
          );
        })}
      </Router>
    </>
  );
}

export default App;
