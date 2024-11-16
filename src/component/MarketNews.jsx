import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarketNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      const options = {
        method: 'GET',
        url: 'https://seeking-alpha.p.rapidapi.com/news/v2/list-trending',
        params: { size: '40' },
        headers: {
          'x-rapidapi-key': '805f16878amsh7a100cd0244011fp1a37bajsn86c5022d8813',
          'x-rapidapi-host': 'seeking-alpha.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        const newsData = response.data.data; // Adjust based on API response structure
        setNews(newsData.slice(0, 9)); // Get the first 8 news items
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch news.');
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading news...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="bg-black text-white p-8 md:p-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Recent Market News</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {news.map((item, index) => (
            
          <div
            key={index} 
            className="p-6 bg-white/10 backdrop-blur-xl  rounded-lg transition duration-300 hover:shadow-lg hover:shadow-green-400"
          >
            <a href={`https://seekingalpha.com/`+item.links.self} target="_blank">
            <img src={item.links.uriImage} alt="Market Images" classname="aspect-square"/>

            <h3 className="text-2xl font-semibold mb-2">{item.attributes.title}</h3>
            
           
        </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketNews;
