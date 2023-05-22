import { User } from 'components/User/User';
//import user from '../../data/user.json';
import React from 'react';

export const Profile = ({ user }) => {
  return <User user={user} />;
};
