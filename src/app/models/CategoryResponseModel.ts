import { Category } from './Category';
import { ResponseModel } from './ResponseModel';

export interface CategoryResponseModel extends ResponseModel {
  data: Category[];
}
