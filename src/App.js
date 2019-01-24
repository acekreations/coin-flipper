import React, { Component } from "react";
import "./App.css";

class App extends Component {
    componentDidMount() {
        this.flipCoin();
        document.addEventListener("touchstart", function() {}, true);
    }

    flipCoin = () => {
        var coin = document.querySelector(".coin");
        var thisComp = this;
        coin.addEventListener("click", function() {
            var randNum = Math.floor(Math.random() * 11);
            var i = 0;
            thisComp.coinToggle(coin, randNum, i, thisComp.coinToggle);
        });
    };
    coinToggle = (coin, randNum, i, cb) => {
        coin.classList.toggle("is-flipped");
        if (i < randNum) {
            i++;
            setTimeout(function() {
                cb(coin, randNum, i, cb);
            }, 200);
        }
    };

    render() {
        return (
            <div className="container">
                <div className="coin">
                    <div className="coin__face coin__face--front" />
                    <div className="coin__face coin__face--back" />
                </div>
            </div>
        );
    }
}

export default App;
