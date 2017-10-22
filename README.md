# Reena
> :sparkles: React Native Starter Kit

## Features
- Redux State Management
- Redux Saga
- ImmutableJS
- Flow static type checker
- CodePush
- Crashlitics
- Recompose
- Redux and React-Redux
- Redux Saga

## Architecture Goals

- Abide to Single Responsibility Principle (SRP)
- Component composability and reusability
- Loose coupling between components and enforcing encapsulation
- Favoring pure and functional components for performance
- Ensuring testability
- Immutable Data Structure

## Component Structures

This starter kit adopt the [Atomic Design Principle](http://bradfrost.com/blog/post/atomic-web-design/), with several modifications. Components are structured in a way a chemical elements structured. Below are the list of elements, sorted from the smallest.

- **Atom**

  Atoms are the basic core components. It wraps around native components or custom components with very small structure. Atom consists of nucleuses and neutrons. Nucleuses are the core components with their own pre-defined and stackable styles, while neutrons are the common styles applied for several nucleuses, to avoid styling duplications for Atoms. **Atoms** should not have their own state, and are pure components.

- **Molecules**

  Molecules components with two or more **Atoms**. **Molecules** are the smallest component which can have their own state. However, states in **molecules** should be only UI-related states.

- **Organisms**

  Organisms are components consists of **Molecules**. It is not recommended for **organisms** to use **atoms**. **Organisms** are the smallest component which should be connected to the **Store**.

- **Pagelets**

  Pagelets are the sub-sections of a page. Pagelets consists of **Organisms** or **Molecules**. **Molecules** are allowed to be in pagelets since there should be cases that we need to directly use a **molecule** without the presence of an **organism**. Pagelets can connects to the **store**, but avoid using the same state from a store in multiple pagelets inside a **page**. If this case occurs, map the state as props to the **page** instead.

- Pages
  Pages are the outer-most component, consists of **Pagelets**, **Organisms**, or **Molecules**. Both **Organisms** and **Molecules** are allowed to be in a page when the page is small enough to use a **pagelet**. Pages are the most recommended component which connects to the **store**.