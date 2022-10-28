import React from 'react';

const Blog = () => {
    return (
        <div className='lg:w-4/5 w-9/10 mx-auto bg-slate-200 dark:bg-slate-400 my-4 py-4 px-12 rounded-lg'>
            <h2 className='text-2xl font-semibold text-center underline mb-4 dark:text-orange-700'>Asked Questions & Answers</h2>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    1) what is <code>cors</code>?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p><strong>CORS</strong> (Cross-Origin Resource Sharing) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. </p> <br />
                    <p>For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    2) Why are you using <code>firebase</code>? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p><br />
                    <p>The other alternative options are:</p>
                    <ul className='list-disc pl-4'>
                        <li>Okta</li>
                        <li>Back4App</li>
                        <li>AWS Amplify</li>
                        <li>Backendless</li>
                        <li>Kuzzle</li>
                    </ul>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    3) How does the private route work?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated).</p>
                </div>
            </div>
            <div className="collapse rounded-md mb-2">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content">
                    4) What is Node? How does Node work?
                </div>
                <div className="collapse-content bg-primary text-primary-content">
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.</p>
                </div>
            </div>

        </div >
    );
};

export default Blog;