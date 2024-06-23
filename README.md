# Personal Trainer Management System

This repository contains the source code and related files for our final project, a personal trainer management system. The application is built using Windows Forms .NET and an SQL database/server, and it is developed with Visual Studio.

## Overview

The Personal Trainer Management System is designed to help personal trainers manage their clients, sessions, and schedules. The system includes functionalities for user login, client registration, member management, financial transactions, activity tracking, preference management, goal setting, session scheduling, and instructor/staff management.

## Features

### User Login
- **Secure login functionality for trainers and administrators.**

### Member Management

#### Member Registration Form
- **Fields:** Personal details (name, contact information, address, date of birth, etc.), membership type, registration date, preferences, etc.

#### Member Profile Form
- **Displays:** Member details, preferences, activities, history.
- **Actions:** Edit profile, update preferences, view history.

### Financial Transactions

#### Financial Transactions Form
- **Displays:** Member's financial transactions.
- **Actions:** Add transaction, view transaction history, generate statements.

### Activity and Preference Tracking

#### Activity Tracking Form
- **Fields:** Activity type, date, duration, notes.
- **Displays:** Activity history.
- **Actions:** Add/edit activity, view activity trends.

#### Preference Management Form
- **Fields:** Member preferences (e.g., preferred activities, schedule, communication preferences).

### Goal Setting

#### Goal Setting Form
- **Fields:** Goal description, target date, progress metrics.
- **Displays:** Member’s goals and progress.
- **Actions:** Add/edit goals, update progress.

### Session Scheduling

#### Session Scheduling Form
- **Fields:** Session type, coach/instructor, date, time.
- **Displays:** Scheduled sessions.
- **Actions:** Schedule new session, cancel session, view session history.

### Instructor and Staff Management

#### Instructor/Staff Registration Form
- **Fields:** Personal details, role, shift timings, contact information, etc.

#### Shift Management Form
- **Fields:** Instructor/staff, shift details (date, time, duration).
- **Displays:** Scheduled shifts.
- **Actions:** Add/edit shift, view shift history.

#### Time Log Form
- **Fields:** Instructor/staff, hours logged, activities performed.
- **Displays:** Logged hours.
- **Actions:** Add/edit log entry, generate reports.

## Project Structure

- **/src:** Contains the source code for the application.
- **/database:** Contains SQL scripts for database creation and management.
- **/docs:** Documentation and resources related to the project.

## Getting Started

### Prerequisites

- [Visual Studio](https://visualstudio.microsoft.com/)
- [SQL Server](https://www.microsoft.com/en-us/sql-server/sql-server-downloads)
- [.NET Framework](https://dotnet.microsoft.com/download/dotnet-framework)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/your-repo-name.git
    ```

2. **Open the solution in Visual Studio:**
    - Open Visual Studio.
    - Click on `File -> Open -> Project/Solution`.
    - Navigate to the cloned repository and select the solution file (.sln).

3. **Set up the SQL Database:**
    - Open SQL Server Management Studio (SSMS).
    - Run the SQL scripts found in the `/database` folder to create and populate the database.

4. **Configure the connection string:**
    - Update the connection string in the application configuration file to point to your SQL Server instance.

### Running the Application

- Build the solution in Visual Studio.
- Run the application by clicking the `Start` button in Visual Studio.

## Usage

### Login

- Enter your username and password to log in to the system.

### Member Management

- Navigate to the `Registration` section to add new clients.
- Use the `Profile` section to view and edit member details, preferences, and history.

### Financial Transactions

- Manage financial transactions and view transaction history in the `Financial Transactions` section.

### Activity and Preference Tracking

- Track activities and manage preferences in the `Activity Tracking` and `Preference Management` sections.

### Goal Setting

- Set and track goals in the `Goal Setting` section.

### Session Scheduling

- Schedule and manage sessions in the `Session Scheduling` section.

### Instructor and Staff Management

- Register instructors and staff, manage shifts, and log hours in the `Instructor and Staff Management` section.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.
