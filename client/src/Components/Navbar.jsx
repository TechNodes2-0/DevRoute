import React from 'react'

function Navbar() {
  return (
    <div className='border-0 rounded-lg bg-gray-800 font-bold'>
        <div className='flex flex-row justify-between '>
            <div>
            <p>LOGO</p>
            </div>
            <div>
                <div className='flex w-20'>
                    <a>
                        home
                    </a>
                    <a>
                        search
                    </a>
                    <a>
                        contact
                    </a>
                    <a>
                        about
                    </a>
                </div>
            </div>
            <div>
                <div>
                    <button>
                        LogIN
                    </button>
                    <button>
                        SignUP
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
