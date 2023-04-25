export interface IFoodCategoriesCard{
  isActive?:boolean
  categoryTitle:string;
  id?:number
  currentFoodCategory:number
  setCurrentCategory:(id:number)=>void;
}
