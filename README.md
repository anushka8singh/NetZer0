# NetZero – Intelligent Subscription Risk & Savings Analyzer

## Overview

NetZero is a full-stack fintech platform designed to help users understand, monitor, and optimize their recurring subscription spending.

Unlike traditional expense trackers that simply display transaction history, NetZero focuses on subscription intelligence. The platform automatically imports banking transactions, detects recurring payments, identifies active subscriptions, evaluates financial risk, and generates personalized savings recommendations.

By integrating directly with banking transaction data through Plaid, NetZero eliminates manual expense tracking and provides users with actionable financial insights.

---

# Problem Statement

Modern consumers often subscribe to multiple digital services including:

* Netflix
* Spotify
* Amazon Prime
* Adobe Creative Cloud
* YouTube Premium
* ChatGPT Plus
* Cloud Storage Services
* Productivity Tools

Over time these recurring payments accumulate and frequently continue charging users long after they stop actively using the service.

Most financial applications can answer:

* Where was money spent?

But fail to answer:

* Which subscriptions are actually being used?
* Which subscriptions are costing the most annually?
* Which subscriptions are potentially wasteful?
* Which services overlap with each other?
* How much money could be saved by optimizing subscriptions?

NetZero addresses these problems through automated transaction analysis and subscription intelligence.

---

# Key Features

## Authentication System

* JWT Authentication
* Secure Password Hashing using bcrypt
* Protected Routes
* User Session Management
* Future-ready Google Authentication Architecture

---

## Bank Integration

* Plaid Sandbox Integration
* Secure Bank Linking Workflow
* Link Token Generation
* Public Token Exchange
* Access Token Management

---

## Transaction Management

* Automated Transaction Import
* Historical Transaction Storage
* Spending Categorization
* Merchant Identification
* Transaction Normalization

---

## Subscription Detection Engine

* Recurring Transaction Detection
* Billing Frequency Identification
* Monthly Subscription Detection
* Quarterly Subscription Detection
* Yearly Subscription Detection
* Subscription Portfolio Generation

---

## Risk Analysis Engine

* Subscription Risk Scoring
* High-Cost Subscription Detection
* Duplicate Service Detection
* Annual Cost Calculation
* Subscription Burden Analysis

---

## Savings Recommendation Engine

* Personalized Savings Insights
* Cost Optimization Suggestions
* Potential Monthly Savings Calculation
* Potential Annual Savings Calculation
* Subscription Consolidation Recommendations

---

## Analytics Dashboard

* Spending Overview
* Subscription Overview
* Monthly Cost Breakdown
* Risk Distribution
* Savings Opportunities
* Financial Health Insights

---

# Technology Stack

## Frontend

* React
* TypeScript
* Vite
* React Router
* Axios
* Context API

## Backend

* Node.js
* Express.js
* TypeScript
* JWT Authentication
* Bcrypt

## Database

* MongoDB Atlas
* Mongoose ODM

## External Services

* Plaid API (Sandbox)

# High-Level System Architecture

```text
┌─────────────────────────────────────────────┐
│                 React Frontend              │
│                                             │
│ Dashboard │ Analytics │ Bank Connect │ Auth │
└────────────────────┬────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────┐
│               Express Backend               │
│                                             │
│ Auth │ Plaid │ Transactions │ Analytics     │
└──────────────┬──────────────────────────────┘
               │
     ┌─────────┴─────────┐
     ▼                   ▼

┌──────────────┐   ┌──────────────┐
│ MongoDB      │   │ Plaid API    │
│ Atlas        │   │ Sandbox      │
└──────┬───────┘   └──────┬───────┘
       │                  │
       ▼                  ▼

┌─────────────────────────────────────────────┐
│          Transaction Processing Layer       │
└────────────────────┬────────────────────────┘
                     ▼

┌─────────────────────────────────────────────┐
│         Subscription Detection Engine       │
└────────────────────┬────────────────────────┘
                     ▼

┌─────────────────────────────────────────────┐
│            Risk Analysis Engine             │
└────────────────────┬────────────────────────┘
                     ▼

┌─────────────────────────────────────────────┐
│        Savings Recommendation Engine        │
└─────────────────────────────────────────────┘
```

