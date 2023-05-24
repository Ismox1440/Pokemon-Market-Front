# Pokemon Market - Frontend

This repository contains the frontend part of the Project Name project. It is a project developed using Vite, React, Redux Toolkit, SWR, Mantine UI, and Tailwind CSS.

## Project Structure

The project follows the following folder structure:

- `src/components`: Contains independent components used in different parts of the project.
- `src/api/api.ts`: Contains the backend URL and functions for making API requests.
- `src/assets`: Folder for storing static resource files like images, fonts, etc.
- `src/config`: Contains some configuration related to colors or global variables.
- `src/hooks`: Directory to store custom hooks used in the application.
- `src/mock`: Contains a mock of an item from the database used for testing or development.
- `src/pages`: Folder structure for project pages, following the pattern `pages > page > components`.
- `src/redux`: Directory to store files related to state management using Redux Toolkit.
- `src/redux/api`: Folder to store files related to API calls using Redux.
- `src/types`: Contains type definition files used in the project.
- `src/utils`: Directory to store utilities and helper functions.
- `middleware.tsx`: Contains an Auth0 middleware used for authentication.

## Requirements

Make sure you have the following installed before getting started:

- Node.js
- npm or yarn

## Setup

Follow these steps to set up and run the project:

1. Clone this repository: `git clone https://github.com/your-username/your-repository.git`.
2. Navigate to the project directory: `cd your-repository`.
3. Install the dependencies: `npm install` or `yarn install`.
4. Configure the backend URL in `src/api/api.ts`.
5. Start the development server: `npm run dev` or `yarn dev`.
6. Open your browser and access `http://localhost:5173` to see the application in action.

## Contribution

If you wish to contribute to this project, you can follow these steps:

1. Fork this repository.
2. Create a new branch: `git checkout -b my-branch`.
3. Make the necessary changes and commit them: `git commit -m "Description of the changes"`.
4. Push the changes to your forked repository: `git push origin my-branch`.
5. Open a Pull Request in this repository.


