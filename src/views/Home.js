import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { signInUser } from '../helpers/auth';

function Home({ user }) {
  return (
    <>
      <h1>React Hoarder</h1>
      <p>Are you a &quot;collector&quot; that wants to show off your amazing collection? Then sign in and let&apos;s get started!</p>
      {user ? '' : <Button color='info' onClick={signInUser}>SignIN!</Button>}
    </>
  );
}

Home.propTypes = {
  user: PropTypes.any
};

export default Home;
