import React from 'react';
import './Other.css';

function Other() {
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
        <div className="hobby">
        <div className="hobby_container">
        <div className="panel active" onClick={activatePanel} style={{
            backgroundImage: "url(/images/swim.jpg)"
        }}>
        <h3 style={{color: 'black'}}>Swim</h3>
        </div>
        <div className="panel" style={{
            backgroundImage: "url(/images/skating.jpg)"
        }}>
        <h3>Skating</h3>
            </div>
            <div className="panel" style={{
            backgroundImage: "url(/images/outdoor.jpg)"
        }}>
        <h3>Explore/outdoor</h3>
            </div>
            <div className="panel" style={{
            backgroundImage: "url(/images/afrodance.jpg)"
        }}>
        <h3 style={{color: 'black'}}>Dance</h3>
            </div>
            <div className="panel" style={{
            backgroundImage: "url(/images/travel.jpg)"
        }}>
        <h3 style={{color: 'black'}}>Travel</h3>
            </div>
        </div>
        </div>
    )
}

export default Other;
