export interface Ingredient {
  id: number;
  amount: number | null;
  unit: string | null;
  name: string | null;
  isAllergen: boolean | null;
}
