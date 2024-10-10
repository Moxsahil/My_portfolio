"use client";

import CountUp  from "react-countup";

const stats = [
    {
        num: 3,
        title: "Years of Experience",
    },
    {
        num: 4,
        title: "Projects completed",
    },
    {
        num: 8,
        title: "Technologies mastered", 
    },
    {
        num: 201,
        title: "Code commits",
    },
];

const Stats = () => {
  return (
    <section>
        <div className="container mx-auto">
            <div>
                {stats.map((item, index) => {
                    return (
                        <div key={index}>
                            <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"
                            />
                            </div>
                    );
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats