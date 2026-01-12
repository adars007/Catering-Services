# 🍽️ Catering Services – Data Analytics & Business Insights Project

## 📌 Project Overview

This project demonstrates a **real-world business analytics case study** built around a Catering Services platform. It combines:

* 📊 **Data Analysis (CSV + Excel dashboards)**
* 🧠 **Business insights & KPIs**
* 🌐 A functional **web-based catering application**
* 🧾 Admin dashboard for managing products and orders

The goal of this repository is to showcase my profile as a **Data Analyst with strong business understanding**, not just a developer.

This project is designed to be **portfolio-ready for recruiters**.

---

## 🎯 Business Problem

A catering business wants to understand:

* How much revenue is generated over time
* Which menu items sell the most
* What type of events generate higher revenue
* Customer segmentation (new vs frequent customers)
* Order trends across days and months
* Payment completion performance

This project answers these questions using **structured data and dashboards**.

---

## 📂 Dataset Used

The analysis is based on structured **CSV / Excel datasets** representing:

* Orders data
* Revenue by month
* Event types (Weddings, Corporate, Private, Public)
* Menu items performance
* Customer segments
* Payment status

The dataset simulates a realistic business environment suitable for analytics use cases.

---

## 📊 Dashboards & Analysis Included

This project includes rich analytical dashboards covering:

### 🔹 Key KPIs

* Total Revenue: **$512,075**
* Total Orders: **6,832**
* Active Customers: **2,354**
* Order Completion Rate: **88%**

### 🔹 Visual Analysis

* 📈 Sales & Revenue Trend over time
* 🍛 Top Selling Menu Items
* 📦 Order Volume by Day of Week
* 💳 Payment Status (Completed, Pending, Failed)
* 👥 Customer Segmentation (Frequent, New, Occasional)
* 🎉 Revenue Breakdown by Event Type

These visuals reflect how analysts present **data-driven insights to stakeholders**.

---

## 🧠 Business Insights Generated

This project demonstrates the ability to extract insights such as:

* A small number of dishes contribute to most revenue (Pareto effect)
* Corporate events contribute the highest revenue share (~40%)
* Frequent customers generate significantly more value than new users
* Most payments are completed within 1–3 days, but a risk segment exists beyond 14 days
* Orders peak toward weekends, helping with staffing decisions

These are **actionable business findings**, not just visuals.

---

## 🛠 Tools & Skills Demonstrated

### 📊 Data Analytics Skills

* Data cleaning & structuring (CSV / Excel)
* KPI identification
* Trend analysis
* Business interpretation
* Dashboard storytelling

### 🧰 Technical Skills

* Excel Dashboards & Charts
* CSV-based analysis
* Data visualization principles
* GitHub documentation
* Web application understanding

> This shows I can work with both **data and real-world business context**, which is critical for Data Analyst roles.

---

## 🌐 Application Context (Added Advantage)

In addition to analytics, this project also includes:

* A live catering website
* Login & user flow
* Admin panel to add/manage items
* Product & order management interface

This strengthens the project by showing how **data originates from real systems**, which is highly valuable for analyst roles working with product or business teams.

---

## 📌 Why This Project Is Valuable for Recruiters

Recruiters can evaluate:

* My ability to understand business problems
* How I structure and interpret datasets
* How I present insights visually
* My understanding of KPIs and metrics
* Real-world analytical thinking

This aligns closely with expectations for:

* Data Analyst
* Business Analyst
* Reporting Analyst
* Junior Analytics roles

---

## 🚀 How to Explore This Project

1. Review the dashboard screenshots in the repository
2. Open the CSV / Excel dataset files
3. Observe how insights align with visuals
4. Read the business interpretation sections

This project is meant to be reviewed like a **real analytics case study**.

---

## 📈 Future Enhancements

* Power BI interactive dashboard
* SQL-based data modeling
* Python (Pandas) analysis notebook
* Automated reporting
* Advanced cohort analysis

---



---



---

## Repository Structure 



```
/catering-analytics-project
│
├── data/
│   └── catering_data_analyst_project.xlsx
│
├── dashboards/
│   └── dashboard_screenshots.png
│
├── analysis/
│   └── insights_summary.md
│
├── README.md
```

## Features

- **Order Management**: Place, update, and track catering orders.
- **Payment Integration**: Secure payment handling through Stripe.
- **Image Upload**: Upload and manage images of catering menus and dishes using Multer.
- **Real-time Updates**: Track orders and statuses in real-time.
- **User Authentication**: Secure user sign-up, login, and session management.
- **Admin Panel**: Manage orders, payments, and user inquiries.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payment Gateway**: Stripe
- **File Upload**: Multer
- **Bundler**: Vite

## Installation

### Prerequisites

- Node.js (>=14)
- MongoDB

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/catering-services.git
   cd catering-services
2. Install Dependencies
   -npm install
3.Set up environment variables
-MONGODB_URI=your_mongodb_connection_string
-STRIPE_SECRET_KEY=your_stripe_secret_key
-PORT=5000
Usage
Running the Project Locally
1. Make sure MongoDB is running.
2. Open two terminals: one for the backend (npm run server) and one for the frontend (npm run start).
3. Navigate to http://localhost:3000 to view the application.
**API Routes**
**User Routes**
1. POST /api/auth/register - Register a new user
2. POST /api/auth/login - User login
3. GET /api/auth/logout - User logout
**Order Routes**
1. POST /api/orders - Place a new order
2. GET /api/orders/:userId - Get orders for a specific user
3. PATCH /api/orders/:orderId - Update order status
**Payment Routes**
1. POST /api/payments - Process a payment with Stripe
2. Image Upload Routes
3. POST /api/upload - Upload a new image (uses Multer middleware)
## 👨‍💻 About Me

**Adars Kumar Singh**
Computer Science Graduate (2024)
Aspiring Data Analyst with strong interest in:

* Data Analytics
* Business Intelligence
* Dashboarding
* SQL, Excel, Power BI

---

## 📬 Contact

* GitHub: [https://github.com/adars007](https://github.com/adars007)


---

⭐ If you found this project interesting, consider starring the repository. This project is part of my professional Data Analyst portfolio.
