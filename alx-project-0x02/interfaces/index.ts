export interface CardContent {
  location: string;
  price: string;
  rating: number;
  reviews: string[];
  imageUrl: string;
  iconsUrl: string[];
}

export interface CardProps {
  title: string;
  contents: CardContent[];
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
