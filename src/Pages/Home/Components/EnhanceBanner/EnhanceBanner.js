import React from 'react'
import "./EnhanceBanner.css"
import star from "../img/star.png"

function EnhanceBanner () {

    return (

        <div class="container">
            <div class="subcontainer">
                <h3>Enhance key compentencies</h3>
                <p className="subtitle">The programme enhances capabilities of students in the 5 key Competencies identified in the New Zealand Curriculum:
            </p>
        <div class="grid-wrapper">
            <div class="star-img">
                <img src={star} alt="star" />
                </div>

                <div class="list">
                <h4>THINKING</h4>
                <p>In particular the programme focused on problem solving, design thinking and computational thinking.</p>
                </div>

                <div class="star-img">
                <img src={star} alt="star" />
                </div>
                <div class="list">
                <h4>DISCERNING CODES</h4>
                <p>Analysing language, symbols, and texts in order to undestand and make sense of the codes in which knowlegde is expressed. </p>
                </div>

                <div class="star-img">
                <img src={star} alt="star" />
                </div>
                <div class="list">
                <h4>SELF-MANAGEMENT</h4>
                <p>Projects and challenges are designed to motivate students to explore and experiment with self-motivation</p>
                </div>

                 <div class="star-img">
                 <img src={star} alt="star" />
                 </div>
                 <div class="list">
                 <h4>RELATIONSHIPS WITH PEERS</h4>
                 <p>The programme is designed with unplugged sessions where students interact in a range of different situations, including things like being able to to listen well, recognise different points of view, and share ideas.</p>
                 </div>

                 <div class="star-img">
                 <img src={star} alt="star" />
                 </div>
                 <div class="list">
                 <h4>PARTICIPATION AND COLLBAORATION</h4>
                 <p>The programme encourages students to be involved in communities, such as family, whānau, school, and contribute and make connections with other people.</p>
                 </div>


</div>
</div>
</div>
    )
}