import React, { Component } from 'react';
import '../componentsLatest/card.css';
import WebPage from './cardWebPage';
import Cards from './cards';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,Link
  } from "react-router-dom";

class Card extends React.Component {

    render() { 

        return (
            <div class="card">
                <div class="card_body">
                    <div class="card_image">
                    <img src={this.props.image} alt="Nije se učitala slika!" />
                    </div>
                    <h2 className="card_title">{this.props.title}</h2>
                </div>
                <button className="card_btn" onClick={() => openInNewTab(this.props.url)}> Read more </button>
            </div>
        );
    }
}

const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
   // if (newWindow) newWindow.opener = null
  }

export default Card;

/*
<a href={this.props.url} target="_blank"> Read more </a> 
<button className="card_btn" onClick={goToUrl(this.props.url)}> Read more </button>
        <div class="card" id="card">
            <img src={this.state.imgUrl} alt='Nije se uspjela učitati slika!' />
            <h2>{this.state.num}, {this.state.title}</h2>
        </div>
*/

/*
        return (
            <div class="card">
                <div class="card_body">
                    <img className="card_image" src={this.props.image} alt="Nije se učitala slika!" />
                    <h2 className="card_title">{this.props.title}</h2>
                </div>
                <button className="card_btn"><Link to="/cardWebPage" className="btn btn-primary">Read more</Link></button>
                <Link to="/cardWebPage" className="btn btn-primary">Read more</Link>
            </div>
        );*/