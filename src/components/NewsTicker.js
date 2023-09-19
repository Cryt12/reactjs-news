import React, { useEffect } from 'react';
import './NewsTicker.css';

const NewsTicker = () => {
  useEffect(() => {
    const tickerText = document.getElementById('ticker-text');
    const tickerOuter = document.querySelector('.ticker-outer');

    const textWidth = tickerText.getBoundingClientRect().width;
    const containerWidth = tickerOuter.getBoundingClientRect().width;
    const duration = (textWidth / containerWidth) * 20;

    tickerText.style.animationDuration = duration + 's';
  }, []);

  return (
    <div className="news-ticker">
      <div className="ticker-outer">
        <div className="breaking-news-label">Breaking News</div>
        <div className="ticker-inner" id="ticker-text">
          <p>Sponsored by: REBISCO CRACKLINGS!!! | ROI BAHOG NAWNG!!!</p>
        </div>
      </div>
    </div>
  );
}

export default NewsTicker;
