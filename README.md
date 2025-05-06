# 🛠️ Worncom Admin Panel

Welcome to the **Worncom Admin Panel** — a powerful, intuitive dashboard designed to streamline product and order management for your e-commerce platform. With this panel, you can manage inventory, track orders, and stay updated on delivery statuses, all in one place.

---

## 🚀 Key Features

- ✅ **Add Products** – Quickly add new products with name, price, images, and more.
- 📦 **Product Management** – View, edit, or delete existing products easily.
- 📍 **Delivery Status Updates** – Track and update delivery statuses like *Pending*, *Shipped*, and *Delivered*.
- 🔄 **Order Management** – Manage customer orders and update their status effortlessly.
- 🔔 **Real-time Notifications** – Get instant feedback via toast notifications for your actions.

---

## 📁 Project Structure

```bash
worncom-admin-panel/
├── assets/           # Icons and images
│   ├── add_icon.png
│   ├── list_icon.png
│   ├── logo.png
│   ├── logo1.png
│   ├── order_icon.png
│   └── parcel_icon.svg
│
├── components/       # Reusable UI components
│   ├── Login.jsx
│   ├── Navbar.jsx
│   └── Sidebar.jsx
│
├── pages/            # Page-level components
│   ├── Add.jsx
│   ├── List.jsx
│   ├── Orders.jsx
│   └── App.jsx
│
├── public/           # Static files
│   ├── d.png
│   └── vite.svg
│
├── src/
│   └── assets.js     # Asset manager
```

---

## ⚙️ Environment Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd worncom-admin-panel
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Your admin panel will be live at: [http://localhost:3000](http://localhost:3000)

---

## 🌐 Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_BACKEND_URL='http://localhost:4000'
```

This will ensure proper connection to your backend API.

---

## 🧑‍💻 Development Notes

- Built using **React** and **Vite** for fast and efficient development.
- Modify UI elements under the `components/` directory.
- Ensure backend API is running on the URL specified in the `.env` file.

---

## 🎨 UI Overview

- **Navbar** – Top navigation for quick access to sections.
- **Sidebar** – Collapsible sidebar with links to manage products, orders, and more.
- **Toast Notifications** – Feedback system for successful or failed actions.

---

## 🌟 Upcoming Features

- 🔐 **Authentication** – Secure the admin panel using JWT or OAuth.
- 👥 **Permissions** – Role-based access control for multiple admin types.
- 📊 **Analytics Dashboard** – Track sales, user activity, and product performance.

---

## 📬 Feedback or Contributions?

We welcome contributions! Please submit a pull request or open an issue if you have suggestions.

---

Thanks for using **Worncom Admin Panel**! 💼
