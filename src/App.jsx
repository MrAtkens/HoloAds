import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {YMInitializer} from "react-yandex-metrika";
import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

const Main = lazy(() => import('pages/Main'));
const Shop = lazy(() => import('pages/Shop'));
const ContactUs = lazy(() => import('pages/ContactUs'));


export default function App() {

    return (
        <Suspense fallback={
            <div className="section-loader">
                <div className="loader"/>
            </div>}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/shop">
                        <Shop/>
                    </Route>
                    <Route path="/contacts">
                        <ContactUs/>
                    </Route>
                </Switch>
            </Router>
            <YMInitializer accounts={[84071428]} options={{webvisor: true}} version="2" />
        </Suspense>
    );
}
