import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const onSubmit = () => {
        if (firstName === '' || lastName === ''){
            M.toast( { html: 'Pease enter both first and last name'} );
        } else { 
        console.log(firstName, lastName);
        
        //clear fields
        setFirstName('');
        setLastName('');
        }
    }

    return (
        <div id='add-tech-modal' className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Add New Team Member</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor="message" className="active">First Name</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor="message" className="active">Last Name</label>
                    </div>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect blue waves-light btn">Enter</a>
            </div>
        </div>
    )
};

const modalStyle = {
    width: '50%',
    height: '50%'
};

export default AddTechModal;
