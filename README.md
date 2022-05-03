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
            ![Screen Shot 2022-05-02 at 9 53 00 PM](https://user-images.githubusercontent.com/6979738/166395499-32d08ab9-1f06-4ac3-850b-51d9db4669bc.png)
        viewing all of our products
            ![Screen Shot 2022-05-02 at 9 53 31 PM](https://user-images.githubusercontent.com/6979738/166395601-d3853994-78f0-4630-9395-eb280eda3d9d.png)
        about us section!
            [Screen Shot 2022-05-02 at 9 53 50 PM](https://user-images.githubusercontent.com/6979738/166395657-b65bc429-8f98-4807-ac63-14f3b241c8a9.png)
        new account set up
    ![Screen Shot 2022-05-02 at 9 54 16 PM](https://user-images.githubusercontent.com/6979738/166395675-e09f4984-6d06-425a-ab7c-93f3e643e890.png)

    The home page welcomes the users and gives them a chance to explore books by genre.  The search bar allows users to search by title or author.

    A product page will display information about the product, the seller of the product, and reviews.
        ![Screen Shot 2022-05-02 at 9 55 47 PM](https://user-images.githubusercontent.com/6979738/166395697-15897da2-f51f-4144-9ee0-eb4a4126481e.png)
    
    Clicking through to a user page gives you a chance to look at the user's info section.
        ![Screen Shot 2022-05-02 at 10 20 06 PM](https://user-images.githubusercontent.com/6979738/166395791-10680ea1-1a3b-4e9d-8c63-254c0849d456.png)
    
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
