import { useParams } from "react-router-dom";
import { IRouteId } from "../../types/IRouteId";

const MealTypeDelete = () => {
    let { id } = useParams() as IRouteId;

    return (
        <div>
            Meal Type delete page. Id: {id}
        </div>
    );
}

export default MealTypeDelete;
