import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getReviewsMovies } from "../../services/Api";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    getReviewsMovies(movieId).then((data) => {
      if (data.length === 0) {
        toast.error("No reviews");
        return;
      }
      setReviews(data);
    });
  }, [movieId]);

  return (
    <ul>
      {reviews.map((review) => {
        return (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
}
