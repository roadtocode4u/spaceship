---
title: What is Cloud Computing
description: "What is Cloud Computing"
hide_table_of_contents: true
---

# What is Cloud Computing

![How Website Work](https://pub-17ebb5909c5e47a6b667a332680f11fa.r2.dev/website-flow-modern.svg)
![Server](https://pub-17ebb5909c5e47a6b667a332680f11fa.r2.dev/server-components.svg)

## Challenges of Traditional Data Centers

> When reading about these data center words, you might wonder: **What exactly is a data center 🤔 🤔 so here we will learn three main concept that is `Data Centers` , `Regions` , `Availability Zones (AZs)` ?**

## Data Centers

A data center is a physical location that stores computing machines and their related hardware equipment. It contains the computing infrastructure that IT systems require, such as servers, data storage drives, and network equipment. It is the physical facility that stores any company’s digital data. Each data center has robust security, backup power systems, and cooling systems to keep everything running smoothly 24/7.

## AWS Regions

A Region is like a mini-AWS territory in different parts of the world. It's a geographical area that contains multiple data centers. For example, AWS has Regions in places like Virginia (USA), Tokyo (Japan), and London (UK). When you choose a Region, consider: AWS currently has 30+ Regions around the world. Each Region is completely independent of other Regions.

**Purpose :**

- Allows customers to run applications closer to their end users for better performance
- Helps comply with data residency requirements (keeping data within specific countries)
- Provides disaster recovery options across different geographic locations

**Services :**

- Each Region can offer different AWS services
- Pricing can vary between Regions
- Data transfer between Regions incurs additional costs

- Where your users are located (closer = faster)
- What laws apply to your data (some countries require data to stay within their borders)
- Which AWS services you need (not all Regions offer all services)

## Availability Zones (AZs)

Availability Zones are the secret sauce of AWS reliability. Each Region has multiple AZs (usually 3-6). If one AZ fails, others continue operating. Think of AZs as separate data centers within a Region that are:

**High Availability :**

- Applications can run across multiple AZs
- If one AZ has problems, applications automatically fail over to another AZ
- Provides built-in backup and redundancy

![aws-infrastructure](https://pub-17ebb5909c5e47a6b667a332680f11fa.r2.dev/aws-infrastructure.svg)

### Think of AWS's structure like a school system:

- The Region is like a school district (covering a large geographical area)
- Availability Zones are like individual schools within that district
- Data centers are like the classrooms within each school
- Just as students can switch classrooms or schools within a district if needed, applications can move between AZs within a Region

### `Why Managing Your Own IT Infrastructure Is Difficult`

1. **High Infrastructure Costs** : Must pay for data center rent, power bills, cooling systems, and ongoing maintenance - similar to owning and maintaining a large house with all its expenses.
2. **Hardware Management Challenges**: Adding or replacing servers and equipment is time-consuming, requires planning, and involves significant downtime - imagine trying to renovate your house while living in it.
3. **Limited Scalability**: Can't quickly expand or reduce capacity based on needs, as physical space and resources are fixed - like being stuck with a fixed-size building that can't grow when you need more space.
4. **24/7 Staffing Requirements** : Need to hire and maintain a full-time team of IT experts for round-the-clock monitoring and support - similar to running a hospital that never closes.
5. **Disaster Recovery Complexities**: Must plan for and protect against natural disasters, power outages, fires, and other emergencies - requires backup systems, alternative locations, and detailed recovery plans.
6. **Security Concerns**: Responsible for physical security, cybersecurity, and data protection - like being your own security company while trying to run your main business.

# What is Cloud Computing?

1. Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing.
2. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).

:::info
For more information about AWS cloud computing, I recommend reading our introductory guide. The guide covers AWS fundamentals and is available at: https://medium.com/@Vaibhavihole31/introduction-to-aws-0aee1dbe0a41
:::

## Benefits of cloud computing

### Financial Benefits:

1. Trade capital expense (CAPEX) for operational expense (OPEX)
2. Only pay for what you use (Pay On-Demand)

### Improved Capacity Management:

1. No need to guess required capacity
2. Scale up or down based on actual usage

### Increased Agility:

1. Quick access to new technologies
2. Fast deployment of resources
3. Rapid experimentation capability
4. Reduced time from idea to implementation

### Global Reach:

1. Deploy globally in minutes
2. Access to worldwide infrastructure
3. Reduced latency for end users
4. Easy geographic expansion

### Operational Efficiency:

1. No data center maintenance
2. Reduced infrastructure management
3. Focus on core business activities
4. Automatic software updates and security patches

### Enhanced Resources:

1. Access to advanced technologies (AI, ML, IoT)
2. Large variety of computing services
3. Automatic backup and recovery options

## Types of Cloud Computing

### Infrastructure as a Service (IaaS):

Think of IaaS as renting the basic building blocks of IT infrastructure. Instead of buying physical servers, storage, and networking equipment, you rent these resources from a cloud provider. For example, Amazon EC2 is an IaaS service where you can rent virtual servers. You have great flexibility in choosing operating systems, configuring networks, and managing storage, similar to how you would manage your own data center, but without the physical hardware maintenance.

### Platform as a Service (PaaS):

PaaS takes things a step further by handling the infrastructure for you, letting you focus purely on developing and deploying applications. Imagine you're building a web application - with PaaS, you don't need to worry about managing servers, storage, or networking. You just upload your code, and the platform handles everything else. Services like Heroku or Google App Engine are good examples - they let developers focus on writing code while handling all the underlying technical infrastructure.

### Software as a Service (SaaS):

SaaS is the most complete package - it's ready-to-use software delivered over the internet. Instead of installing and maintaining software on your computer, you access it through a web browser. Microsoft 365 and Salesforce are perfect examples - you don't need to manage any infrastructure or worry about updates; you simply use the software while the provider handles everything else.

think of it like this:

> **IaaS** is like leasing a plot of land and building materials - you have to construct everything yourself but have complete control

> **PaaS** is like leasing a furnished office - the basic infrastructure is there, you just need to bring your work

> **SaaS** is like staying at a hotel - everything is provided and managed for you, you just need to use it

![types of cloud](<https://pub-17ebb5909c5e47a6b667a332680f11fa.r2.dev/cloud-services-detailed%20(1).svg>)

## Cloud providers

### Major Cloud Providers:

1. Amazon Web Services (AWS)
2. Microsoft Azure
3. Google Cloud Platform (GCP)

### Why did we choose AWS over other cloud providers?

AWS holds 32% market share, has 200+ services, and offers the most mature cloud platform since 2006. Their global infrastructure and competitive pricing make them a reliable choice.
