# React Redux + JWT Demo

This is a small React application created as part of a Self Directed
Research and Innovation Exercise to demonstrate:

-   Core Redux concepts:
    -   State
    -   Store
    -   Reducer
    -   Action
    -   Dispatch
    -   Subscribe
-   Basic JWT (JSON Web Token) concepts in a front-end application.

## Concepts

### Redux

Redux is a predictable state container for JavaScript apps. It is based
on a small set of core ideas.

0. State

The application data at any given moment. In this app, Redux state looks
like:

{ auth: { token: string | null, user: { sub, role, iat } | null, status:
“idle” | “loading” | “succeeded” | “failed”, error: string | null } }

1. Store

The single object that holds your application’s state. Provides:

-   getState()
-   dispatch(action)
-   subscribe(listener)

2. Reducer

A pure function (state, action) => newState.

3. Action

A plain JS object that describes what happened.

4. Dispatch

Sends an action to the store.

5. Subscribe

Listens to store changes.

### JWT (JSON Web Token)

JWT is a compact, URL-safe way to represent claims between two parties,
usually for authentication.

A JWT consists of: 
- Header: containing metadata like { "alg": "HS256", "typ": "JWT" }
- Payload (Claims): containing user data like { "sub": "student@example.com", "role": "student", "iat": 1732461234 }
- Signature (hash(header + payload + secretKey)): Validation to make sure token is not tampered

JWT Workflow:
- User logs in.
- Server validates credentials.
- Server returns a signed JWT.
- Client stores token.
- Client sends token in API requests:
- Authorization: Bearer <token>
- Server verifies signature.

## Application Overview

A small React app demonstrating JWT login and Redux workflow, featuring:
- Login using a simulated JWT
- Redux actions, reducers, dispatch flow
- Decoding JWT payload
- Using store.subscribe
- Clearing Redux state on logout

Tech Stack: React, Vite, Redux Toolkit, Reaxt-Redux
