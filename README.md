#Test Assignment

## Instructions

### 1. Clone repository

### 2. Install Dependencies
This project uses Node.js and Playwright. You need to install the required dependencies using npm:

```bash
npm install
npx playwright install
npm install axios
```

### 3. Write Your Tests
Create and write your tests in the tests/ directory. The test file to modify is payment_gateway.spec.js. The tests will use Axios to interact with the mock payment gateway API and Playwright for any browser automation you may need.<br />
Feel free to enhance this script with more test cases or validations as needed.

### 4. Run the Tests Locally
Once you have written your tests, you can run them locally to make sure everything works as expected. To run the tests, use the following command:

```bash
npx playwright test
```
This will run the tests in headless mode by default (without opening the browser). If you want to see the browser during test execution, you can run:

```bash
npx playwright test --headed
```
You can also run specific tests by specifying the test file:

```bash
npx playwright test tests/payment_gateway.spec.js
```

### 5. Commit and Push Your Changes
Once you are satisfied with your test cases, commit your changes.

### 6. Share the repository with us
As your repo is not public, share with **elriianova** and **ulyssesmurja** github users and notify the recruiter. Then we'll review your submission.

<br />
<br />
<br />