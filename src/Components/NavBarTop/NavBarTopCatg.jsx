"use client"

import React from 'react'

import { SfSelect } from '@storefront-ui/react';

const options = [
    { label: 'All', value: 'red' },
    { label: 'Butter & Eggs', value: 'op2' },
    { label: 'Fastfood', value: 'op3' },
    { label: 'Freshmeat', value: 'op4' },
    { label: 'Option5', value: 'op5' },
    { label: 'Option6', value: 'op6' },
    { label: 'Option7', value: 'op7' },
    { label: 'Option8', value: 'op8' },

  ];
  
const NavBarTopCatg = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <label>
        <SfSelect placeholder="-- Select --" size='base' className=' rounded-none' >
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </label>
    </div>
  )
}

export default NavBarTopCatg;