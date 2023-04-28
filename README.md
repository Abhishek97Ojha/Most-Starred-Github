# Most Starred Repo (Company Project - 01)

## Project Overview
The task is to implement a small webapp that will list the most starred Github repos that were created in the last 30 days. There will also be a simple drill down feature that displays a time series graph of various metrics for the given repository. You'll be fetching the sorted JSON data directly from the Github API.

## Hosted Link

Open [https://most-starred-github-4ve7.vercel.app/](https://most-starred-github-4ve7.vercel.app/) to view it in your browser.

## Github Repository

Open [https://github.com/Abhishek97Ojha/Most-Starred-Github](https://github.com/Abhishek97Ojha/Most-Starred-Github) to view it in your browser.

# Api provider [api.github.com](api.github.com)
- https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc
- https://api.github.com/repos/octocat/hello-world/stats/code_frequency

## Library Used :
- React *("^18.2.0")*
- React-Dom *("^18.2.0")*
- React-Scripts *("5.0.1")*
- React-Icons *("^4.8.0")*
- Axios *("^1.3.6")*
- Highcharts-react-official *("^3.2.0")*
- React-Redux *("^8.0.5")*
- Redux-saga *("^1.2.3")*
- Material Ui *("^5.12.1")*

## Features
- As a User I should be able to list the most starred Github repos that were created in the last 1 week, 2 weeks, 1 month.
- As a User I should be able to identify period of time to search for most starred repos.
- As a User I should see the results as a list. One repository per row.
- As a User I should be able to see for each repo/row the following details : 
    1.Repository name 
    2.Repository description 
    3.Number of stars for the repo. 
    4.Number of issues for the repo. 
    5.Username and avatar of the owner.
- As a User I should be able to drill down into each repo and see the commit activity a weekly basis for up to a year of the most recent history of the repo

## Technologies
- ReactJS : ReactJS is a popular front-end library that allows you to build reusable components to create a dynamic user interface. It provides state management capabilities, which can make it easier to manage the data and state of your application.
- Highcharts : Highcharts is a popular JavaScript library for creating interactive and customizable charts and graphs. It is widely used for data visualization in web applications and is compatible with various browsers and platforms.
- HTML : HTML is a markup language that is used to create the structure and content of your web pages. It provides a range of elements and tags that can be used to create headings, paragraphs, lists, and other types of content.
- CSS : CSS is a stylesheet language that is used to add style and formatting to your web pages. It provides a range of properties and values that can be used to adjust the size, color, font, and layout of your content.
- Redux : Redux is a predictable state container for JavaScript applications. It is often used in conjunction with React, a popular JavaScript library for building user interfaces.
- Redux-Saga : Redux Saga is a middleware library for Redux that helps manage side effects, such as making API calls, handling asynchronous tasks, and coordinating complex interactions between different parts of an application.
- React-Redux : React Redux is a library that provides a way to connect React components with Redux store, which helps manage the state of an application.
- Media queries : Media queries are a feature in CSS that allow web developers to apply different styles to a web page based on the characteristics of the device or screen it is being viewed on.
- Git : Git is a version control system that allows you to manage and track changes to your codebase. It helps you to collaborate with others and keep track of your project history.
- GitHub : GitHub is a web-based platform that allows you to host and manage your Git repositories. It provides a range of features, such as collaboration tools, issue tracking, and pull requests, to help you work on your project with others.
- Vercel: Vercel is a cloud platform that specializes in hosting and deploying serverless web applications. It provides a range of features and tools to help you build, deploy, and manage your web applications.

## Screenshots
<br/><br/>
![most starred 1](https://user-images.githubusercontent.com/73434349/235123340-42d959c6-f848-4c11-8774-53d5767fd4c2.png)

<br/><br/>
![most starred 2](https://user-images.githubusercontent.com/73434349/235123418-68fc80ea-cb50-45e9-b2f9-cae8e5c55eef.png)

<br/><br/>
![most starred 3](https://user-images.githubusercontent.com/73434349/235123449-7828e958-9735-49c9-9a2a-a8b2275ecae8.png)

<br/><br/>

## Video Explanation

Open [https://drive.google.com/file/d/1enVcOmBeT5CUUNSRw8n3N7ln_iSioH4u/view?usp=sharing](https://drive.google.com/file/d/1enVcOmBeT5CUUNSRw8n3N7ln_iSioH4u/view?usp=sharing) to view it in your browser.
