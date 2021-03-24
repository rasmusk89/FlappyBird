import { ICategory } from "../domain/ICategory";
import { CategoryService } from "../services/category-service";

export class CategoryView {
    private data: ICategory[] = [];

    constructor(private categoryService: CategoryService) {

    }

    async attached() {
        console.log("Category attached")
        this.data = await this.categoryService.getAllAsync();
    }

}