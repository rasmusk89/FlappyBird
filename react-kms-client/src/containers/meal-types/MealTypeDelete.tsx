import React, { useEffect, useState } from "react";
import { NavLink, Redirect, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { IMealType } from "../../dto/IMealType";
import { BaseService } from "../../services/base-service";
import { EPageStatus } from "../../types/EPageStatus";
import { IRouteId } from "../../types/IRouteId";

const MealTypeDelete = () => {

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

    const deleteData = async (e: Event) => {
        e.preventDefault();
        let result = await BaseService.delete('/mealtypes', id);
        if (result.statusCode === 204) {
            setPageSatus({ pageStatus: EPageStatus.OK, statusCode: 0 });
            <Redirect to='/' />
        } else {
            setPageSatus({ pageStatus: EPageStatus.Error, statusCode: result.statusCode })
        }
    }

    return (
        <>
            <h1>Delete</h1>

            <h3>Are you sure you want to delete this?</h3>
            <div>
                <h4>Meal Type</h4>
                <hr />

                <dl className="row">
                    <dt className="col-sm-2">
                        Meal Type
                    </dt>
                    <dd className="col-sm-10">
                        {mealType.mealTypeName}
                    </dd>
                    <dt className="col-sm-2">
                        Price
                    </dt>
                    <dd className="col-sm-10">
                        {mealType.price}
                    </dd>
                </dl>
                <div className="row">
                    <button onClick={(e) => deleteData(e.nativeEvent)} type="submit" className="col-1 btn btn-danger" >Delete</button>
                    <NavLink to="/MealTypes" className="col-1 btn btn-primary">Back to list</NavLink>
                </div>

            </div>
            <Loader {...pageStatus} />
        </>
    );
}

export default MealTypeDelete;
