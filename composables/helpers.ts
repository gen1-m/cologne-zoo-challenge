import type { Fruit, Gender } from '~/types'

export const calculateAgeInYears = (birthdate: Date): Number => {
  const today = new Date()
  const differenceInMilliseconds = today.getTime() - birthdate.getTime()

  return Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24 * 365))
}

export const calculateFoodPerDay = (
  weight: number,
  height: number,
  age: Number,
  fruit: Fruit,
  gender: Gender,
  species: string,
): Number => {
  let foodPerDay = (weight + height) / 250

  if (species === 'fish')
    return 0
  if (age > 20)
    foodPerDay = foodPerDay / 2
  else if (age < 2)
    foodPerDay = foodPerDay * 2
  if (fruit === 'cherry')
    foodPerDay = foodPerDay + 28
  if (gender === 'male')
    foodPerDay = foodPerDay + (foodPerDay * 0.2)

  return Math.fround(foodPerDay)
}
