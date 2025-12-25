import React from "react";

const ReviewCard = React.forwardRef(({ review, pos, isInside }, ref) => {

    if (!isInside) {
        return (
            <div ref={ref} className="review-card " style={{
                left: `50%`,
                top: `50%`,
                transform: ` translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
                backgroundImage: `url(${review.imgs[0]}) `,
                transition: 'background 300ms cubic-bezier(.8,0,.55,1), transform 300ms cubic-bezier(.8,0,.55,1)',
            }}>

            </div>
        )
    }

    return (
        <div ref={ref} className="review-card" style={{
            left: `50%`,
            top: `50%`,
            transform: ` translate(${pos.x}px, ${pos.y}px)`,
            backgroundImage: `url(${review.imgs[0]}) `,
            transition: 'background 200ms ease',
        }}>

        </div>
    );
})

export default ReviewCard;
