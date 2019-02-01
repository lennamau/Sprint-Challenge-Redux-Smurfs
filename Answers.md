1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Methods used to create new objects and do not produce side effects are map(), filter(), reduce() and concat() (or we can use spread operator). We use the map function to create a new object while extending the properties of another object.


1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions- an object contains action property type and data that is associated with that action type which is the payload. By convention uses all caps naming convention.

Reducers- actions flow through reducers- they do not directly update state but will return a new object to relay the changes to the store that are from action responses. 

Store- is a single source of truth because it holds the state for whole Redux - react app. The flow goes from Store -> view ->  Actions -> Middleware (dispatcher) -> Reducer -> State and continues in that loop.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the state of the entire application while Component state is local to a certain component. The application state would be used to control state of the whole app while the component state would be used is only control of a certain component’s state was needed. 

1.  What is middleware?

Middleware is software that provides additional functionality while linking together two other software applications together.  

In Redux middleware “is created by composing functionality that wraps separate cross-cutting concerns which are not part of your main execution task.” -quote from Medium article (https://medium.com/@meagle/understanding-87566abcfb7a). 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a function that is returned by another function and it allows us to intercept an action creator and look at what is returned. This ability allows for API calls and asynchronous function from action creators. 


1.  Which `react-redux` method links up our `components` with our `redux store`?

We use the connect function to link up components with the store. The <Provider> component is also used to wrap the <App> component and pass in store. 

