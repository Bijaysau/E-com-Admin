# 🛠️ Worncom Admin Panel

Welcome to the **Worncom Admin Panel**, a powerful and intuitive dashboard to manage products, orders, and other administrative tasks for your e-commerce platform.

## 🚀 Features

- ✅ **Add Products**: Easily add new products with relevant details.
- 📦 **Product Management**: View, update, or remove products in the store.
- 🗺️ **Change Delivery Status**: Update product delivery statuses.
- 🔄 **Order Management**: Track orders and update their status (e.g., Pending, Shipped, Delivered).
- 🔔 **Notifications**: Get instant feedback on your actions with toast notifications.

## 📂 Project Structure

Here’s a brief overview of the directory structure for this project:


├── assets/ # Contains images and icons
│ ├── add_icon.png # Icon for Add Product
│ ├── list_icon.png # Icon for Product List
│ ├── logo.png # Company Logo
│ ├── logo1.png # Secondary Logo
│ ├── order_icon.png # Icon for Orders
│ └── parcel_icon.svg # SVG icon for Parcel
│
├── components/ # React components for various UI elements
│ ├── Login.jsx # Login page component
│ ├── Navbar.jsx # Navbar for navigating the panel
│ ├── Sidebar.jsx # Sidebar navigation
│
├── pages/ # Main page components
│ ├── Add.jsx # Add new product page
│ ├── List.jsx # Product listing page
│ ├── Orders.jsx # Order management page
│ ├── App.jsx # Root component with routes
│
├── public/ # Public static files
│ ├── d.png # Placeholder image
│ └── vite.svg # Vite logo
│
├── src/ # Source code folder
│ ├── assets.js

## 📂 ENV Structure
   VITE_BACKEND_URL = 'http://localhost:4000'

##  Step 2: Install Dependencies
Install the required dependencies for the project:

npm install
Step 3: Run the Development Server
Run the development server to start building your admin panel:

npm run dev
