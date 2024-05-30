/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import web from "../../assets/web.png";
import app from "../../assets/app.png";
import digtalMarketing from "../../assets/digital-marketing.png";
import graphicDesign from "../../assets/graphic-design.png";
import seo from "../../assets/seo.png";
import branding from "../../assets/branding.png";

const services = [
    {
        icon: web,
        title: "Web development",
        description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
        pathname: "/services/web-development"
    },
    {
        icon: app,
        title: "App development",
        description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
        pathname: "/services/app-development"
    },
    {
        icon: digtalMarketing,
        title: "Digital Marketing",
        description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
        pathname: "/services/digital-marketing"
    },
    {
        icon: graphicDesign,
        title: "Graphic Design",
        description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
        pathname: "/services/graphic-design"
    },
    {
        icon: seo,
        title: "SEO Optomization",
        description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
        pathname: "/services/seo"
    },
    {
        icon: branding,
        title: "Logo & Branding Design",
        description: "lorem ipsum... Crafting Customized Solutions for Your Distinct Requirements, Spark Net's Services are Tailored to Elevate Your Business. Whether it's Crafting Cutting-Edge Websites, Developing User-Friendly Mobile Apps, or Designing Engaging Graphics, We're Dedicated to Excellence. Explore Our Wide Array of Offerings and Unleash the Power of Technology for Your Organization.",
        pathname: "/services/logo-and-branding"
    }
];

const Services = () => {
    return (
        <div style={{ padding: "50px 30px", background: '#13072E' }}>
            <h1 className='font-semibold text-xl text-center text-[#8B3EE2]'>
                Services
            </h1>

            <h2 className='text-white text-center text-2xl' >
                Experience Advanced Solutions From Concept To Deployment Leveraging <br />Full-Stack Expertise
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px', margin: "50px 0" }}>

                {
                    services.map((service) => (
                        <div key={service}>
                            <Link href={service.pathname}>
                                <div className='bg-[#8B3EE2]  bg-opacity-20 text-center p-5 text-white rounded-lg border border-[#8B3EE2] border-opacity-50'>
                                    <img src={service.icon} alt="" />
                                    <h2 className='mb-3 font-semibold text-2xl'>{service.title}</h2>
                                    <p className='text-[14px]'>{service.description.slice(0, 150)}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Services;