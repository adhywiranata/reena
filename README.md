# Reena
> :sparkles: React Native Starter Kit

Reena is a React Native Starter Kit with opinionated component structures and state management.

## The Big Idea

### Architecture Goals

- Abide to Single Responsibility Principle (SRP)
- Component composability and reusability
- Loose coupling between components and enforcing encapsulation
- Favoring pure and functional components for performance
- Ensuring testability
- Immutable Data Structure

### Component Structures

Reena adopts the [Atomic Design Principle](http://bradfrost.com/blog/post/atomic-web-design/) to group React components, with Templates renamed as Pagelets since mobile's page structure is a bit different from the web and to have each groups ordered alphabetically. Below are the list of the group, sorted from the smallest.

- **Atoms**

  Atoms are the basic core components. It wraps around native components or custom components with very small structure. Atom consists of nucleuses and neutrons. **Nucleuses** are the core components with their own pre-defined and stackable styles, while **neutrons** are the common styles applied for several nucleuses, to avoid styling duplications for Atoms. **Atoms** should not have their own state, and are pure components.

- **Molecules**

  Molecules components with two or more **Atoms**. **Molecules** are the smallest component which can have their own state. However, states in **molecules** should be only UI-related states.

- **Organisms**

  Organisms are components consists of **Molecules**. It is not recommended for **organisms** to use **atoms**. **Organisms** are the smallest component which should be connected to the **Store**.

- **Pagelets**

  Pagelets are the sub-sections of a page. Pagelets consists of **Organisms** or **Molecules**. **Molecules** are allowed to be in pagelets since there should be cases that we need to directly use a **molecule** without the presence of an **organism**. Pagelets can connects to the **store**, but avoid using the same state from a store in multiple pagelets inside a **page**. If this case occurs, map the state as props to the **page** instead.

- **Pages**

  Pages are the outer-most component, consists of **Pagelets**, **Organisms**, or **Molecules**. Both **Organisms** and **Molecules** are allowed to be in a page when the page is small enough to use a **pagelet**. Pages are the most recommended component which connects to the **store**.

### Store

Reena uses [Redux](http://redux.js.org/) as a state management, and every state in the **store** uses [immutable data structure](https://facebook.github.io/immutable-js/) as a normalized object using [Normalizr](https://github.com/paularmstrong/normalizr). It is recommended to use Immutable records.

### Styling

Reena uses [Glamorous](http://glamorous.rocks/) for styling on atomic components, but you can easily remove it and replace it with any styling libraries or just stack it with any custom styles.

It is advised to always make any components (especially **Atoms** and **Molecules**) have stackable styling. You can always update **Atom** component's global style in **neutrons**.

## Getting Started

```
git clone https://github.com/adhywiranata/reena.git
cd reena
yarn install
react-native run-ios
```

## Feature Checklist

### Features
- [ ] Redux State Management
- [ ] Redux Saga
- [ ] ImmutableJS
- [ ] Flow static type checker
- [ ] CodePush
- [ ] Crashlitics
- [ ] Recompose
- [ ] Redux
- [ ] Redux Saga
- [ ] Network connectivity HOC

## Debugging

For MacOS debugging, [React Native Debugger](https://github.com/jhen0409/react-native-debugger) is a good choice on top of the default debugging since it supports Redux integration.

## Credits

Reena's component structure uses the awesome Brad Frost's [Atomic Design Principle](http://bradfrost.com/blog/post/atomic-web-design/) for React components structure.