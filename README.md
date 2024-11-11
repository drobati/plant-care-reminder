# Plant Care Reminder System

A simple API built with [Hono](https://hono.dev) and Deno 2 to manage plant care reminders. This project helps users track their plants’ watering schedules and maintenance needs.

## Features

- Add, update, and delete plant details, including watering frequency and last watered date.
- RESTful API structure for ease of integration.
- Environment support with Insomnia for streamlined API testing.

## Requirements

- **Deno**: Make sure Deno is installed. You can check with:
  ```
  deno --version
  ```
- **Deno Extension for VSCode**: For best development experience, install the Deno extension in VSCode. This helps with autocompletion, linting, and project configuration.

## Getting Started

1. **Clone the Repository**
   ```
   git clone https://github.com/yourusername/plant-care-reminder.git
   cd plant-care-reminder
   ```

2. **Run the Project**
   ```
   deno task start
   ```
   - This starts the server on `http://localhost:8000`.

3. **API Endpoints**

   - **GET /plants**: Retrieve all plants
   - **POST /plants**: Add a new plant
     - Request body example:
       ```json
       {
         "name": "Monstera",
         "wateringFrequency": 7
       }
       ```
   - **PUT /plants/:id**: Update a plant's details by ID
   - **DELETE /plants/:id**: Remove a plant by ID

## Testing with Insomnia

A collection of Insomnia requests is available to simplify API testing. 

They include post-request scripts that will save an id for other requests.

## Contributing

1. Fork the repository.
2. Create a new branch for your feature:
   ```
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```
   git commit -m "Add a new feature"
   ```
4. Push to your branch:
   ```
   git push origin feature-name
   ```
5. Open a Pull Request.

## License

This project is licensed under the MIT License.