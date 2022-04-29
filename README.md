Rosanne & Dylan's Used Book Store Planning Deliverable

Website: Tattly https://tattly.com/ (we like the site, but want to sell something different)

MVP - Working Website with:
    CRUD
    Index
    Show items (key feature)
    Edit Product
    Delete Product
    Add product to sell (improvement, allow users to sell)
Database Models:
    Sellers ---> products
    Products --> tags
Key Features
    Add reviews (key feature)
    Create Users (key feature)
    Show items (key feature)
Responsibilities:
    Rosanne:
        Wireframes, user stories, user flow
        Create User
        Edit User
        User Login
        User Profile
        Add review
    Dylan:
        file outline set up
        Server.js, db setup, 
        Show page and controller
        Index page and controller
        New.ejs and controller
        Reviews: all pages and controller
        API research
    Both: 
        Auth research/Learning
        Add books and users to DB
        Create reviews
        test/debug
        Check code for consistent styles and readability
    Together:
        Brainstorm
        Code Along for set up
        Auth back end work

Wireframes: starting with cellphone friendly approach, will change format for computer screens depending on time constraints.

![1](https://user-images.githubusercontent.com/6979738/165664061-f9e44e65-202e-4530-921e-cefd8f08da26.png)
![2](https://user-images.githubusercontent.com/6979738/165664101-4357e0b7-79bb-4031-96db-a1a69cbe6c77.png)
![3](https://user-images.githubusercontent.com/6979738/165664126-ff9797f2-9a8c-473a-9fbf-d62bdfc8e2a9.png)
![4](https://user-images.githubusercontent.com/6979738/165664183-874cfbfa-fab1-46cd-b38a-848faee0d7d5.png)
![5](https://user-images.githubusercontent.com/6979738/165664191-b9da6b1f-18df-4753-bc1e-d5bfe483303a.png)
![6](https://user-images.githubusercontent.com/6979738/165664202-ac63aadc-bbc7-44b1-bc15-584a0aac38ce.png)
![7](https://user-images.githubusercontent.com/6979738/165664213-3d436de3-2a9a-4ca7-b053-2c1238f16ede.png)
![8](https://user-images.githubusercontent.com/6979738/165664223-f4c8a67c-c589-466b-9f14-7def113ab3ad.png)

User Stories:

    This website’s purpose is to allow users to buy and sell used books.  

    Users with no login will only have access to index pages and show pages.  

    Users who log in will be able to access index and show pages, as well as add books to be sold, purchase books, edit books to be sold, add  reviews, and edit their user profile.

    All users will start at the main page where they can see the index, access show pages, and user logins.

User Flow:![Screen Shot 2022-04-26 at 1 51 36 PM](https://user-images.githubusercontent.com/6979738/165663835-5e137c46-6e66-4921-ae27-ba1955e4200c.png)

DB Models and ERD: Current plan is to use reference for users and reviews, but may change later in process (embed books)?

Bonus Features: (Ideas for after MVP, to be chosen based on desire/time available)
    Related books
    Use Sass
    Authenticate user login, sign up, logout, etc.
    Choose a local seller (meet at a local book store to save on shipping)
    User purchase history
    Report items/reviews
    Curate books  you are shown
    Create likes/lists for user (difficult)
    Book requests by users (for books they want to buy)
    Add cart (difficult)
    Add checkout (difficult)

