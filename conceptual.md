### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
        - A JavaScript library for building User Interfaces for web applications 
        - Great for use when you want to prioratize modular, maintainable, and scalable code 
          through the use of reusable components 

- What is Babel?
        - A compiler that will allow developers to write code using the latest ECMAScript( JavaScript )
          syntax and features, even if the target enviornment ( such as browsers or Node.js ) versions 
          don't support those features natively

- What is JSX?
        - JavaScript and XML 
        - a syntax extension used in React that will allow developers to write HTML-like code within 
          JavaScript 

- How is a Component created in React?
        - Can be structured one of two ways:

          - Functional Component 
            - Import React at the beginning of the file 
            - Define a JavaScript function that will return JSX representing the User Interface 
            - Use the function name as the component name 
            - Accept props as an argument to make the component dynamic 
              ( Process for defining a mechanism for a component to receive data from its parent component )

          - Class Component
            - Import React and { Component } from react 
            - Define a JavaScript class that extends React.Component class 
            - Implement a render() method that will return JSX representing the User Interface  

- What are some difference between state and props?
        State: 
          - a JavaScript Object that represents internal data of a component 
          - Allows a component to keep track of its own data and manage its own stateful behavior 
          - is mutable 

        Props: 
          - read-only data that are passed into a component from its parent component 
          - ideal for configuring or customizing components based on external data or settings 
          - props are immutable 

- What does "downward data flow" refer to in React?
        - a principle in React where data is passed from a parent component to a child component 
        - data should flow in a unidirectional manner, with components at the top of the hierarchy 
          passing data down to thier child components 

- What is a controlled component?
        - a component whose value is controlled by React state 
        - meaning the components value is set by state and is updated through React's event handlers 

- What is an uncontrolled component?
        - a component whose value is not directly controlled by React state 

- What is the purpose of the `key` prop when rendering a list of components?
        - help React identify each item in the list uniquely
        - the key prop provides a unique identifier for each item on the list
          allowing React to perform these updates more efficiently 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
        - lack of stability ( they can change when items in the array change )
        - array indices do not guarentee key uniqueness especially if you are dealing with dynamic 
          lists where items can be added or removed 

- Describe useEffect.  What use cases is it used for in React components?
        - used for handling side effects in a functional component 
        - perform actions in response to component life-cycle events 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
        - a hook used to create a mutable reference that persists across component re-renders 
        - used to store values or references to DOM elements similar to using instance variables
          in class components 

- When would you use a ref? When wouldn't you use one?
        Use when: 
          - you need to interact with a DOM element directly, such as focusing an input field, 
            scrolling to a specific position, or measuring the size of an element 
          - storing values that need to persist between renders but should not trigger a re-render
            when they change 
          - used to avoid any unnecessary re-renders caused by changes to their values

        Don't use when:
          - managing component state as refs are not designed to replace state management in \
            React components, if you need to manage a component state that will affect rendering
            such as user input, component visibility, or data fetching it is better to use React's 
            state component 
          - should not be used for conditional rendering logic or controlling component visibility 

- What is a custom hook in React? When would you want to write one?
        - a function that starts with the prefix 'use' and utilizes one or more built-in React hooks 
          or other custom hooks to encapsulate reusable logic 
        
        When to use: 
          - you find yourself repeating logic across multiple components
          - if a components state management becomes to complex or involves multiple pieces of state
            that need to be synchronized 
          - you are needing to encapsulate side effects such as fetching data, subscriptions or asynchronous
            operations 






