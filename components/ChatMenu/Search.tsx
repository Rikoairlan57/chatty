import React from "react"
import { HiOutlineSearch } from 'react-icons/hi'

const Search = () => {
    return (
        <div className="flex justify-center items-center px-4">
            <div className="flex justify-center items-center px-3 gap-2 bg-neutral-700 rounded w-full">
                <HiOutlineSearch size={20} />
                <input type="text" maxLength={40} name="search-chat" placeholder="Search...." className="bg-neutral-700 rounded w-full h-9 outline-none" />
            </div>
        </div>
    )
}

export default Search