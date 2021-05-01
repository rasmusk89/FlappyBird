import { useParams } from "react-router-dom";
import { IRouteId } from "../../types/IRouteId";

const MealTypeEdit = () => {
    let { id } = useParams() as IRouteId;

    return (
        <div>
            Meal Type edit page. Id: {id}
        </div>
    );
}

export default MealTypeEdit;
