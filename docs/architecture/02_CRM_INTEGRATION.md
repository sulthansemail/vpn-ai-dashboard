# CRM Integration Specification

Purpose

Define the minimum data required from the CRM.

The CRM remains the system of record.

The Operations Platform synchronizes data into its own database.

Synchronization Interval

Default

Every 5 minutes

------------------------------------------------------------

Dashboard

Required

Revenue

Subscribers

Plans

Referrals

Revenue by plan

User growth

------------------------------------------------------------

Users

Required Fields

User ID

Email

Country

Subscription

Subscription Status

Created Date

Expiry Date

Referral

Lifetime Revenue

------------------------------------------------------------

Servers

Required

Server ID

Hostname

Country

City

Provider

Protocol

Status

Created Date

------------------------------------------------------------

Sessions

Required

Session ID

User ID

Server

Protocol

Start Time

End Time

Duration

Platform

Country

------------------------------------------------------------

Payments

Required

Payment ID

Amount

Gateway

Currency

Status

Created Time

------------------------------------------------------------

Referrals

Required

Referral Code

Owner

Reward

Usage

Revenue Generated

------------------------------------------------------------

Future APIs

Server deployment

Notifications

Remote actions

Webhook support