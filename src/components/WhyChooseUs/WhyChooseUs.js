import Image from 'next/image';
import about from "@/assets/about.png"

const WhyChooseUs = () => {
    return (
        <section class="bg-[#13072E] px-24 text-white body-font overflow-hidden">
            <div class="container py-24 mx-auto">
                <div class="flex flex-wrap">
                    <div class="md:w-1/2 flex flex-col items-start">
                        <span class="inline-block px-2 rounded text-white text-sm font-medium tracking-widest">WHY CHOOSE US</span>
                        <h2 class="sm:text-5xl text-2xl title-font font-bold text-[#8B3EE2] mt-4 ">We bring solutions to make life easier for our customers.</h2>
                        <div class="container py-6 mx-auto flex flex-wrap">
                            <div class="flex flex-wrap">
                                <div class="lg:w-1/2 md:w-full mb-4 pr-5">
                                    <div class="flex sm:flex-row flex-col">
                                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#8B3EE2] text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <div class="flex-grow">
                                            <h2 class="text-lg title-font font-medium mb-3 text-[#8B3EE2]">Creativity</h2>
                                            <p class="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:w-1/2 md:w-full">
                                    <div class="flex sm:flex-row flex-col">
                                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#8B3EE2] text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <div class="flex-grow">
                                            <h2 class="text-lg title-font font-medium mb-3 text-[#8B3EE2]">Innovative Thinking</h2>
                                            <p class="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:w-1/2 md:w-full pr-5">
                                    <div class="flex sm:flex-row flex-col">
                                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#8B3EE2] text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <div class="flex-grow">
                                            <h2 class="text-lg title-font font-medium mb-3 text-[#8B3EE2]">Rapid Solutions</h2>
                                            <p class="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:w-1/2 md:w-full">
                                    <div class="flex sm:flex-row flex-col">
                                        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#8B3EE2] text-white flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                            </svg>
                                        </div>
                                        <div class="flex-grow">
                                            <h2 class="text-lg title-font font-medium mb-3 text-[#8B3EE2]">Top-Notch Support</h2>
                                            <p class="leading-relaxed text-sm">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex flex-col items-center">
                        <Image src={about} width={900} height={900} alt="Spark Net Corporation" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;