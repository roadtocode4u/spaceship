---
title: S3 Bucket
description: "S3 Bucket "
hide_table_of_contents: true
---

### What is `Amazon S3 Bucket`?

- Amazon S3 `(Simple Storage Service)` bucket is part of `AWS`, It is used to store and manage data in the form of objects.

- A bucket is a container for objects (data files), similar to a folder in a traditional filesystem.

### Why `S3 Bucket`?

### Very secure:

- **Data Encryption**: Supports both server-side encryption (managed by AWS) and client-side encryption.

### Scalable:

- **Highly scalable**: S3 can store virtually unlimited amounts of data, making it ideal for growing applications or projects.

### How to create `s3 bucket`:

- firstly login into aws.
- Search `s3` into the search field, and click on `s3`.

   <img src="/aws/s3/01.png"  width="800px"/>

- Your will be on ` bucket` page, click on `create bucket` button

   <img src="/aws/s3/02.png"  width="800px"/>

- Now you are on the `create bucket` page before creating the bucket make sure you have selected the nearest region. `(In my case i have selected the mumbai)`

  <img src="/aws/s3/03.png"  width="800px"/>

  - Keep the bucket type as it is to `General purpose`

  - Bucket name should be unique.

  - Object Ownership would be the default as it is to `ACLs disabled `

  <img src="/aws/s3/04.png"  width="800px"/>

  - Uncheck the `Block all public access`, next it will show you a warning message `Turning off block all public access might result in this bucket and the objects within becoming public`,
    `Check` this.

  <img src="/aws/s3/05.png"  width="800px"/>

  - Keep the `Bucket Versioning` default as it is to `Disable`

  - Next `Tags` keep as it is to default.
  - keep `Default encryption` as it is to `Server-side encryption with Amazon S3 managed keys (SSE-S3)`

  <img src="/aws/s3/06.png"  width="800px"/>

- Disable the `Bucket Key` and click on `create bucket` button

  <img src="/aws/s3/07.png"  width="800px"/>

- Now you will on the bucket page, select your created bucket and click on it

  <img src="/aws/s3/08.png"  width="800px"/>

- Now you are on your bucket that you have selected click on upload button

  <img src="/aws/s3/09.png"  width="800px"/>

- Now you can select what to `upload file or folder`.

  <img src="/aws/s3/10.png"  width="800px"/>

- After selecting your data your data will be visible , you can see the type, size and name of your data. Next click on `Upload` button

  <img src="/aws/s3/11.png"  width="800px"/>

- Refresh the page and go back to your bucket and you will see all of your uploaded data

  <img src="/aws/s3/12.png"  width="800px"/>
