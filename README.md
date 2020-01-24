# React Functional Programming

React functional programming is a way to architecture React applications by splitting the logic and the view and also by pushing the developers to do functional programming in react applications.

## Description and concept

React applications tend to mix the **View** and **Controller** in the same file <br/>
The problem is that it makes big files and the render logic is mixed into any other logic. <br/>
<br/>
This small library force developers to make pure functions as they cannot access to the props/state directly. <br/>

### Why injecting functions as props instead of using them directly in a component ?

Good question! <br/>
It makes the code clearer as a function is assigned to a component instead of just using it a reference.
For people who use typing, the prototype can be set in the props type and you finish with 2 components which as been merged. The first one is  the logic component (functions) and the second one is the view component

## Pros and cons

### Pros

- Easier to test and write Unit tests on the pure functions
- Reduce side effects by using functional programming guidelines
- More clarity into the files
- Reusability of pure functions in others components

### Cons

- 3 files for 1 component
- Strong understanding of functional programming
- May change the way developers implement react
