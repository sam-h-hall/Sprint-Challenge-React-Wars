# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
  
  - With React, we can write JSX, CSS, and HTML all in one file. This makes our code much easier to read and write.
    When loading pages, React makes it so that only changing components are re-rendered, rather than every component.
    Components are also reusable.

2. Describe component state.

  - State is how we store dynamic data and can be used to determine how a component behaves or what data it renders.

3. Describe props.

  - props is how we pass data to our child components. When we pass data with props, it is read-only.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

  - Side effects are functions that modify something outside of their body. They can be used to make an api call and then use the data that is returned.
    To sync effects to state/props, we would add a dependency array to the end that would look for changes in whatever state or props we want.
