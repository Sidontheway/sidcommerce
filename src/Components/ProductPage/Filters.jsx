"use client"

import {
  SfAccordionItem,
  SfButton,
  SfCounter,
  SfChip,
  SfIconClose,
  SfIconChevronLeft,
  SfIconArrowBack,
  SfIconCheck,
  SfListItem,
  SfThumbnail,
  SfRadio,
  SfRating,
  SfSelect,
  SfCheckbox,
} from '@storefront-ui/react';
import { Fragment, useState } from 'react';
import classNames from 'classnames';

const sortOptions = [
  { id: 'sort1', label: 'Relevance', value: 'relevance' },
  { id: 'sort2', label: 'Price: Low to High', value: 'price low to high' },
  { id: 'sort3', label: 'Price: High to Low', value: 'price high to low' },
  { id: 'sort4', label: 'New Arrivals', value: 'new arrivals' },
  { id: 'sort5', label: 'Customer Rating', value: 'customer rating' },
  { id: 'sort6', label: 'Bestsellers', value: 'bestsellers' },
];

const filtersData = [

  {
    id: 'acc2',
    summary: 'Category',
    type: 'category',
    details: [
      {
        id: 'ABC',
        label: 'ABC',
        value: 'abc',
        counter: 300,
        link: '#',
      },
      {
        id: 'CLOTHING',
        label: 'Clothing',
        value: 'clothing',
        counter: 30,
        link: '#',
      },
      {
        id: 'SHOES',
        label: 'Shoes',
        value: 'shoes',
        counter: 28,
        link: '#',
      },
      {
        id: 'ACCESSORIES',
        label: 'Accessories',
        value: 'accessories',
        counter: 56,
        link: '#',
      },
      {
        id: 'WEARABLES',
        label: 'Wearables',
        value: 'wearables',
        counter: 12,
        link: '#',
      },
      {
        id: 'FOOD_DRINKS',
        label: 'Food & Drinks',
        value: 'food and drinks',
        counter: 52,
        link: '#',
      },
    ],
  },
  {
    id: 'acc4',
    summary: 'Brand',
    type: 'checkbox',
    details: [
      { id: 'b1', label: 'Conroy', value: 'conroy', counter: 10 },
      { id: 'b2', label: 'Goyette', value: 'goyette', counter: 100 },
      { id: 'b3', label: 'Ledner & Ward', value: 'lednerward', counter: 0 },
      { id: 'b4', label: 'Pacocha', value: 'pacocha', counter: 3 },
    ],
  },
  {
    id: 'acc5',
    summary: 'Price',
    type: 'radio',
    details: [
      { id: 'pr1', label: 'Under $24.99', value: 'under', counter: 123 },
      { id: 'pr2', label: '$25.00 - $49.99', value: '25-49', counter: 100 },
      { id: 'pr3', label: '$50.00 - $99.99', value: '50-99', counter: 12 },
      { id: 'pr4', label: '$100.00 - $199.99', value: '100-199', counter: 3 },
      { id: 'pr5', label: '$200.00 and above', value: 'above', counter: 18 },
    ],
  },
  {
    id: 'acc6',
    summary: 'Rating',
    type: 'rating',
    details: [
      { id: 'r1', label: '5', value: '5', counter: 10 },
      { id: 'r2', label: '4 & up', value: '4', counter: 123 },
      { id: 'r3', label: '3 & up', value: '3', counter: 12 },
      { id: 'r4', label: '2 & up', value: '2', counter: 3 },
      { id: 'r5', label: '1 & up', value: '1', counter: 13 },
    ],
  },
];

