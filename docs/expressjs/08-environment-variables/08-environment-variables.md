---
title: "ENV"
description: "Environment variable"
hide_table_of_contents: true
---

## What is ENV ?

Environment variables are key-value pairs used to configure application settings without hardcoding them into the source code. They are commonly used to manage sensitive data, such as API keys, database credentials, and configuration details, across different environments (development, testing, production).

## Why Use Environment Variables?

1. **Security:** Avoid storing sensitive information in the codebase.
2. **Flexibility: ** Easily switch configurations for different environments.
3. **Consistency:** Ensure predictable application behavior across environments.

## Defining Environment Variables

1. create .env file in the `root` of your project.

 <img src="/expressjs/07/01.png"  width="600px"/>

2. keep all of your `credentials` here.

3. Add .env to your `.gitignore `file to avoid committing sensitive information to version control.

4. install package `dontenv`

```js

npm install dotenv


```

5. Import and Configure dotenv.

```js
import dotenv from "dotenv";

dotenv.config();
```

6. Accessing Environment Variables.

```js
process.env.VARIABLE_NAME;
```

   <img src="/expressjs/07/02.png"  width="600px"/>

### . On Deployment Platforms

1. **AWS:** Use AWS Secrets Manager or Systems Manager Parameter Store.
2. **Vercel/Netlify/render**: Add environment variables in the project settings dashboard.
3. **Docker: ** Use --env-file or pass -e flags when running containers.
