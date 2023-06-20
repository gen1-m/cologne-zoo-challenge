import type { GenderType } from '@faker-js/faker'
import { faker } from '@faker-js/faker'

import type { Animal, Fruit, Gender } from '../types'
// Importing the necessary functions
import { calculateAgeInYears, calculateFoodPerDay } from '../composables/helpers'

export const fakeAnimal = (): Animal => {
  const gender = faker.helpers.arrayElement(['male', 'female']) as Gender
  const favouriteFruit = faker.helpers.arrayElement(['banana', 'apple', 'cherry']) as Fruit
  // Making a constant type Animal, named 'animal' to have easier access to the properties inside
  const animal: Animal = {
    id: faker.datatype.uuid(),
    name: faker.name.firstName(gender as GenderType),
    species: faker.animal.type(),
    birthdate: faker.date.past(25),
    age: 0, // setting initial value
    weight: faker.datatype.float({
      min: 20,
      max: 250,
      precision: 0.1,
    }),
    height: faker.datatype.float({
      min: 0.25,
      max: 4,
      precision: 0.01,
    }),
    gender,
    favouriteFruit,
    foodPerDay: 0, // setting initial value
  }
  // Modifying the age and food property by using the helper functions and setting the correct values
  animal.age = calculateAgeInYears(animal.birthdate)
  animal.foodPerDay = calculateFoodPerDay(
    animal.height,
    animal.weight,
    animal.age,
    animal.favouriteFruit,
    animal.gender,
    animal.species,
  )
  // Returning it as previously
  return animal
}
