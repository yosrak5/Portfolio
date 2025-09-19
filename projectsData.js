// projectsData.js

export const projectsData = [
  {
    id: 1,
    title: "Real-Time Data Streaming Pipeline",
    description: "A containerized ETL pipeline for real-time data streaming and processing",
    detailedDescription:
      "Designed and implemented a scalable data pipeline that ingests and processes real-time data streams using Apache Kafka. Orchestrated workflows with Apache Airflow, stored processed data in Cassandra for distributed scalability, and containerized the environment with Docker. The project demonstrates strong data engineering skills in building production-ready pipelines.",
    image: "assets/img/project1.png" ,

    technologies: ["Python", "Airflow", "Kafka", "Cassandra", "Docker", "ETL"],
    features: [
      "Real-time data ingestion with Apache Kafka",
      "Workflow orchestration using Apache Airflow",
      "Scalable distributed storage with Cassandra",
      "Containerized deployment with Docker",
      "End-to-end ETL (Extract, Transform, Load) processes"
    ],
    githubUrl: "https://github.com/yosyos1998/Data-Streaming.git",
    backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    accentColor: "#764ba2",
    category: "Data Engineering",
    status: "Completed",
    teamSize: 1
  },
  {
    id: 2,
    title: "Twitter Data Pipeline on AWS",
    description: "Cloud-native ETL workflow for ingesting and processing Twitter data",
    detailedDescription:
      "Built a data pipeline using Apache Airflow to extract, transform, and load Twitter data into AWS S3. This project highlights cloud-native data engineering practices, leveraging Python for data processing and Airflow for orchestration. The solution ensures scalable storage and provides a foundation for advanced analytics.",
    image: "/proj2.png",
    technologies: ["Python", "Airflow", "AWS S3", "ETL"],
    features: [
      "Data extraction from Twitter API",
      "Automated ETL with Apache Airflow",
      "Cloud storage with AWS S3",
      "Scalable pipeline architecture"
    ],
    githubUrl: "https://github.com/yosyos1998/Twitter_ETL_Data_Pipeline.git",
    backgroundColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    accentColor: "#f5576c",
    category: "Cloud Data Engineering",
    status: "Completed",
    teamSize: 1
  },
  {
    id: 3,
    title: "HR Data Analytics Dashboard",
    description: "Interactive HR dashboard built with Power BI",
    detailedDescription:
      "Developed an end-to-end HR analytics solution by cleaning and preprocessing employee datasets, applying data modeling techniques, and building interactive dashboards in Power BI. The project enables HR teams to track workforce trends, monitor performance, and make data-driven decisions.",
    image: "/HR.png",
    technologies: ["Power BI", "Data Cleaning", "Modeling", "Visualization"],
    features: [
      "Data preprocessing and cleaning",
      "Data modeling for HR KPIs",
      "Interactive Power BI dashboards",
      "Actionable insights for HR decision-making"
    ],
    githubUrl: "https://github.com/yosyos1998/HR_Data_Analysis.git",
    backgroundColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    accentColor: "#00f2fe",
    category: "Data Analytics",
    status: "Completed",
    teamSize: 1
  },
  {
    id: 4,
    title: "Call Center Trends Analysis",
    description: "Customer retention and KPI analysis using Power BI",
    detailedDescription:
      "Analyzed call center performance data to identify customer retention patterns and key operational KPIs. Designed Power BI dashboards that provided managers with real-time visibility into customer service efficiency, enabling data-driven improvements in customer satisfaction.",
    image: "/call-center.png",
    technologies: ["Power BI", "Data Analysis", "Visualization", "KPIs"],
    features: [
      "Customer retention trend analysis",
      "Visualization of call center KPIs",
      "Power BI interactive dashboards",
      "Business-focused insights"
    ],
    githubUrl: "https://github.com/yosyos1998/Call_Center_Trends",
    backgroundColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    accentColor: "#43e97b",
    category: "Business Intelligence",
    status: "Completed",
    teamSize: 1
  },
  {
  "id": 5,
  "title": "DevOps CI/CD Pipeline",
  "description": "Comprehensive DevOps pipeline with CI/CD automation, testing, and monitoring",
  "detailedDescription": "This project demonstrates the end-to-end implementation of a DevOps CI/CD pipeline for a Spring Boot backend application. The pipeline automates code retrieval from GitHub, build management with Maven, and deployment through Jenkins. SonarQube enforces code quality, while artifacts are versioned and stored in Nexus3. Docker and Docker Compose handle containerization and multi-container orchestration. Automated testing is performed using JUnit and Mockito to ensure reliability. The monitoring stack with Prometheus and Grafana provides real-time insights, and email notifications alert the team to build status changes. Overall, this pipeline improves development efficiency, reliability, and observability across the application lifecycle.",
  "image": "/devops.png",
  "technologies": ["Jenkins", "Maven", "Spring Boot", "SonarQube", "Nexus3", "Docker", "DockerHub", "Docker Compose", "JUnit", "Mockito", "Prometheus", "Grafana"],
  "features": [
    "Automated source code retrieval and build management with GitHub and Maven",
    "CI/CD pipeline orchestration using Jenkins",
    "Code quality enforcement with SonarQube",
    "Artifact versioning and storage in Nexus3",
    "Containerization and multi-container orchestration with Docker and Docker Compose",
    "Automated testing using JUnit and Mockito",
    "Monitoring and visualization with Prometheus and Grafana",
    "Email notifications for build status and alerts"
  ],
  "githubUrl": "https://github.com/yosyos1998/DevOps-CICD.git",
  "backgroundColor": "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
  "accentColor": "#11998e",
  "category": "DevOps",
  "status": "Completed",
  "teamSize": 1
}


];
