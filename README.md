# Advanced React Video Media Player

## Project Overview

The Advanced React Video Media Player is a YouTube  web application built using React. The platform allows users to browse, search, and watch videos through a responsive interface.

The application dynamically retrieves video data from the YouTube v3 API via RapidAPI. The goal of this project is to demonstrate asynchronous API fetching, efficient state management, and modular component architecture while maintaining a clean and responsive user interface.

---

## Technologies Used

- React
- React Router
- Axios
- TanStack Query (React Query)
- RapidAPI YouTube v3 API
- Vite
- CSS / Tailwind CSS

---

## Project Structure

The project is organized using a modular structure that separates reusable components, pages, and API utilities.

The **components folder** contains reusable user interface elements used across the application. These include the navigation bar, sidebar, video cards, channel cards, video player, and loader component. These components help maintain consistency and make the interface easier to maintain and extend.

The **pages folder** contains the main views of the application. The Feed page acts as the landing page where users can browse videos based on selected categories. The VideoCardDetails page displays the selected video along with its details and related videos. The ChannelDetails page displays channel information and a list of videos uploaded by the creator.

The **utilities folder** contains helper functions used across the application. The main utility file is responsible for communicating with the RapidAPI YouTube API using Axios. This file manages API configuration such as the base URL and authentication headers.

The main application logic is handled in the root React files which manage routing, application layout, and component rendering.

---

## API Integration

This project uses the **YouTube v3 API through RapidAPI** to retrieve video and channel data.

Axios is used to make HTTP requests to the API, while **TanStack Query** is used to manage API requests, caching, loading states, and error handling. This approach improves performance and prevents unnecessary API calls when users navigate between pages.

---

## Running the Project Locally

Follow the steps below to run the project on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
```

### 2. Navigate to the Project Folder

```bash
cd your-repository-name
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Create Environment Variables

Create a `.env` file in the root of the project and add your RapidAPI key.

```
VITE_RAPID_API_KEY=your_rapidapi_key_here
```

This key allows the application to access the YouTube API through RapidAPI.

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Open the Application

Open your browser and visit:

```
http://localhost:5173
```

---

## Features

- Browse videos by category
- Search for videos using a search bar
- Watch videos using an embedded video player
- View channel information and uploaded videos
- Display related videos
- Responsive design for mobile, tablet, and desktop
- Loading indicators during API requests
- Error handling for API failures

---

## Conclusion

This project demonstrates how modern React applications can interact with external APIs while maintaining clean architecture and efficient performance. By combining React, Axios, and TanStack Query, the application provides a dynamic and responsive video browsing experience similar to popular streaming platforms.
## AUTHOR
Monia Nijimbere
