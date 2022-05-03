Rosanne & Dylan's Reverse Engineer Project/Project 2

Website: Tattly https://tattly.com/ (we like the site, but want to sell something different)

MVP - Working Website with:
    CRUD
    Index
    Show items (key feature)
    Edit Product
    Delete Product
    Add product to sell (improvement, allow users to sell)
Database Models:
    Sellers ---> Products
    Products --> Reviews
Key Features
    Add reviews (key feature)
    Search (key feature)
    Show items (key feature)
Responsibilities:
    Rosanne:
        Wireframes, user stories, user flow
        User: CRUD and controller
        Heroku app setup/managment
        Partials and Genres views
        Documentation
        CSS
    Dylan:
        Server.js, db setup, file outline set up
        Mains: full CRUD and controller
        Reviews: full CRUD and controller
        API research
        Search bar functionality
    Both: 
        Add books, reviews and users to DB
        test/debug
        Check code for consistent styles and readability
    Together:
        Brainstorm
        Code Along set up


Wireframes: starting with cellphone friendly approach, we will ensure readability and 

User Stories:

    This website’s purpose is to allow users to buy and sell used books.  

    The navigation bar will have links to:
        home
        viewing all of our products
        about us section
        new account set up
    
    The home page welcomes the users and gives them a chance to explore books by genre.  The search bar allows users to search by title or author.
    ![Screen Shot 2022-05-02 at 9 53 00 PM](https://user-images.githubusercontent.com/6979738/166395499-32d08ab9-1f06-4ac3-850b-51d9db4669bc.png)


    A product page will display information about the product, the seller of the product, and reviews.

    Clicking through to a user page gives you a chance to look at the user's info section.

    Users are able to create new items to sell and link them to their profiles.

User Flow:![Screen Shot 2022-04-26 at 1 51 36 PM](https://user-images.githubusercontent.com/6979738/165663835-5e137c46-6e66-4921-ae27-ba1955e4200c.png)

DB Models and ERD: Reference

Features to add at a later date:
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

