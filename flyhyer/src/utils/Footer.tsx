import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from 'react-icons/ai'
import logo from '../assets/logo.svg'
const Footer = () => {
  return (
    <div className=' bg-main text-second'>
      <div>
        <div className=' w-52 p-8'>
          <img src={logo} alt="" />
        </div>
        <div className='flex flex-col md:flex-row md: flex-wrap ps-10 pe-10'>
          <div className=' md:w-1/3'>
            <h4 className=' text-lg font-bold'>Follow us</h4>
            <ul className='flex text-3xl m-2 gap-1'>
              <li>
                <a href='' className=''>
                  <AiOutlineInstagram />
                </a>
              </li>
              <li>
                <a href='' className=''>
                  <AiOutlineFacebook />
                </a>
              </li>
              <li>
                <a href='' className=''>
                  <AiOutlineLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className=' md:w-2/3'>
            {' '}
            <div className=' text-second p-5 gap-5 grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-4/5'>
              <div>
                <h4 className=' text-2xl font-semibold'>On Demand</h4>
                <ul>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Private charter
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className=' text-2xl font-semibold'>Shared flights</h4>
                <ul>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Avalible flights
                    </button>
                  </li>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Propose a flight
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className=' text-2xl font-semibold'>Memberships</h4>
                <ul>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Elevate
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className=' text-2xl font-semibold'>My account</h4>
                <ul>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Register
                    </button>
                  </li>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Login
                    </button>
                  </li>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Dashboard
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className=' text-2xl font-semibold'>Company</h4>
                <ul>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      About us
                    </button>
                  </li>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Solutions
                    </button>
                  </li>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      News
                    </button>
                  </li>
                  <li>
                    {' '}
                    <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className='grid md:grid-cols-3 grid-cols-1'>
              <h4 className=' text-xl font-semibold col-span-1'>© Hyer Aviation 2023</h4>
              <ul className='flex justify-around md:flex-row flex-col  col-span-2'>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                    Cookie policy
                  </button>
                </li>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                    Terms & Conditions
                  </button>
                </li>
                <li>
                  {' '}
                  <button className=' border-b-second border-b transition-all duration-300 hover:border-b-main text-lg opacity-50 hover:opacity-100'>
                    Privacy Policy
                  </button>
                </li>
              </ul>
              <p className='m-3 opacity-50 pe-14'>
                Hyer® HQ - Eindhoven, The Netherlands Registered on the Dutch
                Chamber of Commerce: 80195520
              </p>
              <p className='opacity-50 m-3 col-span-2'>
                Hyer® is a charter broker with a global digital platform and is
                not a direct air carrier. All flights advertised to which Hyer®
                has access are owned and operated by a properly licensed third
                party air carrier, compliant with rules outlined by the European
                Union Aviation Safety Agency (or other appropriate authority
                under foreign law). Hyer® does not carry additional liability
                insurance. Passengers are covered by the aircraft operator
                insurance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
