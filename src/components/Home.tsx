import React from 'react';
import {  Button } from 'flowbite-react';
import Link from 'next/link';

const UserInformation: React.FC = () => {
  // let userSavedInformation:any = null;
  // userSavedInformation = {name: 'Jhon Doi', position: 'CEO & Web Developer', desc: 'Bonnie drives the technical strategy of the flowbite platform and brand'}

  return (
    <div className="h-screen flex items-center justify-center">
      <Button
        className="mb-4 text-6xl tracking-tight font-extrabold dark:text-white"
        value="Edit User Information"
      >
        <Link
          href="/userInformation"
        >
          Go Profile
        </Link>
        
      </Button>
    </div>
  );
};

export default UserInformation;