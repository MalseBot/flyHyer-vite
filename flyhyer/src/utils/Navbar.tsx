import { useState, useEffect } from 'react'
import { IoIosExit } from 'react-icons/io'
import { BiSolidPlane } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import { GoPeople } from 'react-icons/go'
const Navbar = () => {
  const [fadeIn, setFadeIn] = useState(
    'opacity-0 -translate-y-full transition-all overflow-hidden duration-1000'
  )
  useEffect(() => {
    setFadeIn(
      'opacity-100 translate-y-0 transition-all overflow-hidden duration-1000 delay-200 '
    )
  }, [])
  const [demandShow, setdemandShow] = useState(true)
  const [sharedShow, setSharedShow] = useState(false)
  const [navVisiblity, setNavVisiblity] = useState(true)
  const [doomVisiblity, setDoomVisiblity] = useState(true)
  var moveOutNav = 'translate-x-0'
  if (navVisiblity) {
    moveOutNav = 'translate-x-full'
  } else {
    moveOutNav = 'translate-x-0'
  }
  var moveOutDoom = 'translate-x-0'
  if (doomVisiblity) {
    moveOutDoom = 'translate-x-full'
  } else {
    moveOutDoom = 'translate-x-0'
  }
  return (
    <div className=''>
      <div className={`absolute z-20 flex end-0 ${fadeIn}`}>
        <button
          className='p-3 rounded-full bg-main text-second text-xl m-7 me-2'
          onClick={() => setDoomVisiblity(false)}>
          <BiSolidPlane />
        </button>
        <button
          className='p-3 rounded-full ms-2 bg-main text-second text-xl m-7 me-16'
          onClick={() => setNavVisiblity(false)}>
          <FaBars />
        </button>
      </div>
      <div className=' '>
        <div
          className={` absolute w-full h-screen bg-main opacity-50 ${
            doomVisiblity && 'hidden'
          }${navVisiblity && ' '}`}></div>
        <div
          className={` shadow-2xl end-0  z-30 fixed bg-second w-full md:w-1/2 h-full  transition-all duration-500 ${moveOutNav} `}>
          <div className='md:p-10 p-5  flex justify-center md:justify-end'>
            <button className='bg-main text-second p-2.5 hover:bg-grab transition-all duration-150 px-5 rounded-3xl text-md font-bold'>
              Login
            </button>
            <button className='mx-3 bg-main text-second p-2.5 hover:bg-grab transition-all duration-150 px-5 rounded-3xl text-md font-bold'>
              Register
            </button>
            <button
              className='hover:text-grab transition-all duration-150 text-5xl text-main md:ms-12 '
              onClick={() => setNavVisiblity(true)}>
              <IoIosExit />
            </button>
          </div>
          <div className=' text-main p-5 gap-5 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 h-4/5'>
            <div>
              <h4 className=' text-4xl font-semibold'>On Demand</h4>
              <ul>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-xl'>
                    Private charter
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className=' text-4xl font-semibold'>Shared flights</h4>
              <ul>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-xl'>
                    Avalible flights
                  </button>
                </li>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-xl'>
                    Propose a flight
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className=' text-4xl font-semibold'>Memberships</h4>
              <ul>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-xl'>
                    Elevate
                  </button>
                </li>
                <li>
                  {' '}
                  <p className=' cursor-default text-xl'>
                    Hyer® Altitude <span className=' text-xs'>Coming soon</span>
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h4 className=' text-4xl font-semibold'>Company</h4>
              <ul>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-xl'>
                    About us
                  </button>
                </li>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-xl'>
                    Solutions
                  </button>
                </li>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-xl'>
                    News
                  </button>
                </li>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-xl'>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={` shadow-2xl end-0  z-30 fixed bg-second w-full md:w-1/2 h-full transition-all duration-500 ${moveOutDoom} `}>
          <div className='md:p-10 p-5 bg-main flex justify-center md:justify-end'>
            <button
              onClick={() => {
                setSharedShow(false)
                setdemandShow(true)
              }}
              className={` ${
                demandShow && '!bg-grab2 '
              }   text-second p-2 hover:bg-grab2 transition-all duration-150 px-5 rounded-3xl text-sm `}>
              On-demand
            </button>
            <button
              onClick={() => {
                setSharedShow(true)
                setdemandShow(false)
              }}
              className={`mx-3 ${
                sharedShow && 'bg-grab2 '
              } text-second p-2 hover:bg-grab2 transition-all duration-150 px-5 rounded-3xl text-sm`}>
              Shared flights
            </button>
            <button
              className='hover:text-grab2 transition-all duration-150 text-5xl text-second md:ms-12 '
              onClick={() => setDoomVisiblity(true)}>
              <IoIosExit />
            </button>
          </div>
          <div className={demandShow ? 'visible' : 'hidden'}>
            <h2 className=' text-center text-5xl font-bold bg-main text-second p-10'>
              Book On-Demand
            </h2>
            <p className=' text-main text-lg p-10'>
              Due to a high volume of requests, Hyer is currently unable to
              accept new flight requests from non-members. We apologize for any
              inconvenience this may cause.
            </p>
            <p className=' text-main text-lg p-10 pt-0'>
              If you are interested in becoming a member, please click the
              button below.
            </p>
            <a href='./Elevate' className='text-second p-2 bg-main transition-all duration-150 px-5 m-10 mt-0 rounded-3xl text-lg'>
              View Elevate Membership
            </a>
          </div>
          <div className={sharedShow ? 'visible' : 'hidden'}>
            <h2 className=' text-center text-5xl font-bold bg-main text-second p-10'>
              Book a shared flight
            </h2>
            <div className='w-full border-b-2 border-b-main border-opacity-20'>
              <h3 className=' border-b-2 inline-block border-b-grab2 py-3 ms-10 font-bold'>
                One way
              </h3>
            </div>
            <form className='p-10 pb-5 flex flex-col'>
              <label
                htmlFor='from'
                className=' text-sm font-bold text-main text-opacity-50'>
                From*
              </label>
              <div className='flex justify-between border-b border-b-main border-opacity-25'>
                <input
                  type='text'
                  name='from'
                  id=''
                  placeholder='From where?'
                  className=' text-xl font-bold w-full'
                />
                <span className=' text-opacity-60 text-main text-xl m-3'>
                  <CiLocationOn />
                </span>
              </div>
              <label
                htmlFor='to'
                className='mt-4 text-sm font-bold text-main text-opacity-50'>
                To*
              </label>
              <div className='flex justify-between border-b border-b-main border-opacity-25 '>
                <input
                  type='text'
                  name='to'
                  id=''
                  placeholder='To where?'
                  className=' text-xl font-bold w-full'
                />
                <span className=' text-opacity-60 text-main text-xl m-3'>
                  <CiLocationOn />
                </span>
              </div>
              <label
                htmlFor='Passengers'
                className='mt-4 text-sm font-bold text-main text-opacity-50'>
                Passengers*
              </label>
              <div className='flex justify-between border-b border-b-main border-opacity-25 '>
                <input
                  type='number'
                  name='Passengers'
                  min={1}
                  id=''
                  placeholder='Amount of Passengers'
                  className=' text-xl font-bold w-full'
                />
                <span className=' text-opacity-60 text-main text-xl m-3'>
                  <GoPeople />
                </span>
              </div>
              <button
                type='submit'
                className=' w-min mt-10 text-second p-2 bg-main transition-all duration-150 px-5 m-10  rounded-3xl text-lg'>
                Proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
