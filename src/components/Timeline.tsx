import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2024 - Present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer - GS Soft Inc</h3>
            <h4 className="vertical-timeline-element-subtitle">Santa Clara, California, United States</h4>
            <p>
              Full-time · On-site<br />
              - Leading the development of scalable, high-performance microservices, focusing on backend architecture and cloud solutions.<br />
              - Architected and developed cloud-native applications using AWS services, including Lambda, S3, EC2, and RDS.<br />
              - Developed and implemented automated deployment pipelines using GitHub Actions, ensuring faster and more reliable releases.<br />
              - Mentored and guided junior engineers, ensuring that best practices in coding, architecture, and testing were followed.<br />
              - Led integration efforts for third-party APIs and external services, driving seamless data flow across platforms.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2024 - Jul 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer - Stealth Startup</h3>
            <h4 className="vertical-timeline-element-subtitle">New York, United States</h4>
            <p>
              Full-time · Remote<br />
              - Led the design and development of AI-powered backend services, focusing on natural language processing (NLP) to enhance product features.<br />
              - Developed and deployed APIs in Flask and Node.js for integration with front-end systems and mobile applications.<br />
              - Worked closely with data scientists to optimize algorithms, ensuring that the AI-driven services performed efficiently under high loads.<br />
              - Developed and maintained cloud infrastructure using AWS and Docker to ensure scalability and reliability of the application.<br />
              - Actively contributed to sprint planning, code reviews, and knowledge sharing across teams.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2023 - May 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Marketing Communication Assistant - The University of Texas at Arlington</h3>
            <h4 className="vertical-timeline-element-subtitle">Arlington, Texas, United States</h4>
            <p>
              Part-time · On-site<br />
              - Automated the university’s content publishing workflow, reducing the time spent on manual tasks by implementing Python scripts.<br />
              - Developed internal tools that helped track website traffic and generate weekly performance reports.<br />
              - Managed content updates for the university's website, ensuring all information was accurate and current.<br />
              - Collaborated with the marketing team to ensure that digital campaigns were aligned with content and messaging strategies.<br />
              - Built dashboards for faculty and administration to track content performance and optimize engagement strategies.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Jun 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager - Girls Who Code</h3>
            <h4 className="vertical-timeline-element-subtitle">United States</h4>
            <p>
              Remote<br />
              - Managed cross-functional teams of developers, designers, and stakeholders to deliver an innovative content-based recommendation system.<br />
              - Spearheaded the development of a user authentication and authorization module to ensure secure access to sensitive data.<br />
              - Collaborated with designers and engineers to implement a dynamic recommendation algorithm that utilized user behavior data.<br />
              - Conducted sprint planning, stand-ups, and retrospectives to ensure projects were delivered on time and within budget.<br />
              - Delivered product features to 95% client specifications, exceeding expectations in terms of quality and functionality.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2022 - Dec 2022"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer - Micron Technology</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, Telangana, India</h4>
            <p>
              Full-time · On-site<br />
              - Designed and built backend services using Docker and AWS to optimize API testing workflows and system reliability.<br />
              - Integrated Kubernetes into the development pipeline, managing containerized applications for better system scalability.<br />
              - Actively participated in troubleshooting complex issues, identifying root causes, and providing solutions to enhance system performance.<br />
              - Enhanced backend systems for faster API response times, which significantly improved system performance under heavy loads.<br />
              - Collaborated with cross-functional teams to design scalable and maintainable cloud infrastructure solutions.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2020 - Dec 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer - PayRange</h3>
            <h4 className="vertical-timeline-element-subtitle">Portland, Oregon Metropolitan Area</h4>
            <p>
              Full-time · Remote<br />
              - Developed custom CRM systems using React.js for the frontend and MongoDB for data storage.<br />
              - Implemented secure APIs for customer data and transaction management, integrating them with the existing e-commerce platform.<br />
              - Led the migration of legacy systems to cloud platforms, ensuring data integrity and reducing operational overhead.<br />
              - Integrated real-time stock updates into the platform, improving user experience and transaction reliability.<br />
              - Collaborated on designing and building scalable web applications, with an emphasis on optimizing API performance and security.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2019 - Dec 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Junior Software Engineer - The Sparks Foundation</h3>
            <h4 className="vertical-timeline-element-subtitle">India</h4>
            <p>
              Freelance · Remote<br />
              - Led development of responsive web applications using HTML, CSS, and JavaScript.<br />
              - Collaborated with project teams using Jira and Confluence to maintain consistent progress tracking.<br />
              - Debugged and optimized both front-end and back-end code, solving over 50 reported issues.<br />
              - Enhanced application performance by refactoring components and ensuring code reusability.<br />
              - Worked with a remote team to build complex features while ensuring the quality and maintainability of the code.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2018 - Dec 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern - G. Narayanamma Institute Of Technology And Science</h3>
            <h4 className="vertical-timeline-element-subtitle">Hyderabad, Telangana, India</h4>
            <p>
              Apprenticeship · On-site<br />
              - Developed a centralized enrollment system that automated student registration, significantly reducing manual workloads.<br />
              - Built a real-time news and announcement module, enabling faculty to quickly update students and staff on important events.<br />
              - Led the effort to enhance the university portal’s backend, improving system speed and reducing response time.<br />
              - Worked on API development to ensure smooth integration with other campus systems.<br />
              - Assisted in the development of key features for academic resource management within the portal.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
