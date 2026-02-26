# Assignment 2 – E-Commerce Product API

## Live Deployment
Render Link:  
https://backend-deploy-assignment-2.onrender.com  

Postman Documentation:  
https://documenter.getpostman.com/view/50841251/2sBXcGFLTc  

---

## Objective

Build a REST API using Express.js to manage product data using an in-memory JSON array.

Requirements:

- 3 GET routes  
- 1 POST route  
- 3 PUT routes  
- Follow REST principles  
- Use correct HTTP status codes  
- No database  
- No validation library  
- No authentication  

---

## Tech Stack

- Node.js  
- Express.js  
- CORS  

---

## Product Structure

Each product contains:

- id  
- name  
- category  
- price  
- stock  
- rating  

All data is stored and managed dynamically using an in-memory array.

---

## API Routes

### GET Routes

- GET /products — Return all products (200)  
- GET /products/:id — Return product by ID (200 / 404)  
- GET /products/category/:categoryName — Return products by category (200)  

### POST Route

- POST /products — Add new product, auto-generate ID (201)  

### PUT Routes

- PUT /products/:id — Replace entire product except ID (200 / 404)  
- PUT /products/:id/stock — Update stock only (200 / 404)  
- PUT /products/:id/price — Update price only (200 / 404)  

---

## Technical Implementation

- Uses express()  
- Uses express.json()  
- Uses cors()  
- Proper middleware order maintained  
- Status codes used: 200, 201, 404  
- Fully in-memory (no database)

---

## Run Locally

git clone <your-github-repo-link>  
cd project-folder  
npm install  
node index.js  

Server runs on:

http://localhost:3000

---

## Submission Includes

- GitHub repository  
- README with routes  
- Postman documentation (all 7 routes)  
- Render deployment  
- Public working API  

---

Author:  
Saptak Bhattacharyya  
Assignment 2 – E-Commerce Product API
