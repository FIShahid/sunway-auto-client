import React from 'react';


const Portfolio = () => {
    return (
        <div>
            <div class="card mx-auto mt-8 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title mx-auto text-3xl mb-6">Fokhrul Islam Shahid</h2>
                    <h4 className="text-xl">Email: shahidcse12@gmail.com</h4>
                    <div>
                        <p> Education : B.sc in CSE</p>
                        <p>Institution: International Islamic University Chittagong </p>
                        <p>SkillSet: HTML5 , CSS3 , Bootstrap , Tailwind CSS ,JavaScript ,ES6,  React , Node Js , Express JS , MongoDB, Firebase</p>

                        <div >
                            <p className="text-center font-bold mt-4 mb-4">Project Done So Far</p>
                            

                            
                            
                            <div class="flex flex-col w-full border-opacity-50">
                                <div class="grid h-20 card bg-base-300 rounded-box place-items-center"><a className="text-purple-500 font-bold link-hover"  href="https://warehouse-management-c429a.web.app/"> Electronic Warehouse</a></div>
                                <div class="divider"></div>
                                <div class="grid h-20 card bg-base-300 rounded-box place-items-center"><a className="text-purple-500 font-bold link-hover"  href="https://adventure-traveller.firebaseapp.com/">Adventure Traveler</a></div>
                                <div class="divider"></div>
                                <div class="grid h-20 card bg-base-300 rounded-box place-items-center"><a className="text-purple-500 font-bold link-hover" href="https://sunway-auto-parts.web.app/">Sunway Auto Parts</a></div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Portfolio;