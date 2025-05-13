import { Link, Element } from "react-scroll"
import phoneIcon from "/assets/icons8-iphone-14-100.png";
import phoneHero from "/assets/chat-image.png";
import bestPhones from "/assets/best-phones.webp";
import phoneSwap from "/assets/phone_swap.png";
import iphone16 from "/assets/iphone16.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import explosions from "/assets/Animation -1744530955923.gif"
import accessories from "/assets/Mobile_Phone_Accessories-in-China.jpg"
import installment from "/assets/phone-installment.jpeg"
import phoneInsurance from "/assets/Mobile-Insurance.jpg"
import customerSupport from "/assets/icons8-online-support-100.png"
import { MdLocationCity } from "react-icons/md";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import cellPhoneRepair from "/assets/Cell_phone_repair.jpeg"
import vectorImage from "/assets/4955146.png"
import whatsapp from "/assets/whatsapp.png"
import facebook from "/assets/facebook.png"
import instagram from "/assets/instagram.svg"
import iwatch from "/assets/iwatch.webp"
import ipods from "/assets/ipods.png"
import ipads from "/assets/ipads.png"
import macbooks from "/assets/macbooks.png"
import twitter from "/assets/twitter.png"
import { HiOutlineMenuAlt1 } from "react-icons/hi";

