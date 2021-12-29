import React, { Component } from 'react';
import axios from 'axios';
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
                // TODO: Loading gif
                <div>
                </div>
            )
            :
            (
                <div class="wrapper">

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



/*  this.setState({
      image: push(jsonData.articles.map((i) => i.urlToImage)),
      title: push(jsonData.articles.map((i) => i.title)),
      url: push(jsonData.articles.map((i) => i.url))
  });
  console.log(this.state);*/
/*
          function len()
          {
              for(var i = 0; i < jsonData.articles.length)
          }
*/
/* OVO SAM ZADNJE ZAKOMENTIRAO

        if(this.state.imagesArray === null){
            return null;
        }else{
            console.log(this.state.imagesArray);
            return (
                
                <div class="wrapper">
                    <Card title={this.state.titlesArray[2]} image={this.state.imagesArray[2]} url={this.state.urlsArray[2]}></Card>
                
                </div>
            );
        }
        <Card title={this.state.titlesArray[5]} image={this.state.imagesArray[5]} url={this.state.urlsArray[5]}/>
        {this.state.imagesArray.map((j) => <Card title={this.state.titlesArray[j]} image={this.state.imagesArray[j]} url={this.state.urlsArray[j]}/>)}
    */


/*
{this.state.num.map((i) => <Card title={this.state.title[i]} image={this.state.image[i]}/>

{this.state.map((i) => <Card title={this.state.title[i]} image={this.state.urlToImage[i]} url={this.state.url[i]}/>)}

    state = {
        num: [0,1,2,3,4],
        title: ['F1 TV RADIO REWIND: The dramatic end to the 2021 Formula 1 season', 'Verstappen dubs Perez an amazing human being as he credits Mexicans heroics for title win', 'We knew hed be world champion one day Former team mates and fellow champs on Max Verstappens maiden title', 'title4', 'title5'],
        image: ['https://www.formula1.com/content/dam/fom-website/manual/Misc/ImolaManualAdds/GettyImages-1266598528.jpg',
         'data:image/jpeg;base64,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',
          'https://i.ytimg.com/vi/hk-JKrs0rrc/maxresdefault.jpg'],
    };
               )}
               
    {this.state.articles.map((i) => <Card title={this.state.articles[i].title} image={this.state.articles[i].urlToImage} url={this.state.articles[i].url}/>)}    
    
    


      let response = fetch('https://newsapi.org/v2/everything?q=f1&pages=1&pageSize=20&sortBy=publishedAt&language=en&apiKey=c0aaa32e7f0548899fc921a3d7fa760f')
        .then(response => response.json())
        .then((jsonData) => {

          this.setState({
              imagesArray: jsonData.articles.map((i) => i.urlToImage),
              titlesArray: jsonData.articles.map((i) => i.title),
              urlsArray: jsonData.articles.map((i) => i.url)
          })
        });
               */