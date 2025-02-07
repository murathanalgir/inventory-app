# Inventory App

An inventory management application built using Node.js, TypeScript, Express, and Prisma.

## Features
- CRUD operations for managing inventory items
- MongoDB database with Prisma ORM
- RESTful API with Express.js
- TypeScript for type safety
- Authentication and authorization (optional)

## Technologies Used
- Node.js
- TypeScript
- Express.js
- Prisma
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/inventory-app.git
   cd inventory-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   DATABASE_URL=your_mongodb_url
   PORT=port
   ```

4. Run database migrations:
   ```sh
   npx prisma migrate dev --name init
   ```

5. Start the server:
   ```sh
   npm run dev
   ```

## API Endpoints

### Items
- `GET /items` - Get all inventory items
- `POST /items` - Add a new item
- `GET /items/:id` - Get a specific item
- `PUT /items/:id` - Update an item
- `DELETE /items/:id` - Delete an item

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License.

