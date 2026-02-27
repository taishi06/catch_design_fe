# Frontend Application

The Frontend structure of this application was built using React + Vite. I have implemented a simple login authentication which allows the user to view the customers data when there is an available active session.

## Run node package installation

Run `npm install` from your terminal on the `fe_dev_test` folder.

## Start the Frontend Application

Run `npm run dev` from your Terminal to start the frontend application from the `fe_dev_test` folder. Visit the URL generated from your terminal after running the command. This is usually http://localhost:5173, if not copy and paste the URL that was generated.

## Payload and Data

Payload samples are preset on the postman collection, feel free to test or play with it.

### api/login sample response

```
{
    "message": "Login successful",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...."
}
```

### api/customers sample response

```
{
    "data": [
        {
            "id": 1,
            "first_name": "AAAA",
            "last_name": "AAAAAA",
            "email": "aaa@example.com",
            "gender": "Female",
            "ip_address": "123.456.789",
            "company": "A Company",
            "city": "A city",
            "title": "Software Engineer",
            "website": "https://aaaaaa.com"
        },
		// and so on
		.....
    ],
    "pagination": {
        "current_page": 1,
        "last_page": 100,
        "per_page": 10,
        "total": 1000
    }
}
```
