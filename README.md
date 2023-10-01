# Foot Spot

Welcome to Foot Spot project!

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

Foot Spot is a single-page web application that allows users to access detailed statistics for top football leagues. Users can view game results, upcoming game dates, and league standings for their favorite teams and leagues. The frontend is built using React, providing a responsive and user-friendly interface, while the backend is powered by Flask to serve the required data.

## Features

- **Game Results:** View the results of past football games in various top leagues.

- **Game Dates:** Stay informed about upcoming game dates and fixtures.

- **Standings Table:** Access the current league standings for each supported league.

## Getting Started

### Prerequisites

Before you can run this project, make sure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) (for the frontend)
- [Python](https://www.python.org/) (for the backend)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Flask](https://flask.palletsprojects.com/en/2.1.x/) (Python web framework)

### Installation

1. Clone the repository to your local machine:

   ```shell
   https://github.com/yassineerrakkas/footspot.git
   ```

2. Navigate to the project directory:

   ```shell
   cd footspot
   ```

3. Install frontend dependencies:

   ```shell
   npm install
   ```

4. Install backend dependencies (within the project root directory):

   ```shell
   pip install flask
   ```

## Usage

1. Start the Flask server (from footspot/server):

   ```shell
   python server.py
   ```

2. Start the React server (from the footspot/ directory):

   ```shell
   npm run start
   ```

3. Access the web application in your browser at `http://localhost:3000`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

Thank you for visiting the Foot Spot Website! If you have any questions or encounter issues, please don't hesitate to open an issue on GitHub or contact the project maintainers.
