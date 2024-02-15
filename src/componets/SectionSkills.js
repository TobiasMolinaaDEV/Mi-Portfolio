import React from "react";
import CardSkills from "./CardSkills";

export default function SectionSkill (props){
    return(
        <section id="skills"className='container-fluid  p-5'>
            <div className='row m-3'>
            <h3 className='text-center fs-2 text-dark'>Habilidades</h3>
        </div>
            <div>
                <CardSkills/>
            </div>
        </section>
    )

}
