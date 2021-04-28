import React, { useEffect, useState } from 'react';
import { INameProps } from '../App';


const Groups = (props: INameProps): JSX.Element => {

    // let text = props.name;
    // Keep track of the state!
    const [text, updateText] = useState(props.name);

    useEffect(() => {
        document.title = "Name is " + text;
        return () => {
            console.log("Good bye.. " + text);
        }
    }, [text]);

    return (
        <>
            <h1>Groups view</h1>
            <hr />

            <form action="/Groups/Create" method="post">
                <div className="form-group">
                    <label className="control-label" htmlFor="Name">Name</label>
                    <input
                        className="form-control"
                        type="text"
                        data-val="true"
                        data-val-maxlength="The field Name must be a string or array type with a maximum length of &#x27;128&#x27;."
                        data-val-maxlength-max="128"
                        data-val-minlength="The field Name must be a string or array type with a minimum length of &#x27;3&#x27;."
                        data-val-minlength-min="3"
                        data-val-required="The Name field is required."
                        id="Name"
                        maxLength={128}
                        name="Name"
                        value={text}
                        onChange={(event) => {
                            console.log(event.target.value);
                            updateText(event.target.value);
                            props.updateNameCallback(event.target.value)
                        }}
                    />
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="MaxNumberOfChildren">Max Number Of Children</label>
                    <input
                        className="form-control"
                        type="number" data-val="true"
                        data-val-required="The Max Number Of Children field is required."
                        id="MaxNumberOfChildren"
                        name="MaxNumberOfChildren"
                        value="" />
                </div>

                <div className="form-group">
                    <input
                        type="submit"
                        value="Create"
                        className="btn btn-primary" />
                </div>

            </form>
        </>
    )
};

export default Groups;