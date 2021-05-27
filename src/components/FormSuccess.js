import React from 'react'
import cookingLogo from '../images/cooking.png';

const FormSuccess = () => {
    return (
        <div className="form-content-right">
            <div className="form-success">We have received your request! Bear with us as we prepare your account</div>
                <img src={cookingLogo} alt='success-image'className='form-img-2'/>
        </div>
    )
}

export default FormSuccess
