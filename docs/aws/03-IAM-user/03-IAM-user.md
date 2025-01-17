---
title: IAM user
description: "How to create IAM user"
hide_table_of_contents: true
---

### What is `AWS IAM`?

- AWS IAM `(Identity and Access Management)` helps `securely ` manage access to `AWS resources`. It allows you to control who can access what by creating `users`, `groups`, and `roles` with specific `permissions`. This ensures that only `authorized `people or services can `perform actions` on your resources.

### Step:1. Login to `aws`

- Open the browser and search https://aws.amazon.com/
- Login with `root user`

### Step:2. Finally you are on your dashboard

   <img src="/aws/iam-user/aws-6.png"  width="800px"/>

### Step:3. Type `IAM` in the `search input box` and click on the top result

<img src="/aws/iam-user/aws-7.png"  width="800px"/>

### Step:4. Next you'll be on `IAM Dashboard`.

- Now you see the `Users group`,` Users`, `Roles` by default Aws gives 2 roles , `Policies` and `Identity Provider`

   <img src="/aws/iam-user/aws-8.png"  width="800px"/>

- At top you will see `Add MFA` (multi-factor authentication )
- Click on `Add MFA`

  <img src="/aws/iam-user/aws-9.png"  width="800px"/>

- You will be redirected to the` security credential` page,

- Enter any name into the `MFA device name`, (whenever anyone wil try to login your account these things is going to asked by that user. )

- Now, next select your `MFA device` .
  <img src="/aws/iam-user/aws-10.png"  width="800px"/>

- At last click on `next button`
- Next you'll see the` google verification popup`
- Enter the lock-screen password of that devices where that email is logged-in for the confirmation
  <img src="/aws/iam-user/aws-11.png"  width="800px"/>

- Create a recovery pin and click on confirm.

  <img src="/aws/iam-user/aws-12.png"  width="800px"/>

  - Now you can accounts details.

  1. Account Name
  2. Email Address
  3. AWS account id
  4. Canonical user ID, etc...

  <img src="/aws/iam-user/aws13.png"  width="800px"/>
