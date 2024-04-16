import React from 'react';

interface RatingProps {
    testIdPrefix: string;
    title?: string;
    theme: "primary" | "secondary";
    disabled?: boolean;
    size?: "small" | "medium" | "large";
}

declare const Rating: React.FC<RatingProps>;

export { Rating };
