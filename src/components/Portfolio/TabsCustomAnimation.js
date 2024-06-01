"use client";
import image from "../../assets/no-image.png";
import { useState } from 'react';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import Image from "next/image";

const data = [
    {
        label: "Web Development",
        value: "web",
        title: `This is a title`,
        subtitle: "This is a subtitle"
    },
    {
        label: "Web Development",
        value: "web",
        title: `This is a title`,
        subtitle: "This is a subtitle"
    },
    {
        label: "Web Development",
        value: "web",
        title: `This is a title`,
        subtitle: "Subtitle for another web development card."
    },
    {
        label: "App Development",
        value: "app",
        title: `This is a title`,
        subtitle: "This is a subtitle"
    },
    {
        label: "Digital Marketing",
        value: "digital-marketing",
        title: `This is a title`,
        subtitle: "This is a subtitle"
    },
    {
        label: "Graphic Design",
        value: "graphic-design",
        title: `This is a title`,
        subtitle: "This is a subtitle"
    },
    {
        label: "SEO Optimization",
        value: "seo",
        title: `This is a title`,
        subtitle: "This is a subtitle"
    },
];

// Group data by tab value
const groupedData = data.reduce((acc, item) => {
    if (!acc[item.value]) {
        acc[item.value] = [];
    }
    acc[item.value].push(item);
    return acc;
}, {});

const uniqueTabs = Array.from(new Set(data.map(item => item.value)))
    .map(value => {
        return data.find(item => item.value === value);
    });

const TabsCustomAnimation = () => {
    const [activeTab, setActiveTab] = useState("web");

    return (
        <div>
            <Tabs id="custom-animation" value={activeTab}>
                <TabsHeader className="mx-48 mb-5">
                    {uniqueTabs.map(({ label, value }) => (
                        <Tab
                            key={value}
                            value={value}
                            className={`border border-[#8B3EE2] mx-2 py-1 rounded ${activeTab === value ? 'bg-[#8B3EE2] text-white' : 'bg-transparent text-white'}`}
                            onClick={() => setActiveTab(value)}
                        >
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody
                    animate={{
                        initial: { y: 250 },
                        mount: { y: 0 },
                        unmount: { y: 250 },
                    }}
                >
                    {uniqueTabs.map(({ value }) => (
                        <TabPanel key={value} value={value} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {groupedData[value].map(({ title, subtitle }, index) => (
                                <div key={index} className='bg-[#8B3EE2] bg-opacity-20 p-5 text-white rounded-lg border border-[#8B3EE2] border-opacity-50'>
                                    <div className='flex justify-center items-center mb-3'>
                                        <Image src={image} width={500} height={200} alt="Spark Net Corporation" />
                                    </div>
                                    <h2 className='mb-3 font-semibold text-2xl'>{title}</h2>
                                    <p className='text-[14px]'>{subtitle}</p>
                                </div>
                            ))}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>
        </div>
    );
};

export default TabsCustomAnimation;
