import React, {lazy, Suspense} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import tw from "twin.macro";
const Main = lazy(() => import('pages/Main'));
const About = lazy(() => import('pages/AboutUs'));
const ContactUs = lazy(() => import('pages/ContactUs'));

export default function App() {

  return (
      <Suspense fallback={<></>}>
          <Router>
              <Switch>
                  <Route exact path="/">
                      <Main />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/contacts">
                      <ContactUs />
                  </Route>
              </Switch>
          </Router>
      </Suspense>
  );
}
