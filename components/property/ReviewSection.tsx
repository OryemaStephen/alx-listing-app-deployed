import { ReviewSectionProps } from "@/interfaces";

const ReviewSection = ({ reviews }: ReviewSectionProps) => {
  if (!reviews?.length) return <p>No reviews yet.</p>;

  return (
    <div>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
