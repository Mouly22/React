import React, { useState } from 'react';
import './Farmer_review.css';

const ReviewForm: React.FC = () => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [report, setReport] = useState(false);
  const [reportText, setReportText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Submit form values to your server here
    console.log({ comment, rating, report, reportText });
  };

  const getStarColor = (ratingValue: number) => {
    if (ratingValue <= rating) {
      if (rating < 3) {
        return 'red';
      } else if (rating === 3) {
        return 'gold';
      } else {
        return 'green';
      }
    } else {
      return '#e4e5e9'; // color for unselected stars
    }
  };
  

  return (
    <div>
      <h1>Farmer Review Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment">Comment:</label>
        <textarea
          id="comment"
          value={comment}
          onChange={e => setComment(e.target.value)}
        />

        <label htmlFor="rating">Rating:</label>
        <div className="star-rating">
          {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return (
              <label key={i}>
                <input
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => setRating(ratingValue)}
                  className="star-radio"
                />
                <svg
                  className="star-svg"
                  height="25px"
                  width="23px"
                  fill={getStarColor(ratingValue)}
                  onMouseEnter={() => setHover(ratingValue)}
                  onMouseLeave={() => setHover(0)}
                >
                  <path d="M11.988,15.25l-4.334,2.275l0.829,-4.834l-3.517,-3.429l4.853,-0.705l2.169,-4.382l2.169,4.382l4.853,0.705l-3.517,3.429l0.829,4.834l-4.334,-2.275Z" />
                </svg>
              </label>
            );
          })}
        </div>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <label htmlFor="report" className="report-label">
            Do you want to report the farmer?
          </label>
          <input
            id="report"
            type="checkbox"
            checked={report}
            onChange={e => setReport(e.target.checked)}
          />
        </div>

        {report && (
          <>
            <label htmlFor="reportText">Report Text:</label>
            <textarea
              id="reportText"
              value={reportText}
              onChange={e => setReportText(e.target.value)}
            />
          </>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReviewForm;
