# Introduction and Goals

## Introduction
The Job Portal is designed to manage job listings, user profiles, skills, certificates, and to match appropriate jobs based on job descriptions and present skills. It aims to streamline the job search and application process for both job seekers and employers.

## Goals
- Efficiently manage and store job-related data.
- Match job seekers with suitable job listings.
- Ensure scalability and flexibility using cloud-native technologies.
- Provide a seamless and user-friendly experience for all users.


# Constraints

## Technical Constraints
- Must use Azure for cloud services.
- Infrastructure as code must be managed using Terraform.
- Serverless architecture utilizing Azure Functions and Durable Functions.
- Continuous Integration and Deployment (CI/CD) must be implemented using GitHub Actions.

## Organizational Constraints
- Adherence to company security and data privacy policies.
- Compliance with legal requirements such as GDPR.

## Financial Constraints
- Optimize for cost-efficiency by leveraging Azure's pay-as-you-go model.


# Context and Scope

See shared documentation

# Solution Strategy

## High-Level Design
The solution will use a serverless architecture to ensure scalability and reduce operational overhead. Event-driven design will be employed to handle job processes efficiently.

## Key Strategies
- Use Azure Functions for executing backend functions.
- Store user files in Azure Blob Storage.
- Manage job processes with Azure Durable Functions.
- Deploy infrastructure using Terraform.
- Implement CI/CD with GitHub Actions.


# Building Blocks View

## Backend Services
- **Job Service**: Manages job postings and related data.
- **Profile Service**: Manages user profiles, skills, and certificates.
- **Matchmaking Service**: Matches job seekers with suitable jobs based on skills and job descriptions.

## Frontend Application
- Developed using React.js to provide a responsive and interactive user interface.

## Data Storage
- **Azure Blob Storage**: Stores CVs, cover letters, and certificates.
- **Cosmos DB**: Stores job and profile metadata.


# Runtime View

## User Interactions
- Users interact with the frontend to create profiles, upload documents, search for jobs, and apply for positions.

## Backend Processes
- Backend services handle requests from the frontend, interact with the database, and manage state transitions using Durable Functions.


# Deployment View

## Infrastructure as Code
- Terraform scripts define and deploy the Azure infrastructure.

## Azure Services
- **Azure Functions**: Execute application logic.
- **Blob Storage**: Store files.
- **Durable Functions**: Orchestrate job processes.
- **Cosmos DB**: Database for metadata.

## CI/CD Pipeline
- **GitHub Actions**: Automate testing, building, and deployment.


# Cross-cutting Concepts

## Security
- Implement Azure Active Directory roles and policies for access control.
- Use Azure Key Vault for data encryption.

## Logging and Monitoring
- Use Azure Monitor for logging and monitoring.
- Implement alerts for critical issues.

## Error Handling
- Implement centralized error handling and logging.


# Architectural Decisions

## Use of Serverless Architecture

### Context
The need to create a scalable, flexible, and cost-efficient system for managing job postings and user profiles.

### Decision
Adopt a serverless architecture using Azure Functions for backend services.

### Rationale
- Serverless architecture reduces operational overhead.
- It scales automatically based on demand.
- Cost-efficient as you only pay for what you use.

### Consequences
- Reduces the need for dedicated server management.
- Requires monitoring for cold start issues.

## Choice of Azure

### Context
Selecting a cloud provider that offers robust serverless and cloud-native services.

### Decision
Use Azure for its comprehensive suite of cloud services and serverless capabilities.

### Rationale
- Azure offers a wide range of services that support serverless architecture.
- Strong community support and extensive documentation.
- Proven track record of reliability and performance.

### Consequences
- Ties the system to Azure's ecosystem.
- Requires knowledge and expertise in Azure services.

## Terraform for IaC

### Context
Managing cloud infrastructure as code for repeatability and version control.

### Decision
Use Terraform for infrastructure as code (IaC) to manage Azure resources.

### Rationale
- Terraform provides a declarative approach to infrastructure management.
- Supports version control and automation.
- Strong community support and extensive documentation.

### Consequences
- Requires learning Terraform syntax and best practices.
- Increases initial setup complexity but reduces long-term management effort.

## Event-Driven Architecture

### Context
The need for asynchronous processing and state management for job processes.

### Decision
Implement event-driven architecture using Azure Durable Functions.

### Rationale
- Durable Functions provide a visual workflow for managing state transitions.
- Supports long-running processes and retries.
- Integrates well with other Azure services.

### Consequences
- Adds complexity to the system architecture.
- Requires monitoring and handling of event failures.

## Continuous Integration and Deployment with GitHub Actions

### Context
Automating the build, test, and deployment processes for the application.

### Decision
Use GitHub Actions for CI/CD pipelines.

### Rationale
- GitHub Actions is integrated with GitHub repositories.
- Provides a flexible and customizable workflow automation tool.
- Supports a wide range of actions and integrations.

### Consequences
- Ties the CI/CD process to GitHub's ecosystem.
- Requires knowledge of GitHub Actions syntax and configurations.


# Quality Requirements

## Performance
- The system should handle up to 10,000 concurrent users without performance degradation.
- Average response time for user requests should be less than 200ms.

## Scalability
- The system must scale automatically based on load, using Azure's scaling capabilities.

## Availability
- Ensure 99.9% uptime by leveraging Azure's highly available architecture.

## Security
- Implement multi-factor authentication (MFA) for all user accounts.
- Ensure all data is encrypted at rest and in transit.

## Usability
- Provide a responsive and intuitive user interface.
- Ensure the system is accessible to users with disabilities (compliance with WCAG 2.1).

## Maintainability
- Codebase should follow clean code principles.
- Ensure comprehensive unit, integration, and E2E tests.


# Technical Debts

## Known Issues
- Initial implementation may have limited support for complex queries.
- User interface might need optimization for different screen sizes.

## Planned Improvements
- Enhance the search functionality to support advanced filters.
- Implement caching strategies to improve performance.


# Glossary

| Term                    | Definition                                                                                                                                                      | 
|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------| 
| DX                      | Data Exchange                                                                                                                                                   | 
| Microtema               | Micro tema                                                                                                                                                      |
| Serverless              | Cloud-computing execution model where the cloud provider dynamically manages the allocation of machine resources                                                |
| CI/CD                   | Continuous Integration and Continuous Deployment, a method to frequently deliver apps to customers by introducing automation into the stages of app development |
| IaC                     | Infrastructure as Code, managing and provisioning computing infrastructure through machine-readable definition files                                            |
| Azure Functions         | A serverless compute service that runs code in response to events and automatically manages the compute resources                                               |
| Terraform               | An open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services                                |
| Azure Durable Functions | An extension of Azure Functions that lets you write stateful functions in a serverless environment                                                              |
| Azure Blob Storage      | A scalable object storage service provided by Azure                                                                                                             |
| Cosmos DB               | A fully managed NoSQL database service provided by Azure                                                                                                        |
| Azure Active Directory  | Azure's cloud-based identity and access management service                                                                                                      |
| Azure Key Vault         | A cloud service for securely storing and accessing secrets                                                                                                      |



