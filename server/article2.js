const article1 = `# Introduction

    User authentication & authorization is one of the important parts of any web application. In this article, we will explore a simple and self-developed approach using JWT (JSON Web Tokens) for token management, bcryptjs for password hashing, and MongoDB as the database. This approach will help us understand the core principles of authentication.
    
    ## Technology Used
    
    - Token: JWT (JSON Web Tokens)
    - Password Hash: bcryptjs
    - Database: MongoDB
    
    ## What is Authentication & Authorization?
    
    In simple words, Authentication is the process of verifying who a user is (identity verification), while Authorization is the process of verifying what they have access to (permission verification).
    
    Authentication: This involves verifying the identity of a user, ensuring they are who they claim to be. It typically involves a process of user registration, login, and token generation.
    
    Authorization: After successful authentication, authorization determines what actions and resources the authenticated user is allowed to access. It defines the user's permissions and the level of access they have within the application.
    
    In this article, we will focus on implementing user authentication using JWT and bcryptjs to secure user passwords. By the end of the article, you will have a good understanding of how user authentication and authorization work together to enhance the security of your web application.
    `;
const article2 = `(## What is JWT (JSON Web Token)?

    JWT (JSON Web Token) is a compact and self-contained way of transmitting information between parties in a JSON format. It is used for securely exchanging data because it can be digitally signed. While JWTs can be utilized with any type of communication method, they have gained widespread popularity, especially in the context of handling authentication and authorization via HTTP.
    
    ### Structure of a JWT
    
    A JWT is composed of three main sections: the header, the payload, and the signature.
    
    #### 1. Header
    
    The header is the first section of the JWT, and it is a Base64-encoded string. It typically contains two important pieces of information:
    - The hashing algorithm used to generate the signature. For example, "HS256" indicates that the HMAC-SHA256 algorithm was used.
    - The type of token, which is JWT in this case.
    
    If you were to decode the header, it would look something like this:
    
    \`\`\`
    { "alg": "HS256", "typ": "JWT" }
    \`\`\`
    
    #### 2. Payload
    
    The payload is the second section of the JWT and is also Base64-encoded. It contains a JSON object with user data or any other information that needs to be transmitted. It's important to note that the payload is not encrypted and can be easily decoded by anyone who has access to the token.
    
    For example:
    
    \`\`\`
    { "sub": "1234567890", "name": "John Doe", "userId": "1516239022", "user_type_id": 1 }
    \`\`\`
    
    The above payload contains information about a user, such as their subject (sub), name, user ID, and user type ID.
    
    #### 3. Signature
    
    The final section of the JWT is the signature, which is generated using the algorithm specified in the header. The signature is used to verify that the token has not been tampered with and that it was indeed issued by a trusted source.
    
    In summary, a JWT consists of three parts: header, payload, and signature. These components are Base64-encoded and concatenated together with dots to form the complete JWT.
    
    JWTs are commonly used to securely transmit user information and authentication data between the client and server. They are valuable tools in modern web development and can enhance the security of communication between different parties.
    `;
const article3 = `(## Why Use Authentication & Authorization?

        Authentication and authorization are essential components of a robust security system, providing administrators with the necessary tools to protect data and control access to sensitive information. By implementing these mechanisms, various privileges can be assigned to users, allowing precise control over data sharing, internal collaboration with partners, and adherence to data retention policies.
        
        ### 1. Protection of Sensitive Data
        
        One of the primary reasons for using authentication and authorization is to protect sensitive data. When users access a system, administrators need to verify their identities and ensure that only authorized individuals can view and interact with specific data. This prevents unauthorized access and potential data breaches, safeguarding sensitive information from falling into the wrong hands.
        
        ### 2. User Access Privileges
        
        Authentication and authorization enable administrators to implement granular user access privileges. This means that different users can have varying levels of access to resources based on their roles and responsibilities within the system. For example, in a web application, there might be regular users and administrators. Regular users may have limited access to certain features, while administrators have access to additional functionalities and data management capabilities.
        
        ### 3. Secure User Login
        
        The process of authentication, typically involving username and password verification, ensures that users are who they claim to be. This secure login process is the foundation of trust between the user and the system. It ensures that the system can accurately identify the user and provides a personalized experience while protecting user-specific data and preferences.
        
        ### 4. Controlled Access to Special Resources
        
        In many systems, certain resources or functionalities are meant to be accessed only by specific users, such as administrative tasks or privileged information. With authorization in place, administrators can grant access to these special resources only to authorized users, such as the "special events" in your REST APIs example. This controlled access minimizes the risk of data misuse and maintains the integrity of the system.
        
        ### 5. Compliance and Data Retention
        
        For organizations handling sensitive data, compliance with industry regulations and data retention policies is critical. Authentication and authorization mechanisms aid in adhering to these requirements. Administrators can enforce data retention policies, control access logs, and ensure that data is accessed and used responsibly, thereby reducing potential legal and security risks.
        
        In conclusion, the use of authentication and authorization is essential for establishing a secure and reliable system. These mechanisms provide the necessary control over user access and privileges, protect sensitive data, and help organizations meet regulatory compliance standards. As you continue with your journey of implementing user authentication and authorization through your REST APIs, remember that these practices are fundamental to enhancing the overall security of your application.
        `;
