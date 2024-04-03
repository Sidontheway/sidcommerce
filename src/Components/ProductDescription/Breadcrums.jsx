import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';


export  function Nav_Breadcrumbs() {
  return (
    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb" sx = {{fontSize:"20px"}}>
        <Link underline="hover" color="primary" href="/">
          Home
        </Link>
        <Link
          underline="hover"
          color="primary"
          href="/"
        >
          Shop
        </Link>
        <p >
          Item Name
        </p>
      </Breadcrumbs>
    </div>
  );
}