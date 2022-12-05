import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Blog = () => {
    return (
        <div>
            <h1 className='text-center font-bold text-3xl text-secondary'>The Blog</h1>
            <div className='p-5'>
                <div className="collapse rounded-lg my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary-focus text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1>
                            What is cors? <FaArrowDown className='inline ml-3' />
                        </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
                    </div>
                </div>
                <div className="collapse rounded-lg my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary-focus text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1>
                            Why are you using firebase? What other options do you have to implement authentication? <FaArrowDown className='inline ml-3' />
                        </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Release Apps Confidently And I've implement Google , Facebook and Github authentication.
                        </p>
                    </div>
                </div>
                <div className="collapse rounded-lg my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary-focus text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1>
                            How does the private route work? <FaArrowDown className='inline ml-3' />
                        </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated Logged in</p>
                    </div>
                </div>
                <div className="collapse rounded-lg my-4">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-primary-focus text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <h1>
                            What is Node? How does Node work? <FaArrowDown className='inline ml-3' />
                        </h1>
                    </div>
                    <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                        <p>Node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers. And it is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;