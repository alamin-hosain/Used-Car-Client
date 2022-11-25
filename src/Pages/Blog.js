import React from 'react'

const Blog = () => {
    return (
        <div className='lg:w-[1140px] mx-auto'>
            <div className='bg-primary text-white py-10'>
                <h1 className="text-3xl font-bold text-center">BLOG</h1>
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="mb-10 border-t border-b divide-y">
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    React
                                </a>
                                <p className="text-gray-600">10 Nov 2022</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3  space-y-4">
                            <div className="mb-3 ">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">

                                        What are the different ways to manage a state in a React application?

                                    </p>


                                </a>
                            </div>
                            <p className="text-gray-700">
                                The Four Kinds of React State to Manage.
                                There are four main types of state you need to properly manage in your React apps:

                                1.Local state
                                2.Global state
                                3.Server state
                                4.URL state
                            </p>
                            <p className="text-gray-700">
                                1. Local (UI) state – Local state is data we manage in one or another component.

                                Local state is most often managed in React using the useState hook.
                            </p>
                            <p className="text-gray-700">
                                2. Global (UI) state – Global state is data we manage across multiple components.

                                Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.
                            </p>
                            <p className="text-gray-700">
                                3. Server state – Data that comes from an external server that must be integrated with our UI state.

                                Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.
                            </p>
                            <p className="text-gray-700">
                                4. URL state – Data that exists on our URLs, including the pathname and query parameters.
                            </p>
                        </div>
                    </div>

                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Prototype Inheritance
                                </a>
                                <p className="text-gray-600">28 Nov 2022</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        How does prototypical inheritance work?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.
                            </p>
                        </div>
                    </div>

                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    Unit Testing
                                </a>
                                <p className="text-gray-600">15 Sep 2022</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 space-y-6">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        What is a unit test? Why should we write unit tests?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class.
                            </p>
                            <p className="text-gray-700">
                                To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

                                Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                                Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                                It simplifies the debugging process.
                                Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                                Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                            </p>
                        </div>
                    </div>


                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="mb-4 sm:mb-0">
                            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                                <a
                                    href="/"
                                    className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                                    aria-label="Category"
                                >
                                    React VS Angular
                                </a>
                                <p className="text-gray-600">15 Nov 2022</p>
                            </div>
                        </div>
                        <div className="sm:col-span-3 space-y-6">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                                        React vs. Angular vs. Vue?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                <span className="text-bold"> Angular</span>
                                It was first released in 2010 and developed by Google. It is a TypeScript based JavaScript framework. After releasing several versions, now, Angular v7 is available which was released on October 2018.
                            </p>
                            <p className="text-gray-700">
                                <span className="text-bold"> React</span>
                                It was initially released in 2013 by Facebook. Besides, Facebook, it is used by Instagram and WhatsApp. The currently available version is 16.X, which was released on November 2018.
                            </p>
                            <p className="text-gray-700">
                                <span className="text-bold"> Vue</span>
                                Vue is the youngest member of the group and also known as Vue.js. It was developed by an ex-Google employee Evan You in 2014.

                                The current stable version is 2.17, which was released on August 2018. Vue's contributors are supported by Patreon.
                            </p>
                            <h3 className="text-2xl">Which One to Choose
                            </h3>
                            <p className="text-gray-700">

                                To know which is better to pick, we have explored some resource and attached the result below that we found. By observing the results, you will be able to understand which one is the best for you.


                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Blog