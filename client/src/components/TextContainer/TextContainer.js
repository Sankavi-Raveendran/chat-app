import React from 'react';
import PropTypes from 'prop-types';

import onlineIcon from '../../icons/onlineIcon.png';
import './TextContainer.css';

function TextContainer({ users }) {
  return (
    <div className="textContainer">
      <div>
        <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
        <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
        <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
      </div>
      {users && users.length > 0 ? (
        <div>
          <h1>People currently chatting:</h1>
          <div className="activeContainer">
            <h2>
              {users.map(({ name }) => (
                <div key={name} className="activeItem">
                  {name} <img alt="Online Icon" src={onlineIcon} />
                </div>
              ))}
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// ✅ Default Props
TextContainer.defaultProps = {
  users: [],
};

// ✅ PropTypes with FIXED trailing comma
TextContainer.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ), // ✅ Fixed missing trailing comma
};

export default TextContainer;
