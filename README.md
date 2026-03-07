🪐 **SKY Rocket Learning**

# **Project Title:** Fast Food Corner

## 📌 Project Description
This application addresses a simple, everyday need—fast snack ordering for the average person.

## 📄 Table of Contents

### ⚙️ Installation & Running

```bash
# install dependencies
npm i

# start the app on port 8080
npx parcel index.html -p 8080
```

Open your browser at: `http://localhost:8080`

### 🛠️ Usage

1. Execute the commands under “Installation & Running.”
2. Visit `localhost:8080` in your browser to begin using the app.

### 📁 Git Workflow

**Repository URL:** `https://github.com/Vivekjaiswal43348/vivek_namaste_react`

```bash
# stage changes
git add .

# commit with a message
git commit -m "<your message>"

# push to a branch
git push origin <branch-name>
```
### I am using nvm to manage multiple node versions in my windows OS if required:
- nvm -v: to check nvm installed version
- nvm install <node_version>
- nvm use <node_version>
- nvm list: to check list of all node versions in local system
- nvm uninstall <node_version>

- is there any alternative of nvm?
Yes, it is Volta

- How to generate comments automatic for code documentation?
Ans: Type /** <press enter> */
    or by adding extion: Doxygen by Christoph Schlosser

### 🧠 Redux Toolkit (RTK) Overview

To set up RTK in this project:

1. Install `@reduxjs/toolkit` and `react-redux`.
2. Create and configure the store.
3. Wrap your app in `<Provider>` to connect the store.
4. Define slices (e.g. `cartSlice`).
5. Dispatch actions (`dispatch(...)`).
6. Select state using selectors (e.g. `useSelector`).


## 01-03-2026 Writing Test cases in React JS:
- Types of testing:
    - Manual Testing: it will be done by testers manually
    - [DOM Testing Library](https://testing-library.com/docs/react-testing-library/intro): Base for React Testing Library. And it is also a base testing lib for other JS frameworks like Angular, Vue.
    - unit testing: test cases for each component.
    - integration testing: test cases for a feature, a complete flow where multiple components will come into the picture
    - e2e testing: 

- npm installations for react testing:
    ```
    npm i -D @testing-library/react
    npm i -D jest
    npm install --save-dev babel-jest @babel/core @babel/preset-env
    ```
- [React Testing Library is not an alternative to Jest](https://www.robinwieruch.de/react-testing-library/)


    - React Testing libraries: It is build on the top of "DOM Testing Library."
    - React/Babel/Parcel configuration: Since Parcel and Jest both uses Babel within them so we need to configure babel so that the common Babel( babel of Parcel and Jest) dependecies should be compatible with each other.
    - Parcel config: custom config is required to disable default parcel transpilation
    - why we need custom Parcel config?
        to use our custom babel.config.json file we need to disable default parcel config transpilation.

- Generate a basic configuration file
    Old: npx jest init
    New: npm init jest@latest
- issue: Test environment jest-environment-jsdom cannot be found.
    ```
    npm install --save-dev jest-environment-jsdom
    ```

- __ (two under scores): called as dunder

https://www.robinwieruch.de/react-testing-library/
- First Test case: Writing SUM function and its test case
- 2nd Test use: By rendering a react component using render() method

- Medium level Tets cases (Unit test case): 
    - Test case failed: Test case may include app-store (react-redux), routing(browser router), reg-exp which is not an in build feature of JSDOM.
    - Login/logout test case: fireEvent.click(loginBtn)
    - RestaurantCard test case: use render() method, pass props, create a Mock JSON data to pass it in the props

- Advance Test cases (Integration test cases): Covers a flow or a complete feature
    - Search flow: Add text, click search and then check the new filtered items count over the screen.
    - Test case do not know what is fetch method.
    - jest.fn(): we can mock JS fetch method using jest.fn({...}) function and return Promise & Mock data from this function.
    - Get HTML element reference: by adding ``` data-testid ``` in HTML element
    - async-await & act(): this is used to mock async-await feature of javascript in test cases.
    - click event: fireEvent.click();


    - describe("", ()=>{});
    - beforeAll( ()=>{} );
    - beforeEach( ()=>{} );: might be use for clean up process.
    - afterAll( ()=>{} );
    - afterEach( ()=>{} );


#### API calls: 
- In test cases we do not make API calls, we just mock it.

#### why Test case do not know fetch method?
Bcz test cases do not run on actual browser instead they run on browser like environment that is provided by JSDOM.

#### what is full form of HMR?
HMR stands for Hot Module Replacement.
We can setup HMR for react project code execution and react test-cases execution both.

#### can we setup HMR for test cases?
Yes, by adding a script in package.json:
like: "watch-test": "jest --watch"

#### can we render multiple components inside render() method at a same time?
Yes,
Like:
```
render(<>
    <Component_A></Component_A>
    <Component_B></Component_B>
</>);
```

#### can we check which test cases are not covered under the existing test cases?
Yes, we can do it opening the below file in browser.
Path: coverage >> Icov-report >> index.html.
And then by opening each individual component we can see which lines of code need to be covered under test cases.



Some Pending work:
- Complete Cart Section: this is pending from Create a Store class
- Create a Error Boundary component and check its working while your app breaks.
- Store: on page refresh data should not be lost, right now it is not persistent.



## Use this website to create and edit a Readme File:
[Readme file online editer](https://readme.so/editor)



