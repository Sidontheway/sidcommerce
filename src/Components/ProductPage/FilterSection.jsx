import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const colors = ["Red", "Green", "Blue", "Black", "Brown", "Pink"];
const categeories = ["MilkAndCreams ","Fruits","Vegetables","Ocean Food","ButtersAndEggs","LampsAndLighting","FreshMeats","SeedsAndSpices"]
const sizes = ["S", "M", "L", "XL"];
const sortingOrder = ["Newest", "Price Low - High", "Price High - Low"];

const filterOptions = [
    {
        id: "sort",
        title: "Sorting Order",
        options: sortingOrder,
        type: "radio"
    }, {
        id: "categories",
        title: "Categories",
        options: categeories,
        type: "checkbox"
    }, {
        id: "colors",
        title: "Colors",
        options: colors,
        type: "checkbox"
    }, {
        id: "sizes",
        title: "Sizes",
        options: sizes,
        type: "checkbox"
    },
];

const checkValidQuery = (queries) => {
    return queries.filter((query) => query !== "").length > 0;
}

export function convertStringToQueriesObject(searchParams) {
    let selectedQueries = {};
    searchParams.forEach((values, key) => {
        const queries = values.split(",");
        if (selectedQueries[key]) {
            selectedQueries[key].push(...queries);
        }
        else {
            selectedQueries[key] = queries;
        }
    });
    return selectedQueries;
}
const convertValidStringQueries = (queries) => {
    let q = "";
    for (let [key, value] of Object.entries(queries)) {
        q = q + `${q === "" ? "" : "&"}${key}=${value}`;
    }
    return q;
}

const FilterSection = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [SelectedQueries, SetSelectedQueries] = useState({});

    useEffect(() => {
        const paramsObj = convertStringToQueriesObject(searchParams);
        SetSelectedQueries(paramsObj);
    }, [searchParams]);

    const handleSelectFilterOptions = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const type = e.target.type;

        let selectedQueries = { ...SelectedQueries }; // Make a copy of the state

        if (selectedQueries[name]) {
            if (type === "radio") {
                selectedQueries[name] = [value];
            } else if (selectedQueries[name].includes(value)) {
                selectedQueries[name] = selectedQueries[name].filter(
                    (query) => query !== value
                );
                if (!checkValidQuery(selectedQueries[name])) {
                    delete selectedQueries[name];
                }
            } else {
                selectedQueries[name].push(value);
            }
        } else {
            if (type === "radio") {
                selectedQueries[name] = [value];
            } else {
                selectedQueries[name] = [value];
            }
        }

        router.push(`/?${convertValidStringQueries(selectedQueries)}`, {
            scroll: false,
        });
    };

    const ClearAllFilters =()=>{
        SetSelectedQueries({});
        router.push("/");
        window.scrollTo(0,0);
    }

    const isChecked = (id, option) => {
        return (
            Boolean(SelectedQueries[id] && SelectedQueries[id].includes(option.toLowerCase()))
        )
    }
    return (
        <div className='col-span-2 space-y-6 sticky top-12 h-fit'>
            {
                filterOptions.map(({ id, title, type, options }) => {
                    return (
                        <div className="border-b pb-4" key={id}>
                            <p className="font-semibold text-lg mb-4">{title}</p>
                            <div className="space-y-2">
                                {
                                    options.map((value) => {
                                        return (
                                            <CheckboxAndRadioGroup key={value}>
                                                <CheckboxAndRadioItem
                                                    type={type}
                                                    name={id}
                                                    id={value.toLowerCase().trim()}
                                                    label={value}
                                                    value={value.toLowerCase().trim()}
                                                    checked={isChecked(id, value)}
                                                    onChange={handleSelectFilterOptions}
                                                />
                                            </CheckboxAndRadioGroup>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div>
                <button 
                   className='w-32 h-10 bg-blue-400 hover:bg-blue-500 rounded-md text-normal font-semibold p-1 text-white'
                   onClick={ClearAllFilters}
                >Clear All Filters</button>
            </div>
        </div>
    )
}


function CheckboxAndRadioGroup({ children }) {
    return <div className='flex items-center gap-4'>{children}</div>
}
function CheckboxAndRadioItem({ id, label, ...props }) {
    return (
        <>
            <input id={id} className='w-5 h-5 cursor-pointer' {...props} />
            <label htmlFor={id} className='text-md font-medium cursor-pointer'>
                {label}
            </label>
        </>
    )
}
export default FilterSection;