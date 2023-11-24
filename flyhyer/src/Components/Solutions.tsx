import { useEffect, useState } from 'react'
import {
  womanOnABusinessJetB,
  youngWoman,
  gruopCharter,
  citation,
  womanWorking,
  hyerHorizon,
  hyerPay,
} from '../assets'
const Solutions = () => {
  const [fadeIn, setFadeIn] = useState(
    'opacity-0 -translate-y-full transition-all overflow-hidden'
  )
  const [apear, setApear] = useState('opacity-0')
  useEffect(() => {
    setFadeIn('opacity-100 translate-y-0 transition-all overflow-hidden')
    setApear('opacity-100')
  }, [])
  return (
    <div>
      <div className='relative w-full md:h-screen h-auto mb-10 '>
        <div className=' rounded-br-4xl absolute -z-0 w-full h-full bg-opacity-30 bg-main'></div>
        <img
          src={womanOnABusinessJetB}
          className=' rounded-br-4xl absolute -z-10 h-full w-full object-cover object-center '
          alt=''
        />
        <div className='grid md:grid-cols-7 relative z-10 text-second gap-14 md:gap-0 md:grid-rows-6 md:p-10 md:h-screen h-max'>
          <h1
            className={`${fadeIn} duration-1000 md:col-span-2  md:row-span-2 `}>
            <a href='/'>
              <svg
                width='55'
                height='55'
                viewBox='0 0 55 55'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='md:hidden inline-block'>
                <path
                  d='M0 0V55H27.7551C42.7804 55 55 42.7804 55 27.7551V0H0ZM53.8406 27.7551C53.8406 42.1311 42.1311 53.8406 27.7551 53.8406H1.15936V1.15936H53.8406V27.7551Z'
                  fill='#ffffff'></path>
                <path
                  d='M10.4111 19.1988H17.2513C19.3382 19.1988 21.054 17.5061 21.054 15.3961V29.4475H25.7378V5.72705H21.0308V15.4193H10.4111V5.72705H5.72729V29.4475H10.4111V19.1988Z'
                  fill='#ffffff'></path>
                <path
                  d='M31.6968 12.15C33.1344 11.9645 34.2938 10.8052 34.4793 9.36757C34.7575 7.25754 32.9721 5.47213 30.8621 5.75037C29.4245 5.93587 28.2651 7.09523 28.0796 8.53284C27.8014 10.6429 29.5868 12.4283 31.6968 12.15ZM31.72 6.30687C32.833 6.49236 33.7373 7.39666 33.9228 8.48646C34.2242 10.3182 32.6475 11.895 30.8157 11.5935C29.7027 11.408 28.7984 10.5037 28.6361 9.39076C28.3115 7.58216 29.8882 6.00543 31.72 6.30687Z'
                  fill='#ffffff'></path>
                <path
                  d='M30.7231 9.25195H31.21H31.3492L31.952 10.4345H32.6245L31.952 9.11282C32.323 8.95051 32.5085 8.67227 32.5085 8.32446C32.5085 7.69841 32.1375 7.39697 31.1173 7.39697H30.1202V10.4345H30.7231V9.25195ZM30.7231 7.8839H31.1869C31.6042 7.8839 31.8825 7.99984 31.8825 8.34765C31.8825 8.64908 31.6738 8.81139 31.21 8.81139H30.7231V7.8839Z'
                  fill='#ffffff'></path>
              </svg>
              <svg
                viewBox='0 0 116 45'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='hidden md:inline-block'>
                <path
                  d='M30.8032 0H23.5903V36.2469H30.8032V0Z'
                  fill='#ffffff'></path>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M0 0H7.21288V36.2469H0V0ZM7.21297 14.7849H23.5904C23.5904 18.0112 20.9599 20.5923 17.7353 20.5923H7.21297V14.7849Z'
                  fill='#ffffff'></path>
                <path
                  d='M35.2441 45V39.6976H37.8747C40.1941 39.6976 41.2124 39.7537 42.4004 36.8921L42.7116 36.1347L32.3307 9.34227H39.9396L46.0776 28.7282L52.3853 9.34227H59.4285L49.5002 35.4333C46.2756 43.7936 44.9179 44.9719 38.1576 44.9719H35.2441V45Z'
                  fill='#ffffff'></path>
                <path
                  d='M65.4251 24.6882C65.8211 29.2892 68.9608 31.5336 72.2702 31.5336C74.4483 31.5336 76.5414 30.7761 77.9557 28.4476H85.1403C83.6695 32.4594 79.7377 36.8921 72.3268 36.8921C63.6148 36.8921 58.5233 30.4395 58.5233 22.6963C58.5233 14.7007 64.1239 8.75308 72.1288 8.75308C80.5014 8.75308 85.6777 15.2057 85.4232 24.6882H65.4251ZM65.5382 19.947H78.38C78.2386 15.4021 75.014 13.803 72.0722 13.803C69.4699 13.803 66.0756 15.4021 65.5382 19.947Z'
                  fill='#ffffff'></path>
                <path
                  d='M103.696 15.9913C102.677 15.851 101.829 15.851 100.811 15.851C97.388 15.851 95.1252 17.1135 95.1252 22.1633V36.2749H88.1669V9.34227H95.012V14.0555C96.5677 10.717 99.0003 9.39838 102.168 9.39838C102.621 9.39838 103.215 9.45449 103.667 9.5106V15.9913H103.696Z'
                  fill='#ffffff'></path>
                <path
                  d='M111.022 9.87531C108.278 9.87531 106.043 7.65898 106.043 4.93766C106.043 2.21633 108.278 0 111.022 0C113.765 0 116 2.21633 116 4.93766C116 7.65898 113.765 9.87531 111.022 9.87531ZM111.022 0.841646C108.731 0.841646 106.892 2.69327 106.892 4.93766C106.892 7.2101 108.759 9.03367 111.022 9.03367C113.313 9.03367 115.152 7.18204 115.152 4.93766C115.152 2.66521 113.285 0.841646 111.022 0.841646Z'
                  fill='#ffffff'></path>
                <path
                  d='M111.163 5.38653H110.937H110.173V7.21009H109.24V2.58104H110.767C112.295 2.58104 112.889 3.00186 112.889 3.98378C112.889 4.51682 112.634 4.9657 112.04 5.19014L113.087 7.18204H112.068L111.163 5.38653ZM110.173 3.28241V4.68515H110.937C111.672 4.68515 111.955 4.46072 111.955 3.98378C111.955 3.45074 111.503 3.28241 110.88 3.28241H110.173Z'
                  fill='#ffffff'></path>
              </svg>
            </a>
          </h1>
          <div
            className={`${fadeIn} duration-1000 md:flex col-span-2 md:col-start-5 md:row-span-1 justify-center gap-4 items-start text-xl  hidden`}>
            <a
              href='./Solutions'
              className=' hover:border-opacity-100 border-opacity-0 border-b-main border-b duration-300 '>
              Solution
            </a>
            <a
              href='./Aboutus'
              className=' hover:border-opacity-100 border-opacity-0 border-b-main border-b duration-300 '>
              About
            </a>
            <a
              href='./Contact'
              className=' hover:border-opacity-100 border-opacity-0 border-b-main border-b duration-300 '>
              Contact
            </a>
          </div>
          <div className='md:col-start-5 md:col-span-2 md:row-start-3'>
            <h2 className=' text-4xl my-4'>Experience Hyer®</h2>
            <p className=' text-xl'>
              Focus on enjoying the destination, not worrying about the best way
              to fly there. The perfect aircraft is just a detail when designing
              a seamless experience.
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-flow-row md:grid-cols-8 md:grid-rows-6 m-10  border-b border-b-main py-5'>
        <h2 className=' text-5xl md:col-span-2 font-bold'>On-Demand</h2>
        <p className='text-xl md:col-span-3 md:col-start-6'>
          Fly on your terms. When you want, where you want. <br />
          Flying On-Demand gives you the total control of your flight and an
          unbeatable level of service at competitive rates. No hidden fees, no
          upfront investment or jet card payments.
        </p>
        <div className='flex  flex-col md:flex-row md:row-start-3 md:col-span-5 md:row-span-4'>
          <a href='' className=' flex flex-col mx-5'>
            <img
              src={womanWorking}
              alt=''
              className=' object-cover shadow-2xl h-full w-full'
            />
            <h3 className=' text-3xl font-bold text-main hover:text-opacity-80 duration-200'>
              Private Charter
            </h3>{' '}
            <p className=' text-lg text-main text-opacity-60'>
              Your aircraft is ready when you are
            </p>
          </a>
          <div className=' flex flex-col mx-5'>
            <img
              src={gruopCharter}
              alt=''
              className=' object-cover h-full w-full shadow-2xl'
            />
            <h3 className=' text-3xl font-bold text-main hover:text-opacity-80 duration-200'>
              Gruop Charter
            </h3>{' '}
            <p className=' text-lg text-main text-opacity-60'>Coming Soon</p>
          </div>
        </div>
      </div>
      <div className='grid grid-flow-row md:grid-cols-8 md:grid-rows-6 m-10  border-b border-b-main py-5'>
        <h2 className=' text-5xl md:col-span-3 font-bold'>
          Aircraft Ownership
        </h2>
        <p className='text-xl md:col-span-3 md:col-start-6'>
          Fly on your own aircraft. <br /> Elevate your aviation aspirations
          with Hyer Aviation's® expertise in shared aircraft ownership, offering
          personalized solutions that maximize efficiency and minimize costs for
          our discerning clients.
        </p>
        <div className='flex  flex-col md:flex-row md:row-start-3 md:col-span-5 md:row-span-4'>
          <a href='' className=' flex flex-col mx-5'>
            <img
              src={youngWoman}
              alt=''
              className=' object-cover shadow-2xl h-full w-full'
            />
            <h3 className=' text-3xl font-bold text-main hover:text-opacity-80 duration-200'>
              Range of aircraft{' '}
            </h3>{' '}
            <p className=' text-lg text-main text-opacity-60'>
              from turbo-props to heavy jets{' '}
            </p>
          </a>
          <div className=' flex flex-col mx-5'>
            <img
              src={citation}
              alt=''
              className=' object-cover h-full w-full shadow-2xl'
            />
            <h3 className=' text-3xl font-bold text-main hover:text-opacity-80 duration-200'>
              Fully owned or shared
            </h3>{' '}
            <p className=' text-lg text-main text-opacity-60'>
              Let us find you a pool of people to join in on shared ownership
            </p>
          </div>
        </div>
      </div>
      <div className='grid grid-flow-row md:grid-cols-8 md:grid-rows-6 m-10  border-b border-b-main py-5'>
        <h2 className=' text-5xl md:col-span-2 font-bold'>Memberships</h2>
        <p className='text-xl md:col-span-3 md:col-start-6'>
          Our membership program is{' '}
          <span className=' font-bold'>innovative, bold</span> and offers even
          more personalisation and flexibility. <br />
          You will start enjoying the benefits straight away.
        </p>
        <div className='flex  flex-col md:flex-row md:row-start-3 md:col-span-5 md:row-span-4'>
          <a href='' className=' flex flex-col mx-5'>
            <img
              src={hyerPay}
              alt=''
              className=' object-cover shadow-2xl h-full w-full'
            />
            <h3 className=' text-3xl font-bold text-main hover:text-opacity-80 duration-200'>
              Elevate{' '}
            </h3>{' '}
            <p className=' text-lg text-main text-opacity-60'>
              Enhanced services, control and rewards
            </p>
          </a>
          <div className=' flex flex-col mx-5'>
            <img
              src={hyerHorizon}
              alt=''
              className=' object-cover h-full w-full shadow-2xl'
            />
            <h3 className=' text-3xl font-bold text-main hover:text-opacity-80 duration-200'>
              Hyer® Altitude
            </h3>{' '}
            <p className=' text-lg text-main text-opacity-60'>Coming Soon</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Solutions
