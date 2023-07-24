export interface Rating {
  cleanliness: number;
  customerService: number;
  speed: number;
  location: number;
  facilities: number;
}

export interface Category {
  key: keyof Rating;
  label: string;
}
