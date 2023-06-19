type Kilogram = number
type Meter = number
// Adding the Year type
type Year = Number

// For simplification in the animal kingdom, let's assume that only 2 genders exist
export type Gender = 'male' | 'female'
export type Fruit = 'banana' | 'apple' | 'cherry'

export interface Animal {
  id: string
  name: string
  species: string
  gender: Gender
  birthdate: Date
  age: Year // Added age property
  weight: Kilogram
  height: Meter
  favouriteFruit: Fruit
  foodPerDay: Number // Added food property
}
