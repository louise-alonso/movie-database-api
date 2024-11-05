export interface Props {
    rating: number
}

export default function StarRating(props : Props) {
    const numStars = Math.round(props.rating / 2);
    
    const fullStars = [0, 1, 2];
    const emptyStars = [3, 4];

    for (let i = 0; i < 5; i++) {
        if (i < numStars) {
            fullStars.push(i);
        } else {
            emptyStars.push(i);
        }
    }

    return (
        <div>
          
        </div>

    );
}