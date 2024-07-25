"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import PageHeader from '@/Components/PageHeader';

const JobExperience = () => {
  return (
    <div className="job-experience">
       <PageHeader
          title={"Experiences"}
          description={
            ""
          }
        />
       <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="01 May 2024 - 01 August 2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Intern Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">ANCOVA SOFTWARE</h4>
          <p>
            Working on developing and maintaining web applications with React, Next.js, and Redux. Worked new features and optimize performance.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="01 August 2024 - present"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaBriefcase />}
        >
          <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">ANCOVA SOFTWARE</h4>
          <p>
            Developed and maintained the frontend of several web applications using React, Redux and Next Js. Collaborated closely with designers and backend developers to deliver high-quality products.
          </p>
        </VerticalTimelineElement>

      
      </VerticalTimeline>
    </div>
  );
};

export default JobExperience;
