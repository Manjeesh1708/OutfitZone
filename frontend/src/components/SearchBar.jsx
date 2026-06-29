import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'
const SearchBar = () => {

    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const [visible, setVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if ( location.pathname.includes('/collection')) {
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [location.pathname, showSearch]);

    return showSearch && visible ? (
        <div className='border-y border-slate-200 bg-[#fafafa]'>
            <div className='mx-auto flex w-full max-w-6xl items-center justify-center gap-4 px-4 py-8 sm:px-6'>
                <div className='flex w-full max-w-4xl items-center rounded-full border border-slate-300 bg-white px-5 py-3 shadow-sm'>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='w-full bg-transparent text-[15px] text-slate-700 outline-none placeholder:text-slate-400'
                        type="text"
                        placeholder='Search for products...'
                    />
                    <img src={assets.search_icon} className='ml-4 w-5 shrink-0 opacity-80' alt="" />
                </div>
                <button
                    type='button'
                    onClick={() => setShowSearch(false)}
                    className='grid h-10 w-10 shrink-0 place-items-center text-slate-500 transition-colors hover:text-slate-800'
                    aria-label='Close search'
                >
                    <img src={assets.cross_icon} className='w-4' alt="" />
                </button>
            </div>
        </div>
    ) : null;
}

export default SearchBar