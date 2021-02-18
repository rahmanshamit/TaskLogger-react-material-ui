import React from 'react';

const AddBtn = () => {
    return (
        <div className='fixed-action-btn'>
            <a href="#add-log-modal" className="btn-floating btn-large green darken-2 modal-trigger">
              <i className="large material-icons">add</i>
            </a>
                    <a href="#add-tech-modal" className="btn-floating blue modal-trigger" style = {{ marginLeft : 20 }}>
                        <i className="material-icons">person_add</i>
                    </a>
        </div>
    )
}

export default AddBtn;