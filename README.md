# SKY Rokcet Learning

# What is README file?
A README is a text file that introduces and explains a project. It contains information that is commonly required to understand what the project is about.

# Project Title
`Raju Chat Center`

# Project Description
The goal of this project is very simple, to reach a common men's day to day need for there quick snacks.

# Table of Contents

# How to install and run the project
1. Installation: `npm i`
2. Running App: `npx parcel index.html -p 8080`

# How to use the project
1. Installation: `npm i`
2. Running App: `npx parcel index.html -p 8080`
3. Open browser: `localhost:8080`

# How to commit code to git hub branch
branch URL: https://github.com/Vivekjaiswal43348/vivek_namaste_react

1. Stage your changes: `git add .`
2. Make a commit with your comment: `git commit -m <msg-here>`
3. Push your changes to git hub branch: `git push origin <branch-name-here>`

# RTK (App Store)
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - connect out store to our app
    - Slice (like cartSlice)
    - dispatch (action)
    - selector (read the latest store data)


# 01-03-2026 Writing Test cases in React JS:
- Types of testing:
    - DOM Testing Library: Base for React Testing Library.
    - unit testing: test cases for each component.
    - integration testing: test cases for a feature, a complete flow where multiple components will come into the picture
    - e2e testing: 
- React Testing libraries
- React/Babel/Parcel configuration

- First Test case: Writing SUM function and its test case
- 2nd Test use: By rendering it

- Medium level Tets cases (Unit test case): 
    - Test case may include app-store (react-redux), routing(browser router), reg-exp
    - Login/logout test case: fireEvent.click(loginBtn)
    - RestaurantCard test case: use render method, pass props, create a Mock data to pass it in the props

- Advance Test cases (Integration test cases): Covers a flow or a complete feature
    - Search flow: Add text, click search and check the new filtered count.
    - Test case do not know what is fetch method.
    - jest.fn(): we can mock JS fetch method using jest.fn({...}) function and return Promise & Mock data from this function.
    - Get HTML element reference: by adding data-testid in HTML element
    - act(): this is used to mock async-await feature of javascript in test cases.
    - click event: fireEvent.click();
    - 

    - describe("", ()=>{});
    - beforeAll( ()=>{} );
    - beforeEach( ()=>{} );
    - afterAll( ()=>{} );
    - afterEach( ()=>{} );


# API calls: 
- In test cases we does not make API calls, we just mock it.

# why Test case do not know fetch method?
Bcz test cases do not run on actual browser instead they run on browser like environment that is provided by JSDOM.

# what is full form of HMR?
HMR stands for Hot Module Replacement.
We can setup HMR for react project code execution and react test-cases execution both.

# can we setup HMR for test cases?
Yes, by adding a script in package.json:
like: "watch-test": "jest --watch"

# can we render multiple components inside render() method at a same time?
Yes,

# can we check which test cases are not covered under the existing test cases?
Yes, we can do it opening the below file in browser.
Path: coverage >> Icov-report >> index.html