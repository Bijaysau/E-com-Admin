# 🛠️ Worncom Admin Panel

Welcome to the **Worncom Admin Panel**, your powerful and intuitive dashboard designed to streamline product and order management for your e-commerce platform. With this admin panel, you can efficiently manage your store's inventory, track orders, and stay updated on delivery statuses.

## 🚀 Features

- ✅ **Add Products**: Quickly add new products with all the relevant details, including name, price, and images.
- 📦 **Product Management**: Easily view, update, or remove products in your store.
- 🗺️ **Change Delivery Status**: Update and track product delivery statuses (e.g., Pending, Shipped, Delivered).
- 🔄 **Order Management**: Efficiently manage and update the status of customer orders.
- 🔔 **Instant Notifications**: Receive instant feedback on your actions with toast notifications for a smooth user experience.

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
│ ├── assets.js # Asset management

bash
Copy
Edit

## 🛠️ Environment Setup

### Step 1: Clone the Repository
Clone this repository to your local machine:

```bash
git clone <repository-url>
cd worncom-admin-panel
Step 2: Install Dependencies
Install the required dependencies for the project:

bash
Copy
Edit
npm install
Step 3: Run the Development Server
Run the development server to start building your admin panel:

bash
Copy
Edit
npm run dev
Your admin panel will be live on http://localhost:3000.

📂 ENV Variables
Make sure to set up your environment variables in a .env file:

env
Copy
Edit
VITE_BACKEND_URL='http://localhost:4000'
This will ensure proper connection to your backend API.

👨‍💻 Development Notes
This project is built using React and Vite for fast and efficient development.

You can modify components under the components/ directory for UI changes.

For managing product data and orders, the backend API should be set up and running on the specified VITE_BACKEND_URL.

🎨 UI Components
Navbar: Contains links for easy navigation within the admin panel.

Sidebar: A collapsible sidebar with links to manage products, orders, and more.

Toast Notifications: Informative feedback for successful or failed actions.

✨ Future Features
🚀 Authentication: Secure the admin panel with authentication (JWT, OAuth).

🔒 Permissions: Admin roles with specific permissions for different user levels.

📈 Analytics Dashboard: Track sales, product performance, and user activities.
