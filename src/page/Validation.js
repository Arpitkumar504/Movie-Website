import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Validation = () => {
    const [alldata,setfulldata]=useState([]);
    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            pass: "",
            cpass: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().min(4, "Min 4 char").max(15, "Max 15 char").required('Please Enter Full Name'),
            email: Yup.string().min(4).max(20).required('Required'),
            pass: Yup.string().min(6).required("Please enter your password"),
            cpass: Yup.string().required().min(6).max(15)
                .oneOf([Yup.ref('pass'), null], 'Passwords must match')
        }),
        onSubmit: (values, action) => {
            console.log(values);
            // combined into one array
            const datas={
                name:values.name,
                email:values.email,
                cpass:values.cpass,
                pass:values.pass,
            }
            setfulldata([...alldata,datas]);
            console.log(alldata);
            console.log(datas);
            // Clean Form Field
            action.resetForm();
        },
    });
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="data">
                    <div className="formsdata">
                        <input
                            type="name"
                            name="name"
                            placeholder='Enter Name'
                            className='formsdata'
                            autoComplete="off"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.name && touched.name ? (<p>{errors.name}</p>) : null}
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter Email'
                            className='formsdata'
                            autoComplete="off"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
                        <input
                            type="password"
                            name="pass"
                            placeholder='Enter Password'
                            className='formsdata'
                            autoComplete="off"
                            value={values.pass}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.pass && touched.pass ? (<p>{errors.pass}</p>) : null}
                        <input
                            type="password"
                            name="cpass"
                            placeholder='Enter Conform Password'
                            className='formsdata'
                            autoComplete="off"
                            value={values.cpass}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        {errors.cpass && touched.cpass ? (<p>{errors.cpass}</p>) : null}
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Validation
