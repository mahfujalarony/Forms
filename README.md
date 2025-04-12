#  Multi-Step Form with Validation

A front-end developer task to build a multi-step form using **Next.js App Router**, **React Hook Form**, **Zod**, and **TailwindCSS**.

##  Project Overview

This project demonstrates how to create a user-friendly multi-step form with proper validation, step-wise navigation, and form data management using modern tools and libraries.

##  Tech Stack

- **Next.js (App Router)**
- **React Hook Form** – for form state management
- **Zod** – for schema-based form validation
- **TailwindCSS** – for responsive and modern UI styling
- **API** React Query / RTK Query – to simulate API calls

##  Form Steps

###  Step 1: Personal Information
- Full Name _(required)_
- Email _(required, valid format)_
- Phone Number _(required, minimum 10 digits)_

###  Step 2: Address Details
- Street Address _(required)_
- City _(required)_
- Zip Code _(required, numeric, min 5 digits)_

### Step 3: Account Setup
- Username _(required, minimum 4 characters)_
- Password _(required, minimum 6 characters)_
- Confirm Password _(must match password)_

##  Features

- Multi-step form with "Next" and "Previous" navigation
- **Zod** validation for each step
- Error messages shown under each invalid field
- Final step shows a **summary** before submission
- Form data managed via **useState/useReducer**
- Submitted data is logged to the **console**

##  Bonus Features

- API submission simulation using **React Query / RTK Query**
- **Dark mode** support with TailwindCSS
- Fully responsive layout for mobile and desktop

##  Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/mahfujalarony/multi-step-form.git
cd multi-step-form
