# Ink Sight

## Overview

Ink Sight is a web application designed for users to share book reviews. This web application is built using ReactJS for the front-end and Node.js for the back-end.

## Users

Ink Sight supports three types of users:

### Guest

Guests have limited access to the web store and can perform the following actions:

- Access the home page.
- Access the about page.
- Access the reviews page.
- Access the authentication pages.

### User (has access to all Guest)

- Access my reviews page.
- All CRUD review.
- Comment others' reviews.

Please note that certain features are restricted for guests to encourage user registration.

## Built With

- ReactJS
- Vite
- React Toastify
- Bootstrap
- HTML
- CSS

### Communication

Communication between the frontend and backend is achieved through RESTful API endpoints. The frontend uses the `fetch` API to interact with these endpoints for operations such as login, registration, product listing, and user-related actions.

### State Management

Local storage is used for client-side state persistence, and the `usePersistedState` hook helps manage this state across sessions. The `AuthContext` provides authentication-related information to components.

## Getting Started

1. Clone the repository: `git clone https://github.com/Fikata12/ReactJS-Project.git`
2. Install dependencies: `npm install`
3. Start the frontend: `npm run dev` (in the `client` directory)
4. Start the backend: `node server.js` (in the `server` directory)

## Screenshots

### Pages

`/`

![Екранна снимка 2023-12-08 230823](https://github.com/Fikata12/ReactJS-Project/assets/90516828/a54f1810-fffa-4671-b90f-8a61acacade2)

`/reviews`

![Екранна снимка 2023-12-08 230850](https://github.com/Fikata12/ReactJS-Project/assets/90516828/8b83eee5-297b-462e-9003-f088084dbb72)

`/about`

![Екранна снимка 2023-12-08 230907](https://github.com/Fikata12/ReactJS-Project/assets/90516828/5f2f11d5-f382-4fc0-83da-05b2c5fb0563)

`/login`

![Екранна снимка 2023-12-08 230917](https://github.com/Fikata12/ReactJS-Project/assets/90516828/48b15f57-fb83-4762-9feb-9060a54b3ae0)

`/register`

![Екранна снимка 2023-12-08 230925](https://github.com/Fikata12/ReactJS-Project/assets/90516828/4a59157f-a588-44f9-88e7-45e8a017636f)

`/reviews/mine`

![Екранна снимка 2023-12-08 231005](https://github.com/Fikata12/ReactJS-Project/assets/90516828/f0b344f8-0700-466b-adc1-9ab3ccd308dc)

`/reviews/add`

![Екранна снимка 2023-12-08 231017](https://github.com/Fikata12/ReactJS-Project/assets/90516828/85198ed3-3cff-449e-80b8-f34c9f1f21e7)

`/reviews/edit/:id`

![Екранна снимка 2023-12-08 231027](https://github.com/Fikata12/ReactJS-Project/assets/90516828/d2b6c523-bc40-44ed-83ac-f2af1c0355aa)

`/reviews/details/:id`

![Екранна снимка 2023-12-08 231047](https://github.com/Fikata12/ReactJS-Project/assets/90516828/dccea765-6b44-46c9-8463-d32d472f1583)
![Екранна снимка 2023-12-08 231114](https://github.com/Fikata12/ReactJS-Project/assets/90516828/23aa31a5-77b3-4914-a0f3-359cc0897e3a)

### Notifications

`error`

![Екранна снимка 2023-12-08 232552](https://github.com/Fikata12/ReactJS-Project/assets/90516828/ebda7305-8404-42dc-9d25-08641b7714e1)

`success`

![Екранна снимка 2023-12-08 232127](https://github.com/Fikata12/ReactJS-Project/assets/90516828/66bc6619-40fa-4a87-ab6d-40fe95cd398f)



