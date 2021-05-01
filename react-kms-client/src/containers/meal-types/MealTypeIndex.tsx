import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMealType } from "../../dto/IMealType";
import { BaseService } from "../../services/base-service";

const MealTypeIndex = () => {
    const [mealTypes, setMealTypes] = useState([] as IMealType[]);

    const loadData = async () => {
        let result = await BaseService.getAll<IMealType>('/mealtypes')
        console.log(result);
        if (result.ok && result.data) {
            setMealTypes(result.data);
        }
    }

    useEffect(() => {
        loadData();
    }, [])

    return (
        <>
            <h1>Meal Types page</h1>

            <p>
                <a href="/MealTypes/Create">Create new</a>
            </p>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            Meal Type
                        </th>
                        <th>
                            Price
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {mealTypes.map(mealType => (
                        <tr key={mealType.id}>
                            <td>
                                {mealType.mealTypeName}
                            </td>
                            <td>
                                {mealType.price}
                            </td>
                            <td>
                                <Link to={'/MealTypes/edit/' + mealType.id}>Edit</Link> | 
                                <Link to={'/MealTypes/' + mealType.id}> Details</Link> | 
                                <Link to={'/MealTypes/delete/' + mealType.id}> Delete</Link>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
}

export default MealTypeIndex;
