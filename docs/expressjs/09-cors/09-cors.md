---
title: "CORS"
description: "CORS"
hide_table_of_contents: true
---

## What is CORS ?

CORS (Cross-Origin Resource Sharing) is a web security feature that controls how resources like APIs or images are shared between different websites. It lets servers specify which websites are allowed to access their resources, using special HTTP headers. This ensures secure and controlled data sharing across different origins (URLs with different domains, protocols, or ports).

<img src="/expressjs/07-cors/01.png"  width="700px"/>

## Origin refers

#### **Protocol** (e.g., http, https)

#### ** Domain** (e.g., roadtocode.com)

#### **Port** (e.g., :80, 443, 5005)

## Why CORS exist ?

Browsers enforce a same-origin policy to block interactions between different origins, preventing risks like CSRF or data leaks. CORS allows secure resource sharing across origins when needed, such as a front-end on **roadtocode.com** accessing **roadtocodeapi.com**.

## Benefits of CORS

1.  Enables legitimate cross-origin data sharing while protecting users from malicious actions.
2.  Allows fine-grained control over what resources are shared and with whom.
3.  Supports secure development for APIs and modern web applications.

## Security Implications

1.  Improper CORS configurations can lead to vulnerabilities:
2.  Overly permissive policies, such as `Access-Control-Allow-Origin`: can expose sensitive data to unauthorized parties.
3.  Misconfigured `Access-Control-Allow-Credentials` may allow malicious sites to access cookies or session data.