export default function FiltersSidepanel() {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [opened, setOpened] = useState(filtersData.map((item) => item.id));

  var num = 0;
  const handleActive = (active)=>{
    console.log(typeof(active));
    num = active;
  }

  const isAccordionItemOpen = (id) => opened.includes(id);
  const isFilterSelected = (selectedValue) => selectedFilters.includes(selectedValue);

  const handleFilterSelection = (selectedValue) => {
    if (selectedFilters.indexOf(selectedValue) > -1) {
      setSelectedFilters([...selectedFilters.filter((value) => value !== selectedValue)]);
    } else {
      setSelectedFilters([...selectedFilters, selectedValue]);
    }
  };

  const handleToggle = (id) => (open) => {
    if (open) {
      setOpened((current) => [...current, id]);
    } else {
      setOpened((current) => current.filter((item) => item !== id));
    }
  };

  const handleClearFilters = () => {
    setSelectedFilters([]);
    setPrice(null);
    setRating(null);
  };

  return (
    <aside className="w-[80%] md:max-w-[376px] ml-10">
      <div className="flex items-center justify-between mb-4">
        <h4 className="px-2 font-bold typography-headline-4">List settings</h4>
        <button type="button" className="sm:hidden text-neutral-500" aria-label="Close filters panel">
          <SfIconClose />
        </button>
      </div>
      <h5 className="py-2 px-4 mb-6 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Sort by
      </h5>
      <div className="px-2">
        <SfSelect aria-label="Sorting">
          {sortOptions.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </SfSelect>
      </div>
      <h5 className="py-2 px-4 mt-6 mb-4 bg-neutral-100 typography-headline-6 font-bold text-neutral-900 uppercase tracking-widest md:rounded-md">
        Filter
      </h5>
      {filtersData.map((section) => (
        <Fragment key={section.id}>
          <SfAccordionItem
            onToggle={handleToggle(section.id)}
            open={isAccordionItemOpen(section.id)}
            summary={
              <div className="flex justify-between p-2 mb-2">
                <p className="mb-2 font-medium typography-headline-5">{section.summary}</p>
                <SfIconChevronLeft
                  className={classNames(
                    'text-neutral-500',
                    `${isAccordionItemOpen(section.id) ? 'rotate-90' : '-rotate-90'}`,
                  )}
                />
              </div>
            }
          >

            {section.type === 'category' && (
              <ul className="mt-2 mb-6">
                {/* <li>
                    <SfListItem size="sm" as="button" type="button">
                      <span className="flex items-center">
                        <SfIconArrowBack size="sm" className="text-neutral-500 mr-3" />
                        Back to {section.details[0].label}
                      </span>
                    </SfListItem>
                  </li> */}
                {section.details.map(({ id, link, label, counter }, categoryIndex) => (
                  <li key={id} onClick={handleActive(categoryIndex)}>
                    <SfListItem
                      size="sm"
                      as="a"
                      href={link}
                      className={classNames('first-of-type:mt-2 rounded-md active:bg-primary-100', {
                        'bg-primary-100 hover:bg-primary-100 font-medium':categoryIndex === num
                      })}
                      slotSuffix={categoryIndex === num && <SfIconCheck size="sm" className="text-primary-700" />}
                    >
                      <span className="flex items-center">
                        {label}
                        <SfCounter className="ml-2 typography-text-sm font-normal">{counter}</SfCounter>
                      </span>
                    </SfListItem>
                  </li>
                ))}
              </ul>
            )}

            {section.type === 'checkbox' &&
              section.details.map(({ label, value, counter }) => (
                <SfListItem
                  key={value}
                  as="label"
                  size="sm"
                  disabled={counter === 0}
                  className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                    'font-medium': isFilterSelected(value),
                  })}
                  slotPrefix={
                    <SfCheckbox
                      className="flex items-center"
                      disabled={counter === 0}
                      value={value}
                      checked={isFilterSelected(value)}
                      onChange={(event) => {
                        handleFilterSelection(event.target.value);
                      }}
                    />
                  }
                >
                  <p>
                    <span className="mr-2 text-sm">{label}</span>
                    <SfCounter size="sm">{counter}</SfCounter>
                  </p>
                </SfListItem>
              ))}
            {section.type === 'radio' && (
              <fieldset name="radio-price">
                {section.details.map(({ label, value, counter }) => (
                  <SfListItem
                    key={value}
                    as="label"
                    size="sm"
                    disabled={counter === 0}
                    className={classNames('px-1.5 bg-transparent hover:bg-transparent', {
                      'font-medium': value === price,
                    })}
                    slotPrefix={
                      <SfRadio
                        className="flex items-center"
                        disabled={counter === 0}
                        value={value}
                        checked={price === value}
                        name="radio-price"
                        onChange={() => setPrice(price === value ? null : value)}
                      />
                    }
                  >
                    <p>
                      <span className="mr-2 text-sm">{label}</span>
                      <SfCounter size="sm">{counter}</SfCounter>
                    </p>
                  </SfListItem>
                ))}
              </fieldset>
            )}
            {section.type === 'rating' && (
              <fieldset id="radio-rating">
                {section.details.map(({ id, label, value, counter }) => (
                  <SfListItem
                    key={id}
                    as="label"
                    size="sm"
                    className={classNames('!items-center py-4 md:py-1 bg-transparent hover:bg-transparent', {
                      'font-medium': value === rating,
                    })}
                    slotPrefix={
                      <SfRadio
                        className="flex items-center"
                        value={value}
                        checked={rating === value}
                        name="radio-rating"
                        onChange={() => setRating(rating === value ? null : value)}
                      />
                    }
                  >
                    {/* TODO: Adjust the styling and remove block elements when/if span wrapper removed from ListItem */}
                    <div className="flex flex-wrap items-center">
                      <SfRating className="-mt-px" value={Number(value)} max={5} size="sm" />
                      <span className="mx-2 text-base md:text-sm">{label}</span>
                      <SfCounter size="sm">{counter}</SfCounter>
                    </div>
                  </SfListItem>
                ))}
              </fieldset>
            )}
          </SfAccordionItem>
          <hr className="my-4" />
        </Fragment>
      ))}
      <div className="flex justify-between">
        <SfButton variant="secondary" className="w-full mr-3" onClick={handleClearFilters}>
          Clear all filters
        </SfButton>
        <SfButton className="w-full">Show products</SfButton>
      </div>
    </aside>
  );
}
