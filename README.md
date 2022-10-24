# etiqa
Etiqa Assessment


Backend 
Framework : NestJS

# Requirement 
- Node version : 16.15.1
- NPM version : 8.12.1
- Download Laragon for local web server (Optional).
- Download PostgreSQL (Required)
- You can use PGAdmin 4, DBeaver or NaviCat for database software tools

# Installation 
  # Database
  - Open database software  
  - Create new database. For example 'task'

  # Github
  - git pull from repository : git clone https://github.com/rozaimizamahri/etiqa

  # Start Backend App
  - Using terminal or command prompt
    - cd backend
    - npm install
    - cp .env.example .env
    - In .env , add this config 

      POSTGRES_HOST=127.0.0.1
      POSTGRES_PORT=5432
      POSTGRES_USER=postgres
      POSTGRES_PASSWORD= 
      POSTGRES_DATABASE=task
    
    - npm run start:dev
    - App run on port 3000 

# Note :  
  - You can submit request using VSCode using REST client
  - Open requests.http file
  - Click button 'send request' for each of the API list
  
  
Frontend
Framework : Angular JS 14

# Requirement 
- Node version : 16.15.1
- NPM version : 8.12.1
- Angular CLI : 14.2.6

# Installation  

  # Github
  - git pull from repository : git clone https://github.com/rozaimizamahri/etiqa

  # Start Backend App
  - Using terminal or command prompt
    - cd frontend
    - npm install   
    - ng serve
    - App run using google chrome browser
      - http://localhost:4200


# Note 
    - Using alertifyjs for notification
    - Using Material UI for template styling