function App() {
  return (
    <article className="relative">
      <header className="flex justify-between lg:flex-row flex-col px-5 py-3 items-center bg-black text-white">
        <div className="flex items-center lg:p-0 p-2">
          <img src={phoneIcon} alt="" width={50} height={50} />
          <h1 className="text-2xl">IPhone<span className="text-blue-500">H</span>ub </h1>
        </div>
        <div className="z-99 block lg:hidden p-2 fixed right-5  top-7 bg-black rounded" onClick={function (e) {
          e.currentTarget.nextElementSibling.classList.toggle('-left-full');
        }}>
          <HiOutlineMenuAlt1 color="" className="text-blue-500 text-xl" />
        </div>
        <menu className="lg:text-lg flex lg:flex-row flex-col lg:static h-full -left-full bg-black lg:w-fit w-full items-start fixed top-0 p-8 transition  duration-1000">
          <Link to="hero-section" smooth={true} duration={500}><span className="lg:mx-5 lg:inline block ml-auto cursor-pointer p-2">Home</span></Link>
          <Link to="service-section" smooth={true} duration={500}><span className="lg:mx-5 ml-auto lg:inline block cursor-pointer p-2">Services</span></Link>
          <Link to="about-section" smooth={true} duration={500}><span className="lg:mx-5 ml-auto lg:inline block cursor-pointer p-2">About</span></Link>
          <Link to="phones" smooth={true} duration={500}> <span className="lg:mx-5 ml-auto lg:inline block cursor-pointer p-2">Phones</span></Link>
          <Link to="contact" smooth={true} duration={500}><span className="lg:mx-5 ml-auto lg:inline block cursor-pointer p-2">Contact</span></Link>
        </menu>
      </header>

      <main className="">
        <Element name="hero-section">
          <section className="h-[88vh] hero-section flex">
            <aside className="lg:w-[55%] m-5 pt-12 lg:ml-12">
              <h1 className=" lg:text-6xl text-3xl font-extrabold text-white">
                Get your smartphones phones & Gadgets at prices that meets your <span className="text-blue-500 text-shadow-white text-shadow text-shadow-2xs">budget!</span>
              </h1>
              <Link to="service-section" smooth={true} duration={500}>
                <button className="bg-blue-500 py-2 px-5 rounded-md w-fit mt-9 flex items-center text-white cursor-pointer hover:scale-110 transition-all">explore<FaArrowRightLong style={{ marginLeft: '10px', color: 'white' }} /></button>
              </Link>
            </aside>
            <aside className="lg:block hidden ">
              <img src={phoneHero} alt="" className="w-full  h-full block" />
            </aside>
            {/* <Explosions /> */}
          </section>
        </Element>

        <Element name="service-section">
          <section className="lg:p-10 p-5">
            <div className="flex flex-col w-fit mx-auto">
              <h1 className="font-bold font-dancing-script lg:text-4xl text-2xl">
                Services we offer
              </h1>
              <span className="p-[1px] bg-blue-500"></span>
            </div>
            <p className="w-fit mx-auto text-center p-2 lg:p-7 lg:text-base text-sm">At iPhoneHub, we provide more than just smartphones. Our services are designed to give you flexibility, reliability, and value every step of the way.</p>

            <section className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-3">

              <div className="border-[#ccc] box-shadow border-1 p-5 rounded-md hover:scale-105 cursor-pointer">
                <div className="flex items-center">
                  <p className="rounded-full w-[50px] h-[30px] bg-blue-300 text-center font-bold text-white mr-2">1</p>
                  <h1>Sales of phone</h1>
                </div>

                <div className="text-sm mt-3  flex flex-col-reverse lg:flex-row">
                  <p>Looking to upgrade? Swap your old device for a newer model with ease. Our trade-in service gives you great value and a seamless experience.</p>
                  <img src={iphone16} alt="" className="block w-[150px] h-[100px] rounded lg:mx-0 mx-auto" />
                </div>
              </div>

              <div className="border-[#ccc] box-shadow border-1 p-5 rounded-md hover:scale-105 cursor-pointer">
                <div className="flex items-center">
                  <p className="rounded-full w-[50px] h-[30px] bg-blue-300 text-center font-bold text-white mr-2">2</p>
                  <h1>Trade-In / Swapping Services</h1>
                </div>

                <div className="text-sm mt-3 flex flex-col-reverse lg:flex-row">
                  <p>Browse our collection of high-quality accessories — cases, screen protectors, chargers, earbuds, and more — curated to complement your device and lifestyle.</p>
                  <img src={phoneSwap} alt="" className="block w-[150px] h-[100px] rounded lg:mx-0 mx-auto" />
                </div>
              </div>

              <div className="border-[#ccc] box-shadow border-1 p-5 rounded-md hover:scale-105 cursor-pointer">
                <div className="flex items-center">
                  <p className="rounded-full w-[50px] h-[30px] bg-blue-300 text-center font-bold text-white mr-2">3</p>
                  <h1>Accessories Marketplace</h1>
                </div>

                <div className="text-sm mt-3 flex flex-col-reverse lg:flex-row">
                  <p>Lorem ipsum dolor, sit amet consectetur elit. Ex, accusantium soluta corrupti modi quia nihil neque excepturi recusandae inventore. Nisi, suscipit.</p>
                  <img src={accessories} alt="" className="block w-[150px] h-[100px] rounded lg:mx-0 mx-auto" />
                </div>
              </div>

              <div className="border-[#ccc] box-shadow border-1 p-5 rounded-md hover:scale-105 cursor-pointer">
                <div className="flex items-center">
                  <p className="rounded-full w-[50px] h-[30px] bg-blue-300 text-center font-bold text-white mr-2">4</p>
                  <h1>Repair & Maintenance</h1>
                </div>

                <div className="text-sm mt-3 p-2 flex flex-col-reverse lg:flex-row">
                  <p>Cracked screen? Charging issues? We offer fast, affordable repair services to get your phone back in perfect working order.</p>
                  <img src={cellPhoneRepair} alt="" className="block w-[150px] h-[100px] rounded lg:mx-0 mx-auto" />
                </div>
              </div>

              <div className="border-[#ccc] box-shadow border-1 p-5 rounded-md hover:scale-105 cursor-pointer">
                <div className="flex items-center">
                  <p className="rounded-full w-[50px] h-[30px] bg-blue-300 text-center font-bold text-white mr-2">5</p>
                  <h1>Phone Financing / Installment Plans</h1>
                </div>

                <div className="text-sm mt-3 flex flex-col-reverse lg:flex-row">
                  <p>No need to break the bank. With flexible payment options and installment plans, owning your dream phone is easier than ever.

                  </p>
                  <img src={installment} alt="" className="block w-[150px] h-[100px] rounded lg:mx-0 mx-auto" />
                </div>
              </div>

              <div className="border-[#ccc] box-shadow border-1 p-5 rounded-md hover:scale-105 cursor-pointer">
                <div className="flex items-center">
                  <p className="rounded-full w-[50px] h-[30px] bg-blue-300 text-center font-bold text-white mr-2">6</p>
                  <h1>Phone Insurance / Warranty</h1>
                </div>

                <div className="text-sm mt-3 flex flex-col-reverse lg:flex-row">
                  <p>

                    Stay protected with warranty coverage and insurance options that guard against accidental damage, theft, and more — because life happens.
                  </p>
                  <img src={phoneInsurance} alt="" className="block w-[150px] h-[100px] rounded lg:mx-0 mx-auto" />
                </div>
              </div>

            </section>
            <div className="hidden lg:block border-[#ccc] box-shadow border-1 p-5 rounded-md hover:scale-105 mx-auto mt-5 w-[600px]">
              <div className="flex items-center">
                <p className="rounded-full w-[50px] h-[30px] bg-blue-300 text-center font-bold text-white mr-2">7</p>
                <h1>Customer Support Tools</h1>
              </div>

              <div className="text-sm flex mt-3">
                <p>Need help? We offer reliable support through live chat, email, and self-service tools to ensure your questions are answered and your needs are met.</p>
                <img src={customerSupport} alt="" className="block w-[150px] h-[100px] rounded lg:mx-0 mx-auto" />
              </div>
            </div>
          </section>
        </Element>

        <Element name="about-section">
          <section className="flex px-5 lg:px-10 lg:py-0 py-7 bg-blue-500 text-white">
            <aside className="lg:w-1/2 w-full">
              <h1 className="w-fit font-bold font-segoe-ui font-dancing-script my-5 lg:text-4xl text-2xl">
                About us
                <span className="p-[1px] w-full bg-white block"></span>
              </h1>
              <p className="text-justify text-wrap lg:text-base pr-3 pt-5 text-sm ">Welcome to iPhoneHub — your trusted destination for everything mobile. From the latest iPhones to reliable Android alternatives, we help you stay connected with devices that fit your lifestyle, your needs, and your budget.

                At iPhoneHub, we do more than just sell phones. We offer smart solutions like phone swapping, comparisons, warranty coverage, and repair services — all designed to give you peace of mind and more value for your money. Our mission is simple: deliver premium devices, honest service, and real support — all in one place. Whether you’re upgrading, trading in, or exploring options, our team is here to guide you every step of the way.

                <b> iPhoneHub is a subsidiary of AOY Electronics, part of the AOY Group, a global company founded in 2019 and headquartered in Helsinki, Finland . We're proud to be part of a forward-thinking organization that shares our commitment to innovation, customer satisfaction, and community building. </b>

                Let us know how we can help you find the perfect mobile solution!
              </p>
              <a href="mailto:iphonehubnga@gmail.com" className="block text-white mt-2 p-2 rounded bg-black lg:text-base w-fit text-sm">Send a Direct Message</a>
            </aside>
            <aside className="w-1/2 p-10 lg:block hidden">
              <img src={bestPhones} alt="" className="rounded-xl" />
            </aside>
          </section>
        </Element>

        <Element name='phones'>
          <section className="lg:p-10 p-5">
            <h1 className="lg:text-2xl mx-auto w-fit mb-4 p-5">We offer a wide range of phones from various manufacturers. </h1>

            <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-7 gap-4">
              <div className="flex flex-col justify-end items-center hero-section  h-76 text-white text-xl rounded-tr-2xl rounded-tl-2xl" style={{
                backgroundImage: 'url(/assets/apple.jpg)'
              }}>
                <p className="p-2 bg-gradient-semi-dark w-full text-center">Iphones</p>
              </div>
              <div className="flex flex-col justify-end items-center hero-section  h-76 text-white text-xl rounded-tr-2xl rounded-tl-2xl" style={{
                backgroundImage: 'url(/assets/samsung_series.jpeg)'
              }}>
                <p className="p-2 bg-gradient-semi-dark w-full text-center">Samsung series</p>
              </div>
              <div className="flex flex-col justify-end items-center hero-section  h-76 text-white text-xl rounded-tr-2xl rounded-tl-2xl" style={{
                backgroundImage: 'url(/assets/googlephones.jpeg)'
              }}>
                <p className="p-2 bg-gradient-semi-dark w-full text-center">Google pixel</p>
              </div>
              <div className="flex flex-col justify-end items-center hero-section  h-76 text-white text-xl rounded-tr-2xl rounded-tl-2xl" style={{
                backgroundImage: 'url(/assets/redmis.jpeg)'
              }}>
                <p className="p-2 bg-gradient-semi-dark w-full text-center">Redmi series</p>
              </div>
              <div className="flex flex-col justify-end items-center hero-section  h-76 text-white text-xl rounded-tr-2xl rounded-tl-2xl" style={{
                backgroundImage: 'url(/assets/iwatch.webp)'
              }}>
                <p className="p-2 bg-gradient-semi-dark w-full text-center">Apple Smartwatch</p>
              </div>
              <div className="flex flex-col justify-end items-center hero-section  h-76 text-white text-xl rounded-tr-2xl rounded-tl-2xl" style={{
                backgroundImage: 'url(/assets/ipods.png)'
              }}>
                <p className="p-2 bg-gradient-semi-dark w-full text-center">Apple earpods</p>
              </div>
              <div className="flex flex-col justify-end items-center hero-section  h-76 text-white text-xl rounded-tr-2xl rounded-tl-2xl" style={{
                backgroundImage: 'url(/assets/ipads.png)'
              }}>
                <p className="p-2 bg-gradient-semi-dark w-full text-center">Ipads</p>
              </div>
              <div className="flex flex-col justify-end items-center hero-section  h-76  text-white text-xl rounded-tr-2xl rounded-tl-2xl" style={{
                backgroundImage: 'url(/assets/macbooks.png)'
              }}>
                <p className="p-2 bg-gradient-semi-dark w-full text-center">Macbooks</p>
              </div>
            </ div>

          </section>
        </Element>

        <Element name='contact'>
          <section className="flex lg:p-10 p-5 justify-between bg-blue-100">
            <div>
              <h1 className="text-xl lg:text-3xl font-bold text-blue-700 lg:m-7 m-2">We're just a click away!</h1>
              <section className="lg:ml-24 lg:w-fit">

                <div className="flex lg:items-center my-2 lg:my-0.5">
                  <img src={instagram} alt="" className="block lg:h-[75px] lg:w-[75px] h-[50px] w-[50px]" />
                  <div>
                    <a href=" https://www.instagram.com/iphone.hub.ng?igsh=ajk4YW0wd3FrdzF4" target="_blank">
                      <p className="lg:text-lg font-bold text-pink-600">Instagram handle</p>
                      <p className="text-sm opacity-75">iphone.hub.ng</p>
                    </a>
                  </div>
                </div>
                <div className="flex lg:items-center my-2 lg:my-0.5">
                  <img src={facebook} alt="" className="block lg:h-[75px] lg:w-[75px] h-[50px] w-[50px]" />
                  <div>
                    <a href=" https://www.facebook.com/share/18hhvmVyhv/?mibextid=wwXIfr" target="_blank">
                      <p className="text-lg font-bold text-blue-600">Facebook handle</p>
                      <p className="text-sm opacity-75">Iphone-hub-NG</p>
                    </a>
                  </div>
                </div>
                <div className="flex lg:items-center my-2 lg:my-0.5">
                  <img src={whatsapp} alt="" className="block lg:h-[75px] lg:w-[75px] h-[50px] w-[50px]" />
                  <div>
                    <a href="https://api.whatsapp.com/send/?phone=%2B2347068395113&text&type=phone_number&app_absent=0‬" target="_blank">
                      <p className="lg:text-lg font-bold text-green-600">Whatsapp handle</p>
                      <p className="text-sm opacity-75">+234 7068395113‬</p>
                    </a>
                  </div>
                </div>
                <div className="flex lg:items-center my-2 lg:my-0.5">
                  <img src={twitter} alt="" className="block lg:h-[75px] lg:w-[75px] h-[50px] w-[50px]" />
                  <div>
                    <a href="https://twitter.com/iphonehubng" target="_blank">
                      <p className="lg:text-lg font-bold text-black-600">Twitter handle</p>
                      <p className="text-sm opacity-75">
                        @iphonehubng
                      </p>
                    </a>
                  </div>
                </div>

              </section>
            </div>
            <div className='bg-blue-500 lg:block hidden'>
              <img src={vectorImage} alt="" className="block h-[500px] w-[500px]" />
            </div>
          </section>
        </Element>
      </main>

      <footer className="bg-black text-white lg:px-10 px-5 pt-10">
        <div className="flex justify-around lg:flex-row flex-col">

          <div>
            <h1 className="text-xl font-bold">Get in touch</h1>
            <p className="p-1 lg:mt-4 flex lg:flex-row flex-col lg:items-center lg:mb-0 mb-2">
              <MdLocationCity className="lg:text-2xl mr-3 text-4xl" />
               Amule Bus-Stop, Beside PetroCAM, Opposite Fagbems Petrol Station, iPaja, Lagos.</p>
            <p className="p-1 lg:mt-4 flex lg:flex-row items-center lg:mb-0 mb-2">
              <MdOutlineMarkEmailUnread className="lg:text-2xl mr-3 text-4xl" />
               <a href="mailto:iphonehubnga@gmail.com"> iphonehubnga@gmail.com </a>, <a href="mailto:aoyelectronics@gmail.com" className="ml-2"> aoyelectronics@gmail.com</a></p>
            <div className="lg:mt-4 flex lg:flex-row flex-col lg:items-center lg:mb-0 mb-2">
              <GiRotaryPhone className="lg:text-2xl mr-3 text-4xl" />
              <span className="p-1 hover:underline underline-offset-2">‪+234 8169198397‬</span>
              <span className="p-1 hover:underline underline-offset-2">+234 7068395113‬</span>
            </div>
          </div>
          <div className="lg:mt-0  mt-3">
            <h1 className="text-xl font-bold">Socials</h1>
            <a className="block p-1 hover:text-blue-500 mt-4" href=" https://www.facebook.com/share/18hhvmVyhv/?mibextid=wwXIfr" target="_blank">Facebook</a>
            <a className="block p-1 hover:text-blue-500" href=" https://www.instagram.com/iphone.hub.ng?igsh=ajk4YW0wd3FrdzF4" target="_blank">Instagram</a>
            <a className="block p-1 hover:text-blue-500" href="https://x.com/iphonehubng" target="_blank">Twitter</a>
            <a className="block p-1 hover:text-blue-500" href="https://api.whatsapp.com/send/?phone=%2B2347068395113&text&type=phone_number&app_absent=0" target="_blank">Whatsapp channel</a>
          </div>
          <div className="mt-4">
            <Link to="hero-section" smooth={true} duration={500}><p className="cursor-pointer p-1 hover:text-blue-500">Home</p></Link>
            <Link to="about-section" smooth={true} duration={500}><p className="cursor-pointer p-1 hover:text-blue-500">About</p></Link>
            <Link to="service-section" smooth={true} duration={500}><p className="cursor-pointer p-1 hover:text-blue-500">Services</p></Link>
            <Link to="gallery-section"> <p className="cursor-pointer p-1 hover:text-blue-500">Gallery</p></Link>
            <Link to="contact"><p className="cursor-pointer p-1 hover:text-blue-500">Contact</p></Link>
          </div>
          <div className="mt-4">
            <a className="p-1 block hover:text-blue-500" href="#">Privacy policy</a>
            <a className="p-1 block hover:text-blue-500" href="#"> Terms of service</a>
          </div>
        </div>
        <small className="mx-auto block w-fit pt-5 pb-2">&copy; IphoneHubNG 2025</small>
      </footer>
    </article>
  )
}

function Explosions() {
  return <div className="z-10">
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
    <img src={explosions} style={{
      position: "absolute",
      top: `${Math.ceil(Math.random() * 100)}%`,
      left: `${Math.ceil(Math.random() * 100)}%`,
      right: `${Math.ceil(Math.random() * 100)}%`,
      bottom: `${Math.ceil(Math.random() * 100)}%`
    }} />
  </div>
}
export default App;