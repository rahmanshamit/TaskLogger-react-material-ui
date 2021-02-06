import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';


const LogItem = ({ log }) => {
    return (
        <li className="collection-item">
            <div>
                <a href='#edit-log-modal' className={`modal-trigger ${log.attention ? 'red-text' : 'green-text'}`}>{log.message}</a>
                <br/>
                <span className='grey-text'>
                    <span className='black-text'>Task ID#{log.id}</span><br/>
                    Last Update By: <span className='black-text'> {log.teammate}</span>, On: <Moment parse="YYYY-MM-DDTHH:mm:ss" format="MMMM Do, YYYY, h:mm a">
                                                                                             {log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content">
                   <i className="material-icons grey-text">delete</i> 
                </a>
            </div>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired
}

export default LogItem;

