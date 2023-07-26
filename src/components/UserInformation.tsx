import React from 'react';
import Head from 'next/head';
import { TextInput, Button, Accordion, Alert, Avatar, Card } from 'flowbite-react';
import Image from 'next/image';
import UserCardInformation from './UserCardInformation';
import SuccessAlert from './SuccessAlert';
import FormEditUser from './FormEditUser';
import Link from 'next/link';

const UserInformation: React.FC = () => {
  // let userSavedInformation:any = null;
  // userSavedInformation = {name: 'Jhon Doi', position: 'CEO & Web Developer', desc: 'Bonnie drives the technical strategy of the flowbite platform and brand'}
  const userSavedInformation = {
    name: 'Jhon Doi',
    position: 'CEO & Web Developer',
    desc: 'Bonnie drives the technical strategy of the flowbite platform and brand',
  };
  const [name, setName] = React.useState(userSavedInformation.name);
  const [position, setPosition] = React.useState(userSavedInformation.position);
  const [desc, setDesc] = React.useState(userSavedInformation.desc);
  const [isEdit, setIsEdit] = React.useState(false);

  const handleClickReset = () => {
    setName('');
    setPosition('');
    setDesc('');
  }

  const handleClickSubmit = () => {
    userSavedInformation.name = name;
    userSavedInformation.position = position;
    userSavedInformation.desc = desc;
    console.log(userSavedInformation);
    setIsEdit(false);
  }

  return (
    <div className="bg-white dark:bg-gray-900 overflow-hidden" style={{minWidth: "300px"}}>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
          <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Edit User Information </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">Edit your user information</p>
          </div> 
          <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-1">
              <UserCardInformation name={name} description={desc} position={position} isEdit={isEdit} setIsEdit={setIsEdit} />
              {/* <SuccessAlert /> */}
              {isEdit ? <FormEditUser 
                name={name} 
                description={desc} 
                position={position} 
                setName={setName} 
                setPosition={setPosition} 
                setDesc={setDesc} 
                handleReset={handleClickReset} 
                handleSubmit={handleClickSubmit} 
              /> :null}
          </div>  
      </div>
      <div className='float-right mr-6'>
      <Link href="/">
        <Button
          className="mb-4 text-6xl justify-end tracking-tight font-extrabold dark:text-white bg-red-600"
          value="Back to Home"
        >
          
            Back to Home
        </Button>
      </Link>
      </div>
    </div>
  );
};

export default UserInformation;