import { ICategory } from "../domain/ICategory";
import { CategoryService } from "../services/category-service";

export class CategoryView {
    private allCategories: ICategory[];

    constructor(private categoryService: CategoryService) {
    }

    async attached() {
        console.log("Category attached")
        this.allCategories = await this.categoryService.getAllCategories();
    }

}