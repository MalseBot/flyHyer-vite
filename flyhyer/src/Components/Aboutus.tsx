import { useEffect, useState } from 'react'
import { shutterStock, max, held,onPlane } from '../assets'
import { CiUnlock } from 'react-icons/ci'
import { GoPeople } from 'react-icons/go'
import { TbPlaneInflight } from 'react-icons/tb'
import { CgEditBlackPoint } from 'react-icons/cg'
import { PiLeaf } from 'react-icons/pi'
import { Carousel } from 'react-responsive-carousel'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../index.css'
const Aboutus = () => {
  const [fadeIn, setFadeIn] = useState(
    'opacity-0 -translate-y-full transition-all overflow-hidden'
  )

  useEffect(() => {
    setFadeIn('opacity-100 translate-y-0 transition-all overflow-hidden')
  }, [])
  return (
    <div className=' bg-about-BG'>
      <div className='grid md:grid-cols-7 relative z-10 mx-10 border-b text-main gap-14 md:gap-0 md:grid-rows-4 md:p-10  h-max'>
        <h1 className={`${fadeIn} duration-1000 md:col-span-4  md:row-span-4 `}>
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
                fill='#000D10'></path>
              <path
                d='M10.4111 19.1988H17.2513C19.3382 19.1988 21.054 17.5061 21.054 15.3961V29.4475H25.7378V5.72705H21.0308V15.4193H10.4111V5.72705H5.72729V29.4475H10.4111V19.1988Z'
                fill='#000D10'></path>
              <path
                d='M31.6968 12.15C33.1344 11.9645 34.2938 10.8052 34.4793 9.36757C34.7575 7.25754 32.9721 5.47213 30.8621 5.75037C29.4245 5.93587 28.2651 7.09523 28.0796 8.53284C27.8014 10.6429 29.5868 12.4283 31.6968 12.15ZM31.72 6.30687C32.833 6.49236 33.7373 7.39666 33.9228 8.48646C34.2242 10.3182 32.6475 11.895 30.8157 11.5935C29.7027 11.408 28.7984 10.5037 28.6361 9.39076C28.3115 7.58216 29.8882 6.00543 31.72 6.30687Z'
                fill='#000D10'></path>
              <path
                d='M30.7231 9.25195H31.21H31.3492L31.952 10.4345H32.6245L31.952 9.11282C32.323 8.95051 32.5085 8.67227 32.5085 8.32446C32.5085 7.69841 32.1375 7.39697 31.1173 7.39697H30.1202V10.4345H30.7231V9.25195ZM30.7231 7.8839H31.1869C31.6042 7.8839 31.8825 7.99984 31.8825 8.34765C31.8825 8.64908 31.6738 8.81139 31.21 8.81139H30.7231V7.8839Z'
                fill='#000D10'></path>
            </svg>
            <svg
              viewBox='0 0 116 45'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='hidden md:inline-block'>
              <path
                d='M30.8032 0H23.5903V36.2469H30.8032V0Z'
                fill='#000D10'></path>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M0 0H7.21288V36.2469H0V0ZM7.21297 14.7849H23.5904C23.5904 18.0112 20.9599 20.5923 17.7353 20.5923H7.21297V14.7849Z'
                fill='#000D10'></path>
              <path
                d='M35.2441 45V39.6976H37.8747C40.1941 39.6976 41.2124 39.7537 42.4004 36.8921L42.7116 36.1347L32.3307 9.34227H39.9396L46.0776 28.7282L52.3853 9.34227H59.4285L49.5002 35.4333C46.2756 43.7936 44.9179 44.9719 38.1576 44.9719H35.2441V45Z'
                fill='#000D10'></path>
              <path
                d='M65.4251 24.6882C65.8211 29.2892 68.9608 31.5336 72.2702 31.5336C74.4483 31.5336 76.5414 30.7761 77.9557 28.4476H85.1403C83.6695 32.4594 79.7377 36.8921 72.3268 36.8921C63.6148 36.8921 58.5233 30.4395 58.5233 22.6963C58.5233 14.7007 64.1239 8.75308 72.1288 8.75308C80.5014 8.75308 85.6777 15.2057 85.4232 24.6882H65.4251ZM65.5382 19.947H78.38C78.2386 15.4021 75.014 13.803 72.0722 13.803C69.4699 13.803 66.0756 15.4021 65.5382 19.947Z'
                fill='#000D10'></path>
              <path
                d='M103.696 15.9913C102.677 15.851 101.829 15.851 100.811 15.851C97.388 15.851 95.1252 17.1135 95.1252 22.1633V36.2749H88.1669V9.34227H95.012V14.0555C96.5677 10.717 99.0003 9.39838 102.168 9.39838C102.621 9.39838 103.215 9.45449 103.667 9.5106V15.9913H103.696Z'
                fill='#000D10'></path>
              <path
                d='M111.022 9.87531C108.278 9.87531 106.043 7.65898 106.043 4.93766C106.043 2.21633 108.278 0 111.022 0C113.765 0 116 2.21633 116 4.93766C116 7.65898 113.765 9.87531 111.022 9.87531ZM111.022 0.841646C108.731 0.841646 106.892 2.69327 106.892 4.93766C106.892 7.2101 108.759 9.03367 111.022 9.03367C113.313 9.03367 115.152 7.18204 115.152 4.93766C115.152 2.66521 113.285 0.841646 111.022 0.841646Z'
                fill='#000D10'></path>
              <path
                d='M111.163 5.38653H110.937H110.173V7.21009H109.24V2.58104H110.767C112.295 2.58104 112.889 3.00186 112.889 3.98378C112.889 4.51682 112.634 4.9657 112.04 5.19014L113.087 7.18204H112.068L111.163 5.38653ZM110.173 3.28241V4.68515H110.937C111.672 4.68515 111.955 4.46072 111.955 3.98378C111.955 3.45074 111.503 3.28241 110.88 3.28241H110.173Z'
                fill='#000D10'></path>
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
      </div>
      <div className='grid md:grid-cols-3 m-10'>
        <div className=' col-span-1 col-start-3'>
          <h2 className=' text-5xl font-bold'>About Hyer®</h2>
          <p className='text-lg'>
            Technology, extensive industry knowledge and design-thinking
            approach. Few reasons why Hyer® is disrupting the private jet
            charter business. We deliver experiences that are smart,
            transparent, customisable and most of all, unforgettable.{' '}
          </p>
        </div>
      </div>
      <div className='m-10 '>
        <img src={shutterStock} className='rounded-br-4xl' alt='' />
      </div>
      <div className='grid md:grid-cols-3 mx-10 pb-10 border-b-2'>
        <div>
          <h2>Founding Team</h2>
          <p>
            Hyer® Aviation was founded by Max van Doorne and Helder Reis,
            themselves aircraft pilots with decades of experience in the
            aviation industry. They recognized that the private charter market
            is still too complex. Some services, which are usually taken for
            granted in this sector, are not delivered at the same level as they
            should be. They built Hyer® to tackle this problem.{' '}
          </p>
        </div>
        <div className='flex flex-col mx-5'>
          <img src={max} className=' rounded-br-4xl' alt='' />
          <h3 className=' text-xl font-bold'>Max van Doorne</h3>
          <h4 className=' text-xl'>Co-Founder</h4>
          <p>
            Max is a fully certified commercial pilot with flight experience
            gained in Europe, the USA, and the Caribbean. He also has
            substantial expertise in selling private aircraft in the European
            market.
          </p>
        </div>
        <div className='flex flex-col mx-5'>
          <img src={held} className=' rounded-br-4xl' alt='' />
          <h3 className=' text-xl font-bold'>Helder Reis</h3>
          <h4 className=' text-xl'>Co-Founder</h4>
          <p>
            Throughout his career, Helder has led and shaped customer service
            delivery for VIP clients and has improved long-haul flight
            operations and corporate efficiency at leading airlines across the
            globe.
          </p>
        </div>
      </div>
      <div className=' grid md:grid-cols-3 grid-cols-1 m-16 gap-16 border-b'>
        <h2 className=' text-6xl font-bold'>Why Hyer®</h2>
        <div className=' md:flex flex-col items-start'>
          <div className='p-5 text-5xl border-dashed rounded-br-3xl  border-main  border-opacity-60 border inline-block'>
            <CiUnlock />
          </div>
          <h3 className=' text-2xl font-bold my-5'>Reward Membership</h3>
          <p>
            Enjoy the benefits of a jet card or aircraft fractional ownership
            programs, without the heavy financial commitments.
          </p>
        </div>
        <div className=' md:flex flex-col items-start'>
          <div className='p-5 text-5xl border-dashed rounded-br-3xl  border-main  border-opacity-60 border inline-block'>
            <GoPeople />
          </div>
          <h3 className=' text-2xl font-bold my-5'>Aircraft Ownership</h3>
          <p>
            Experience seamless and cost-effective aircraft ownership with Hyer
            Aviation, where our tailored solutions for shared ownership redefine
            convenience and elevate your flying experience.
          </p>
        </div>
        <div className=' md:col-start-2  md:flex flex-col items-start'>
          <div className='p-5 text-5xl border-dashed rounded-br-3xl  border-main  border-opacity-60 border inline-block'>
            <TbPlaneInflight />
          </div>
          <h3 className=' text-2xl font-bold my-5'>Operational Independence</h3>
          <p>
            Our asset-light model alow us to take leverage of more than 5.000
            aircraft and, through innovative optimization, deliver smart and
            cost-competitive flights.
          </p>
        </div>
        <div className='hidden md:flex flex-col items-start'>
          <div className='p-5 text-5xl border-dashed rounded-br-3xl  border-main  border-opacity-60 border inline-block'>
            <CgEditBlackPoint />
          </div>
          <h3 className=' text-2xl font-bold my-5'>Personalization</h3>
          <p>
            We do not believe in “on-seize fits- all”. We take the time to
            understand why you need to fly so you get a solution suitable to
            your needs and budget.
          </p>
        </div>
        <div className='hidden md:col-start-2 md:flex flex-col items-start'>
          <div className='p-5 text-5xl border-dashed rounded-br-3xl  border-main  border-opacity-60 border inline-block'>
            <PiLeaf />
          </div>
          <h3 className=' text-2xl font-bold my-5'>CO2 Neutral Flights</h3>
          <p>
            We play our part to ensure a more sustainable future. Via Hyer® CO2
            offset program, clients can offset the entire emission of their
            flights.
          </p>
        </div>
      </div>
      <div className='grid md:grid-cols-5 grid-cols-1 m-10 border-b gap-10'>
        <h2 className=' text-5xl font-bold col-span-2'>
          What's our clients say
        </h2>
        <div className=' md:col-span-3 md:col-start-3 '>
          <Carousel>
            <div className='flex flex-col items-start'>
              <p className='m-5 text-main text-opacity-90 text-left'>
                I have been flying with Hyer as an ELEVATE member for a while
                now, after being an unsatisfied Netjets customer. The Hyer team
                always amazes me with their service. They really go the extra
                mile. I would like to recommend Hyer to any private flier.
              </p>
              <h3 className=' text-lg font-bold m-5'>~ Nicholas</h3>
            </div>
            <div className='flex flex-col items-start'>
              <p className='m-5 text-main text-opacity-90 text-left'>
                We had an exceptional wedding in Capri. Hyer helped us with
                their charter and got our 50 guests safely to Napoli Airport.
                The experience and booking process was top-notch and I would
                like to thank Jonathan and the whole Hyer team for that.
              </p>
              <h3 className=' text-lg font-bold m-5'>~ Mark</h3>
            </div>
            <div className='flex flex-col items-start'>
              <p className='m-5 text-main text-opacity-90 text-left'>
                During my private flights, my Flight Manager Valerie was there
                to assist me with any of my questions or concerns. Since then, I
                have been flying Hyer on a frequent basis. I cannot wait for my
                upcoming trip to Oslo in November.
              </p>
              <h3 className=' text-lg font-bold m-5'>~ Jesper</h3>
            </div>
          </Carousel>
        </div>
      </div>
      <div className='grid md:grid-cols-4 grid-rows-3 m-10 mb-0 border-b gap-y-10'>
        <h2 className='text-5xl font-bold h-min'>Our timeline</h2>
        <div className=' md:row-start-2'>
          <h3 className=' text-2xl font-bold'>2019</h3>
          <p>
            The company expanded its services to Germany, Austria and
            Switzerland. Clients outside the initial closed group were welcomed
            to book with ENVOY. The company introduced the innovative Smart
            Quotes, simplifying the process of choosing an aircraft. Shortly
            after, the client base expanded to the United Kingdom and Spain.
          </p>
        </div>
        <FaArrowDown className=' text-6xl opacity-30 md:block hidden m-auto md:row-start-2' />
        <div className=' md:col-start-3 md:row-start-2'>
          <h3 className=' text-2xl font-bold'>2021</h3>
          <p>
            ENVOY rebranded to Hyer® Aviation. A new brand, website and a
            tech-driven strategy were launched, followed by a bold service
            portfolio. An innovative proprietary platform and an ambitious
            membership program were released to support better the rapid demand
            for Hyer® services and exclusive flights.
          </p>
        </div>
        <FaArrowDown className='text-6xl opacity-30 md:block hidden m-auto md:row-start-2' />
        <FaArrowUp className='text-6xl opacity-30 md:block hidden m-auto md:row-start-3' />
        <div className=' md:row-start-3 md:col-start-2'>
          <h3 className=' text-2xl font-bold'>2020</h3>
          <p>
            First-of-its-kind Shared Flights were introduced. Repatriation
            flights were organised in Asia, Africa and Europe with both small
            and large aircraft. Special solutions for groups and a carbon offset
            program for private aviation in Benelux were launched.
          </p>
        </div>
        <FaArrowUp className='text-6xl opacity-30 md:block hidden m-auto md:row-start-3' />
        <div className=' md:row-start-3 md:col-start-4'>
          <h3 className=' text-2xl font-bold'>2022</h3>
          <p>
            Hyer developed a client portfolio and launched an exclusive mobile
            application for its loyal clients. A significant increase in demand,
            primarily during summer, has led to additional sales teams and
            flight support.
          </p>
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-x-10 mx-10 md:h-screen'>
        <p className=' text-xl my-10 md:my-0 md:text-6xl font-bold'>
          We believe that in a world that turns you into a number, we are able
          to use technology to deliver to you an unparalleled personalised
          service.
        </p>
        <img src={onPlane} className=' object-cover object-left h-full' alt='' />
      </div>
    </div>
  )
}

export default Aboutus
