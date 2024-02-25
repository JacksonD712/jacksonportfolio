import React from "react";
function About() {

    document.body.style.overflow = 'hidden';
    return (
        <section class="  px-4 py-8  bg-[#000000] h-screen w-full id=about">
        <div class="text-center">
            <h2 class="text-3xl font-semibold text-white  mb-4">About <span class="text-blue-500">me</span></h2>
            <p class="text-white">
               I'm Jackson doumith i am a 24 years old web developer  <br /> <br /> In the realm of web development, the choices we make are akin to composing a symphony of code. Each line crafted with precision, weaving together functionality and design to create immersive digital experiences. As a 24-year-old web developer, I harmonize creativity and logic to orchestrate the perfect online presence.
            </p>
        </div>
        <div class="flex justify-center items-center mt-8">
            <div class="w-full lg:w-1/2">
                <h4 class="text-xl font-semibold text-white mb-4 mr-10 ">Information About me</h4>
                <p class="text-white">
                As a skilled web developer, I brings a passion for crafting elegant and efficient digital solutions to every project. 
                With a keen eye for detail and a dedication to staying current with the latest technologies and trends in web development, 
                I consistently delivers high-quality work that exceeds expectations. Whether it's designing responsive user interfaces, 
                optimizing website performance, or implementing robust back-end systems, I expertise shines through in every aspect of his work. 
                With excellent communication skills and a collaborative mindset, I thrives in team environments, leveraging his technical proficiency and creative problem-solving abilities to tackle challenges head-on.
                 Committed to continuous learning and growth, I am poised to make a lasting impact in the ever-evolving landscape of web development.
                </p>
                
            </div>
            <div class="hidden lg:block lg:w-1/2">
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <div>
                        <p class="text-4xl border-collapse font-bold text-white">20+</p>
                        <p class="text-sm text-white">Projects Completed</p>
                    </div>
                    <div>
                        <p class="text-4xl font-bold text-white">2+</p>
                        <p class="text-sm text-white">Years of Experience</p>
                    </div>
                    <div>
                        <p class="text-4xl font-bold text-white">9+</p>
                        <p class="text-sm text-white">Languages</p>
                    </div>
                    <div>
                        <p class="text-4xl font-bold text-white">400+</p>
                        <p class="text-sm text-white"> Reviews</p>
                    </div>
                </div>
                <div class="mt-8">
                    <h4 class="text-xl font-semiboldtext-white">My Skills</h4>
                    <div class="mt-4">
                        <div>
                            <p class="text-white ">html5</p>
                            <div class="w-full bg-gray-200 rounded-full">
                                <div class="bg-blue-500 w-9/12 text-xs leading-none py-1 text-center text-white rounded-full">80%</div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <p class="text-white">css3</p>
                            <div class="w-full bg-gray-200 rounded-full">
                                <div class="bg-blue-500 w-10/12 text-xs leading-none py-1 text-center text-white rounded-full">85%</div>
                            </div>
                        </div>
                        <div class="mt-2">
                            <p class="text-white">javascript</p>
                            <div class="w-full bg-gray-200 rounded-full">
                                <div class="bg-blue-500 w-11/12 text-xs leading-none py-1 text-center text-white rounded-full">95%</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    );
}

export default About;
