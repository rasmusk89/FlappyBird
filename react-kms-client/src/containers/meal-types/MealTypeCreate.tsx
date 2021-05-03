import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { CreatedContext } from "../../context/CreatedContext";
import { IMealType } from "../../dto/IMealType";
import { BaseService } from "../../services/base-service";

const MealTypeCreate = () => {

    const appState = useContext(CreatedContext);


    const [mealType, setMealType] = useState({} as IMealType);
    const [alertMessage, setAlertMessage] = useState('');

    const createClicked = async (e: Event) => {
        e.preventDefault();
        let response = await BaseService.create('/MealTypes', mealType);
        if (!response.ok) {
            appState.setCreated(false)

        } else {
            appState.setCreated(true)
        }
    }

    return (

        <>
            {appState.created !== false ? <Redirect to="/MealTypes" /> : null}

            <h1>Create</h1>

            <h4>Meal Type</h4>
            <hr />
            <form onSubmit={(e) => createClicked(e.nativeEvent)}>
                <div className="row">
                    <div className="col-md-4">
                        <section>
                            <hr />
                            <div className="form-group">
                                <label htmlFor="Input_Name">Meal Type name</label>
                                <input value={mealType.mealTypeName} onChange={e => setMealType({ ...mealType, mealTypeName: e.target.value })} className="form-control" type="text" id="Input_Name" name="Input.Name" placeholder="Meal type name.." />
                            </div>
                            <div className="form-group">
                                <label htmlFor="Input_Price">Price</label>
                                <input value={mealType.price} onChange={e => setMealType({ ...mealType, price: parseFloat(e.target.value) })} className="form-control" type="number" step="0.01" id="Input_Price" name="Input.Price" placeholder="Price.." />
                            </div>
                            <div className="form-group">
                                <button onClick={(e) => createClicked(e.nativeEvent)} type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </section>
                    </div>
                </div>
            </form>
            <div>
                <a href="/MealTypes">Back to List</a>
            </div>
        </>
    );
}

export default MealTypeCreate;
