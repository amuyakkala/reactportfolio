import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="May 2023 - Aug 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern  -  Stealth Startup</h3>
            <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
            <p>
              - Developed full-stack web applications integrating GenAI/LLM for enhanced automation.<br/>
              - Managed project development using Agile methodologies.<br/>
              - Designed and built 3D models using AUTO-CAD and Blender for simulations.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Marketing Communication Assistant - The University of Texas at Arlington</h3>
            <h4 className="vertical-timeline-element-subtitle">Arlington, TX</h4>
            <p>
              - Led the development of frontend and backend solutions for university websites.<br/>
              - Improved user experience by implementing responsive design and accessibility features.<br/>
              - Coordinated with cross-functional teams to deliver high-impact projects.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Jun 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager - Girls Who Code</h3>
            <h4 className="vertical-timeline-element-subtitle">California, Bermont</h4>
            <p>
              - Managed Agile-based software development projects.<br/>
              - Designed and developed APIs for internal applications.<br/>
              - Utilized JIRA for task tracking and sprint planning.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 - Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer - Micron Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
            <p>
              - Developed scalable microservices using Node.js and Python.<br/>
              - Managed cloud infrastructure with AWS and Kubernetes.<br/>
              - Implemented CI/CD pipelines for automated deployments.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2021 - Dec 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Back End Developer - The Sparks Foundation</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
            <p>
              - Designed and implemented microservices architecture.<br/>
              - Built and optimized backend APIs with Node.js and Python.<br/>
              - Deployed applications on AWS with Kubernetes for scalability.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 - Dec 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Developer - G. Narayanamma Institute Of Technology And Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, India</h4>
            <p>
              - Developed and enhanced the university portal for student enrollment and news updates.<br/>
              - Designed and automated the enrollment system, reducing manual workload.<br/>
              - Built a real-time news module for faculty and student announcements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2018 - Dec 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer - PayRange</h3>
            <h4 className="vertical-timeline-element-subtitle">India (Remote)</h4>
            <p>
              - Developed and optimized backend systems using Node.js and Express.<br/>
              - Built a custom CRM system with React and MongoDB.<br/>
              - Led migration of legacy data to a cloud-based platform with Python and SQL.<br/>
              - Enhanced e-commerce platform by integrating real-time stock updates and optimizing UI with React.js.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
