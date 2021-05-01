import { useParams } from "react-router-dom";
import { IRouteId } from "../../types/IRouteId";

const MealTypeDetails = () => {
    // Get the router params from hook
    let { id } = useParams() as IRouteId;

    return (
        <div>
            Meal Type details page. Id: {id}
        </div>
    );
}

export default MealTypeDetails;
