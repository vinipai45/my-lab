import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { test_data } from '../redux/consts';

export default function TestRedux() {

    const dispatch = useDispatch();
    let initial = useSelector((s) => s.test_data.initial);

    const [localState, setLocalState] = useState(initial)

    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        email: ""
    })


    useEffect(() => {
        setLocalState(initial)
        // console.log(initial, "redux state")
    }, [initial])


    const handleOnClickReduxData = () => {
        dispatch({
            type: test_data,
            payLoad: {
                initial: {
                    id: formValues.id,
                    name: formValues.name,
                    email: formValues.email,
                },
            },
        });
    }

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value

        })
    }


    return (
        <>
            <div style={{ margin: '20px' }} >

                <h4>Testing components</h4>


                <input type="text" name='id' value={formValues.id} placeholder='id' onChange={handleChange} /> <br /><br />
                <input type="text" name='name' value={formValues.name} placeholder='name' onChange={handleChange} /> <br /><br />
                <input type="text" name='email' value={formValues.email} placeholder='email' onChange={handleChange} /> <br /><br />

                <button onClick={handleOnClickReduxData} >
                    Click to set redux state
                </button>

                <p>{JSON.stringify(localState)}</p>

            </div>

        </>
    )
}
