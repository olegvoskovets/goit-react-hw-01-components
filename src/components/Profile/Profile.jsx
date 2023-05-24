import PropTypes from 'prop-types';
import { User } from 'components/User/User';
//import user from '../../data/user.json';
import React from 'react';

export const Profile = ({ user }) => {
  return <User user={user} />;
};

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }),
};
