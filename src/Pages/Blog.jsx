

const Blog = () => {
    return (
        <div>

            <div className="w-full lg:flex gap-6 md:flex p-6 overflow-hidden  dark:bg-gray-50 dark:text-gray-800">
                <article className="lg:w-3/5">
                    <h2 className="text-xl font-bold">What is an access token and refresh token?</h2>
                    <p className="my-4 dark:text-gray-600">Access tokens and refresh tokens are crucial components in authentication and authorization systems, commonly used in protocols like OAuth 2.0 and OpenID Connect. They help secure and manage user sessions in a secure and scalable way.</p>
                    <div>
                        <h2 className="text-xl font-bold">How it works?</h2>
                        <ul>
                            <li><b>Authentication:</b> The user authenticates with the server (e.g., via username and password).</li>
                            <li><b>Token Issuance:</b> The authentication server issues an access token to the client application.</li>
                            <li><b>Resource Access:</b> The client includes the access token in the Authorization header of HTTP requests to access protected resources (e.g., API endpoints).</li>
                            <li><b>Validation:</b> The resource server validates the access token to ensure it is still valid and grants access to the requested resource.</li>
                        </ul>
                    </div>
                </article>
                <div className="lg:w-2/5">
                    <img src="/ar.png" alt="" />
                </div>
            </div>

            <div className="w-full lg:flex gap-6 md:flex p-6 overflow-hidden dark:bg-gray-50 dark:text-gray-800">
                <article>
                    <h2 className="text-xl font-bold">How do they work and where should
                        we store them on the client side?</h2>
                    <p className="mt-4 dark:text-gray-600">Access tokens and refresh tokens play a crucial role in authentication systems, enabling secure and efficient management of user sessions. Access tokens are short-lived credentials that allow clients to access protected resources by including the token in the Authorization header of HTTP requests. Refresh tokens, on the other hand, are long-lived credentials used to obtain new access tokens without re-authenticating the user. For secure storage on the client side, access tokens should be kept in memory or session storage in web applications to mitigate the risk of cross-site scripting (XSS) attacks, while mobile and desktop applications should use secure storage solutions like Keychain on iOS and Keystore on Android. Refresh tokens, being more sensitive, should be stored in HttpOnly cookies for web applications to prevent JavaScript access, and in the same secure storage mechanisms as access tokens for mobile and desktop applications. This approach ensures both tokens are protected from unauthorized access and misuse.</p>

                </article>

            </div>

            <div className="w-full lg:flex gap-6 md:flex p-6 overflow-hidden  dark:bg-gray-50 dark:text-gray-800">
                <article className="lg:w-3/5">
                    <h2 className="text-xl font-bold">What is express js?</h2>
                    <p className="my-4 dark:text-gray-600">Express.js is a minimalist, flexible, and robust web application framework for Node.js, designed to build web applications and APIs. It simplifies the process of creating server-side applications with Node.js by providing a set of features and utilities out of the box.</p>
                    <div>
                        <h2 className="text-xl font-bold">Key Features:</h2>
                        <ul>
                            <li><b>Middleware:</b>  Express.js uses a series of middleware functions to handle requests and responses. Middleware functions can perform various tasks, such as parsing request bodies, logging, and serving static files.</li>
                            <li><b>Routing:</b>  Express.js provides a powerful routing mechanism to define how an application responds to client requests to specific endpoints, defined by a URL and an HTTP method (GET, POST, PUT, DELETE, etc.).</li>
                            <li><b>Templating:</b> It supports various templating engines (like Pug, EJS, and Handlebars), making it easier to generate HTML dynamically.</li>
                            <li><b>Extensibility: </b> The framework is highly extensible, allowing developers to add third-party middleware to handle additional functionality such as authentication, sessions, and more.</li>
                        </ul>
                    </div>
                </article>
                <div className="lg:w-2/5">
                    <img src="/ejs.png" alt="" />
                </div>
            </div>

            <div className="w-full lg:flex gap-6 md:flex p-6 overflow-hidden  dark:bg-gray-50 dark:text-gray-800">
                <article className="lg:w-3/5">
                    <h2 className="text-xl font-bold">What is Nest JS?</h2>
                    <p className="my-4 dark:text-gray-600">NestJS is a progressive Node.js framework for building efficient, reliable, and scalable server-side applications. It is built with and fully supports TypeScript (while also enabling the use of pure JavaScript) and is heavily inspired by Angular, bringing a modular and structured approach to server-side development.</p>
                    <div>
                        <h2 className="text-xl font-bold">Key Features:</h2>
                        <ul>
                            <li><b>Modularity:</b>
                                NestJS encourages a modular architecture, where code is organized into modules. Each module is a self-contained piece of the application, promoting separation of concerns and reusability.</li>
                            <li><b>Dependency Injection:</b>
                                NestJS uses a powerful dependency injection system that makes it easier to manage and resolve dependencies within an application. This enhances testability and scalability.

                            </li>
                            <li><b>TypeScript Support:</b>
                                Built with TypeScript, NestJS provides strong typing and modern JavaScript features, improving developer productivity and code quality. However, it also allows the use of pure JavaScript if preferred.</li>
                            <li><b>Decorators: </b>
                                Leveraging TypeScript decorators, NestJS provides a declarative syntax for defining routes, middleware, guards, interceptors, and more, leading to cleaner and more readable code.</li>
                        </ul>
                    </div>
                </article>
                <div className="lg:w-2/5">
                    <img src="/nest.avif" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Blog;