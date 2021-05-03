import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { IMealType } from "../../dto/IMealType";
import { BaseService } from "../../services/base-service";
import { EPageStatus } from "../../types/EPageStatus";
import { IRouteId } from "../../types/IRouteId";

const MealTypeDetails = () => {
    // Get the router params from hook
    let { id } = useParams() as IRouteId;

    const [mealType, setMealType] = useState({} as IMealType);
    const [pageStatus, setPageSatus] = useState({ pageStatus: EPageStatus.Loading, statusCode: -1 });

    const loadData = async () => {
        let result = await BaseService.getOne<IMealType>('/mealtypes', id);
        if (result.ok && result.data) {
            setPageSatus({ pageStatus: EPageStatus.OK, statusCode: 0 });
            setMealType(result.data);
        } else {
            setPageSatus({ pageStatus: EPageStatus.Error, statusCode: result.statusCode })
        }
    }

    useEffect(() => {
        loadData();
    })

    return (
        <>
            <h1>
                Meal Type details.
            </h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
                        <th>
                            Meal Type
                        </th>
                        <th>
                            Price
                        </th>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    <td>
                        {mealType.id}
                    </td>
                    <td>
                        {mealType.mealTypeName}
                    </td>
                    <td>
                        {mealType.price}
                    </td>
                </tbody>
            </table>
            <Loader {...pageStatus} />
        </>
    );
}

export default MealTypeDetails;