---

# Authentication Engine Workflow

```text
User Registration/Login
           │
           ▼
Input Validation
           │
           ▼
Password Hashing (bcrypt)
           │
           ▼
Store User in MongoDB
           │
           ▼
Generate JWT Token
           │
           ▼
Return Authenticated Session
```

---

# Bank Connection Workflow

```text
User
 │
 ▼
Connect Bank
 │
 ▼
Frontend Requests Link Token
 │
 ▼
Backend Calls Plaid
 │
 ▼
Plaid Generates Link Token
 │
 ▼
Frontend Opens Plaid Link
 │
 ▼
User Selects Bank
 │
 ▼
Plaid Returns Public Token
 │
 ▼
Backend Exchanges Public Token
 │
 ▼
Plaid Returns Access Token
 │
 ▼
Store Access Token
 │
 ▼
Bank Connection Complete
```

---

# Transaction Processing Workflow

```text
Access Token
      │
      ▼
Fetch Transactions
      │
      ▼
Normalize Transaction Data
      │
      ▼
Store Transactions
      │
      ▼
Categorize Spending
      │
      ▼
Prepare Data For Analysis
```

---

# Subscription Detection Engine Workflow

```text
Imported Transactions
         │
         ▼
Group Transactions By Merchant
         │
         ▼
Identify Recurring Charges
         │
         ▼
Calculate Billing Frequency
         │
         ▼
Monthly / Quarterly / Yearly
         │
         ▼
Generate Subscription Profile
         │
         ▼
Store Subscription Record
```

Example:

Netflix

Jan 18 → Feb 18 → Mar 18 → Apr 18

↓

Monthly Subscription Detected

---

# Risk Analysis Engine Workflow

```text
Detected Subscription
          │
          ▼
Calculate Monthly Cost
          │
          ▼
Calculate Annual Cost
          │
          ▼
Check Category Overlap
          │
          ▼
Evaluate Subscription Burden
          │
          ▼
Generate Risk Score
```

Example:

Adobe Creative Cloud

₹4,230/month

↓

Annual Cost = ₹50,760

↓

High Risk Subscription

---

# Savings Recommendation Engine Workflow

```text
Risk Analysis Results
          │
          ▼
Identify High Cost Services
          │
          ▼
Identify Duplicate Services
          │
          ▼
Estimate Potential Savings
          │
          ▼
Generate Recommendations
```

Example Output:

* Cancel Adobe Stock
* Downgrade Dropbox Plan
* Remove Duplicate Streaming Service

Potential Annual Savings:

₹12,000+

---

# Database Architecture

## Users Collection

```text
User
│
├── name
├── email
├── password
├── plaidConnected
├── plaidAccessToken
├── createdAt
└── updatedAt
```

---

## Transactions Collection

```text
Transaction
│
├── userId
├── transactionId
├── merchantName
├── amount
├── category
├── date
└── createdAt
```

---

## Subscriptions Collection

```text
Subscription
│
├── userId
├── merchantName
├── frequency
├── monthlyCost
├── annualCost
├── riskScore
└── status
```

---

# Backend Request Lifecycle

```text
Frontend Request
       │
       ▼
Express Route
       │
       ▼
Controller
       │
       ▼
Service Layer
       │
       ▼
Database / Plaid API
       │
       ▼
Response
       │
       ▼
Frontend UI
```

---

# Local Development Setup


## Backend Setup

```bash
cd backend

npm install
```

### Required Backend Dependencies

```bash
npm install express mongoose cors dotenv jsonwebtoken bcryptjs plaid

npm install -D typescript ts-node-dev @types/node @types/express @types/jsonwebtoken @types/bcryptjs
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

### Required Frontend Dependencies

```bash
npm install react-router-dom axios
```

---

## Start Backend

```bash
cd backend

npm run dev
```

---

## Start Frontend

```bash
cd frontend

npm run dev
```

---

