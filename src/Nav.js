import React from "react";
import './App.css';
import Form from "./Form";
import Event from "./Event";

const Nav  = (props) => {
  return (
    <main className="Nav">
    <section className="et-hero-tabs">
    <h1>Drift</h1>
    <h3>blah blah i want to die blah</h3>
    <div className="et-hero-tabs-container">
    <a className="et-hero-tab" href="#tab-es6">About</a>
    <a className="et-hero-tab" href="#tab-flexbox">Discover</a>
    <a className="et-hero-tab" href="#tab-react">Surprise</a>
    <a className="et-hero-tab" href="#tab-angular">Share</a>
    <a className="et-hero-tab" href="#tab-other">Other</a>
    <span className="et-hero-tab-slider"></span>
    </div>
    </section>

    <div className="et-main">
    <section className="et-slide" id="tab-es6">

    <h1>About</h1>
    <h3>something about es6 something about es6something about es6something about es6something about es6</h3>

    </section>

    <section className="et-slide" id="tab-flexbox">

    <h1> Disover </h1>
    <Form/>


    </section>

    <section className="et-slide" id="tab-react">

    <h1>Surprise</h1>
    <Event />

    </section>

    <section className="et-slide" id="tab-angular">

    <h1>Share</h1>
    <h3>something about angular</h3>

    </section>

    <section className="et-slide" id="tab-other">

    <h1>Other</h1>
    <h3>something about other</h3>

    </section>

    </div>
    </main>

  )}

  export default Nav;
