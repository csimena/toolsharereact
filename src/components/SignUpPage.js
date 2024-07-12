import React, { useState, useEffect } from 'react';
import { TileList } from './TileList';

const SignUpPage = (props) => {
  const { signupList } = props;

  return (
    <div>
      <section>
        <h2>Sign Ups</h2>
        <TileList objects={signupList} />
      </section>
    </div>
  );
};

export default SignUpPage;