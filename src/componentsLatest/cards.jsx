import axios from 'axios';
import React from 'react';
import '../componentsLatest/cards.css';
import Card from './card';

class Cards extends React.Component {

    state = {
        number: [''],
        imagesArray: [''],
        urlsArray: [''],
        titlesArray: [''],
        isLoaded: false
    };

    componentDidMount() {
        let response = axios.get('https://newsapi.org/v2/everything?q=%22f1%22+%22news%22&pages=1&pageSize=20&sortBy=publishedAt&language=en&apiKey=2d55fedbd9b34f3baed1d26e1adabff3')
            .then(res => {

                this.state.imagesArray = res.data.articles.map((i) => i.urlToImage);
                this.state.urlsArray = res.data.articles.map((i) => i.url);
                this.state.titlesArray = res.data.articles.map((i) => i.title);

                for (var i = 0; i < this.state.imagesArray.length; i++) {
                    this.state.number[i] = i;
                }

                if (this.state.urlsArray.length > 0)
                    this.state.isLoaded = true;
                console.log(this.state.number);
                this.forceUpdate();
            });
    }

    render() {
        return !this.state.isLoaded ?
            (
                <div>
                </div>
            )
            :
            (
                <div className="wrapper">

                    {this.state.number.map((i) => <Card key={this.state.number[i]}
                        title={this.state.titlesArray[i]}
                        image={this.state.imagesArray[i]}
                        url={this.state.urlsArray[i]} />
                    )}
                </div>
            );
    }
}

export default Cards;