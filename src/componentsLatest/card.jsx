import React from 'react';
import '../componentsLatest/card.css';

class Card extends React.Component {

    render() {

        return (
            <div className="card">
                <div className="card_body">
                    <div className="card_image">
                        <img src={this.props.image} />
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
}

export default Card;