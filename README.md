# ADS_Backend_Test-Case-2

## Description
Backend API Test Case of ADS Intern, using Node.JS, express.JS, and Sequelize.

## Step 1: Activate Apache and MySQL
Open XAMPP and start both Apache and MySQL services.

## Step 2: Install Dependencies
In project terminal, run the following command to download all the required packages:
```bash
npm install
```

## Step 3: Set Up Database
Ensure that you have a database named **my_database** in your MySQL if not create it first, or you can customize the database name by specifying it in the **.env** file.

## Step 4: Run Migrations
Execute the following command to run migrations:
```bash
npx sequelize-cli db:migrate
```

## Step 5: Seed Database (Recommended)
If you need initial data, run the following command:
```bash
npx sequelize-cli db:seed:all
```

## Step 6: Start the Project
To launch the project, use the following command:
```bash
npm start
```

## Step 7: Testing with Postman
You can test the API using Postman. If your project is running on port 3000, enter **localhost:3000/** in Postman. Use either GET or POST HTTP methods.
