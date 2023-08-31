import React from "react";
import './Diy.css';

function Diy() {
    const activatePanel =() => {
    const panels = document.querySelectorAll('.panel');
    
    panels.forEach((panel) => {
        panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

    }
    return (
        <div className="diy_projects">
        <div className="diy_container">
        <div className="panel active" onClick={activatePanel} style={{
            backgroundImage: "url(/images/diys.jpg)"
        }}>
        <h3>House Diy Projects</h3>
        
        </div>
        <div className="panel" style={{
            backgroundImage: "url(/images/kids.jpg)"
        }}>
        <h3>Kids Diy Projects</h3>
            </div>
            <div className="panel" style={{
            backgroundImage: "url(/images/pet.jpg)"
        }}>
        <h3>Pets Diy Projects</h3>
            </div>
            <div className="panel" style={{
            backgroundImage: "url(/images/garden.jpg)"
        }}>
        <h3>Garden Diy Projects</h3>
            </div>
        </div>
        </div>
    )
}

export default Diy;