const article4 = `(## How to Apply Authentication in a Node.js Application Using JWT and bcryptjs?

            Authentication is a crucial aspect of any web application, and using JWT (JSON Web Token) along with bcryptjs can provide a secure and efficient way to implement user authentication. Below are the steps to set up and apply authentication in a Node.js application:
            
            ### Step 1: Set Up the Project
            
            Initialize an empty Node.js project and install the required modules: Express, JWT, bcryptjs, and Mongoose. These modules will help build the authentication service and manage user data in the database.
            
            ### Step 2: Create Express Routers
            
            Create different endpoints for user registration and login using Express Routers. These routes will handle incoming requests for user registration and login.
            
            ### Step 3: Implement User Controller Functions
            
            In the user controller file, create functions to handle user registration and login. For user registration, the provided password should be hashed using bcryptjs before saving the user data in the database. After successful registration, generate an access token using JWT and return it to the user.
            
            ### Step 4: Test User Registration
            
            Use a REST client like Postman to send a POST request to the registration endpoint with the required user data (email, name, password, and user_type_id). Upon success, you will receive an access token in the response.
            
            ### Step 5: Implement User Login
            
            Create a function in the user controller to handle user login. In this function, retrieve the user data from the database based on the provided email. Compare the hashed password with the password provided during login using bcryptjs. If the credentials match, generate an access token using JWT and send it in the response headers.
            
            ### Step 6: Test User Login
            
            Using the REST client, send a POST request to the login endpoint with the user's email and password. Upon successful login, you will receive a 200 status code and an access token in the response headers.
            
            By following these steps, you will have successfully implemented user authentication using JWT and bcryptjs in your Node.js application. Users can now securely register and login, and the application can control access to different resources based on user roles and privileges. This setup enhances the security of your web application and ensures that only authorized users can access sensitive data and functionalities.
            `;
const article5 = `(## How to Apply Authorization in a Node.js Application?

                Authentication verifies the identity of users, but Authorization controls what actions and resources those users are allowed to access. In this step, we will implement Authorization in our Node.js application using the "user_type_id" property that we introduced during user registration.
                
                ### Step 1: Verify User Token
                
                In the authentication middleware file (auth.js), we check if the request contains an access token in the authorization header. If the token is present, we remove the "Bearer" string from it and verify the token using our secret key. If the token is valid, we extract the user_id and user_type_id from it and attach it to the request object. This way, we have the user's type available for further validation.
                
                ### Step 2: Create Authorization Middleware
                
                Next, we create two middleware functions to handle authorization for different user types:
                
                - **IsUser Middleware:** This middleware checks if the user_type_id attached to the request object is equal to 0, which indicates a regular user. If the condition is met, the middleware proceeds to the next function. If not, it returns a 401 Unauthorized status, indicating that the user is not authorized to access the resource.
                
                - **IsAdmin Middleware:** Similarly, this middleware checks if the user_type_id attached to the request object is equal to 1, which indicates an administrator. If the condition is met, the middleware proceeds to the next function. Otherwise, it returns a 401 Unauthorized status.
                
                ### Step 3: Implement Authorization on Routes
                
                In the routers file (index.js), we apply our newly created middleware functions to the routes that require authorization. For example, we use the IsUser middleware for routes that should only be accessible to regular users, and the IsAdmin middleware for routes that should only be accessible to administrators. By doing so, we ensure that only authorized users can access specific resources and functionalities.
                
                ### Step 4: Test Authorization
                
                Now, let's test the authorization. If a user with user_type_id == 1 (administrator) tries to access a route meant for regular users, they should receive a 401 Unauthorized status. On the other hand, if a regular user (user_type_id == 0) tries to access a route meant for administrators, they should also receive a 401 Unauthorized status.
                
                By applying these steps, we have successfully implemented authorization in our Node.js application. Users are now authenticated and authorized based on their user_type_id, ensuring that only authorized users have access to specific routes and resources. This enhances the security and control over user interactions in the application.
                `;

export { article1, article2, article3, article4, article5 };
