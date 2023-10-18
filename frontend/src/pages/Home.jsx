import React from "react";
import doctor from "../assets/images/doctor.jpg";
import doctor2 from "../assets/images/doctor2.jpg";
import doctor3 from "../assets/images/doctor3.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      {/* =====hero_section=== */}
      <section className="hero_section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px]  items-center justify-between">
            {/* ====herocontent=== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor md:text-[70px] md:leading-[70px] ">
                  We help patients live healthy
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <button className="btn">Request for booking </button>
              </div>
              {/* =====herocounter===== */}
              <div className="flex flex-col  lg:flex-row gap-[44px] mt-[30px]">
                <div>
                  <h2 className="text-[40px] font-bold">30+</h2>
                  <span className="block w-[100px] h-2 bg-yellow-400 rounded-full mt-[-14px]"></span>
                  <p>Years of experience</p>
                </div>

                <div>
                  <h2 className="text-[40px] font-bold">15+</h2>
                  <span className="block w-[100px] h-2 bg-green-700 rounded-full mt-[-14px]"></span>
                  <p>Clinic location</p>
                </div>

                <div>
                  <h2 className="text-[40px] font-bold">100%</h2>
                  <span className="block w-[100px] h-2 bg-purple-600 rounded-full mt-[-14px]"></span>
                  <p>Patient submission</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[30px] justify-end">
              <div className="flex items-center">
                <img className="w-full rounded-md" src={doctor2} alt="" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px] rounded-md"
                  src={doctor3}
                  alt=""
                />
                <img className="w-full rounded-md" src={doctor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container flex flex-col items-center justify-center">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className="text-center heading">
              Providing the best Medical Services{" "}
            </h2>
            <p className="text-center text_para my-[45px]">
              World class care for everyone.our health system offfers unmatched
              expertise system care{" "}
            </p>
          </div>

          <main className="flex flex-wrap items-center justify-evenly">
            <div className="w-full px-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <img src={icon01} alt="" />
              <h2 className="leading-9 text-headingColor font-[700] text-center text-[26px]">
                Find a doctor
              </h2>
              <p>
                World-class care for everyone. Our health system offers
                unmatched expertise in system care.
              </p>
            </div>

            <div className="w-full px-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <img src={icon03} alt="" />
              <h2 className="leading-9 text-headingColor font-[700] text-center text-[26px]">
                Book an appointment
              </h2>
              <p>
                World-class care for everyone. Our health system offers
                unmatched expertise in system care.
              </p>
            </div>

            <div className="w-full px-2 md:w-1/2 lg:w-1/3 xl:w-1/4">
              <img src={icon02} alt="" />
              <h2 className="leading-9 text-headingColor font-[700] text-center text-[26px]">
                Find a location
              </h2>
              <p>
                World-class care for everyone. Our health system offers
                unmatched expertise in system care.
              </p>
            </div>
          </main>
        </div>
      </section>
      <section>
        <div className=" container flex flex-col  lg:flex-row items-center justify-between gap-[40px]">
          <div className="mb-4 lg:mb-0">
            <img src={doctor} className="rounded-md" alt="" />
          </div>
          <div className="flex flex-col gap-1rem items-center justify-center  w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="text-headingColor heading">
              Proud to be one of the greatest nations
            </h2>
            <p className="text-center text_para">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularized in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum
            </p>
            <Link to="/services">
              <button className="btn">Learn more</button>
            </Link>
          </div>
        </div>
      </section>
      
      
    </>
  );
};

export default Home;
