import React from 'react'

export const SearchBox = ({ searchChange }) => {
    return (
        <div className="pa2 ma2 flex justify-center center">
            <input
                type="search"
                autoFocus
                placeholder="Search your favorite robot 🤖 "
                className="pa3 ba b--green bg-lightest-blue w-100 w-50-ns br2"
                onChange={searchChange}
            />
        </div>
    )
}
