import React, {useState} from 'react';
import './RandomQuote.css';
import twitter_icon from '../Assets/twitter.png';
import reload_icon from '../Assets/reload.png';

const RandomQuote = () => {
    let quotes = [];
    async function loadQuotes() {
        const response = await fetch('https://type.fit/api/quotes');
        quotes = await response.json();
    }
    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }
      const [quote, setQuote] = useState({
            text: ' Difficulties increase the nearer we get to the goal.',
            author: 'J. Wolfgang von Goethe',
        });
      const twitter = () =>{
        window.open();//url can be given 
      }  
        loadQuotes();
    return (
      
        <div className = 'container'>
            <div className = 'quote'>
                {quote.text}  </div>
            <div className = 'line'></div>
            <div className= 'bottom'></div>
              <div className='author'>- {quote.author.split(',')[0]}</div>
              <div className='icons'>
                <img src = {reload_icon} onClick = {()=>{ random()}} alt = '' />
                <img src = {twitter_icon} onClick = {() => {twitter()}}  alt ='' />
                </div>
        </div>
    );
}

export default RandomQuote