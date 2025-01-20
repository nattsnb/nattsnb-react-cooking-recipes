import { Ingredient } from "./Ingredient";
import { Step } from "./Step.ts";

export interface Recipe {
  title: string;
  ingredients: Ingredient[];
  cookingSteps: Step[];
  photoURL: string;
}
