export enum RatingCategory {
  Cleanliness = "Cleanliness",
  CustomerService = "Customer Service",
  Speed = "Speed",
  Location = "Location",
  Facilities = "Facilities",
}

export type RatingRecord = Record<RatingCategory, number>;

export interface Category {
  key: RatingCategory;
  label: string;
}
