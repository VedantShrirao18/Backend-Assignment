
# Backend-Assignment

This assignment implements CRUD APIs (POST, GET, PUT, DELETE) for managing assistants. It utilizes Node.js with Express for the backend and PostgreSQL for the database.

# Setup Instructions



## Prerequisites

- Node.js installed on your machine
- PostgreSQL installed and running



## Installation

1.Clone the repository:

```bash
  https://github.com/VedantShrirao18/Backend-Assignment.git
```
2.Navigate to the project directory

3.Install dependencies:

```bash
 npm install

```
4.Set up the PostgreSQL database:
- Create a PostgreSQL database named assistants.
- Modify the database configuration in db.js if necessary.







    
## Running the Application

1.Start the server:

```bash
  node server.js
```
The server will start running on http://localhost:3001.




## Using the APIs

Endpoints

- POST /assistant: Creates a new record in the database and returns the id of the assistant.
- GET /assistant/<assistant_id>: Retrieves the details of the assistant with the specified id.
- PUT /assistant/<assistant_id>: Updates the details of the assistant with the specified id.
- DELETE /assistant/<assistant_id>: Deletes the record of the assistant with the specified id.





## Postman Collection

1.Import the Postman collection provided in the Assignment.postman_collection**.json.

2.The collection includes requests corresponding to the CRUD operations mentioned above.

3.Make sure to update the base URL of the requests to match your local environment (http://localhost:3001 by default).

4.You can then use the collection to interact with the APIs directly from Postman.









## Screenshots

![Screenshot from 2024-05-09 00-49-07](https://github.com/VedantShrirao18/Backend-Assignment/assets/122175901/80d47ca5-5eba-4ac7-921d-e327d064418c)

![Screenshot from 2024-05-09 00-49-22](https://github.com/VedantShrirao18/Backend-Assignment/assets/122175901/6b61e76f-b970-4725-9c42-7476b5b85075)

![Screenshot from 2024-05-09 00-49-43](https://github.com/VedantShrirao18/Backend-Assignment/assets/122175901/763cb6d3-0df2-40d2-aa47-bc93ead69b8d)

![Screenshot from 2024-05-09 00-49-53](https://github.com/VedantShrirao18/Backend-Assignment/assets/122175901/04612332-bc96-4609-bb0f-4043f82bfb0c)



## Database Model

The database model for the Assistant includes the following fields:

- id: Unique identifier for the assistant (integer, auto-increment).
- name: Name of the assistant (string).
- mobile: Mobile - - number of the assistant (string).
- email: Email address of the assistant (string).
- salary: Salary of the assistant (decimal).
- city: City where the assistant resides (string).
- country: Country where the assistant resides (string).
- department: Department in which the assistant works (string).
- role: Role or position of the assistant within the company (string).


## Screenshots
![Screenshot from 2024-05-09 01-18-42](https://github.com/VedantShrirao18/Backend-Assignment/assets/122175901/1cd81b6a-4ede-4fea-a3bc-fc3693377722)

![Screenshot from 2024-05-08 22-34-04](https://github.com/VedantShrirao18/Backend-Assignment/assets/122175901/18f9755f-0c8c-494d-9633-bad467b11d77)






