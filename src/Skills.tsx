import React, { useState } from "react";

interface Skill {
    name: string;
    category: string;
}

interface Props {
    items: Skill[];
    heading: string;
}

const Skills: React.FC<Props> = ({ items, heading }) => {
    const [selectedIndex, setIndex] = useState(-1);

    return (
        <div className="">
            <h1 className="mx-2">{heading}</h1>
            <ul className="list-group list-group-flush">
                {items.map((skill, index) => (
                    <>
                    <li
                        key={index}
                        onClick={() => setIndex(index)}
                        className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
                    >
                        {skill.name}
                    </li>
                    <p style={{ display: selectedIndex === index ? 'block' : 'none' }}> {skill.category}</p>
                    </>

                ))}
                
            </ul>
        </div>
    );
};

export default Skills;
