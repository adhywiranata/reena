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

Reena adopts the [Atomic Design Principle](http://bradfrost.com/blog/post/atomic-web-design/) to classify React components. Templates renamed as Pagelets since mobile's page structure is a bit different from the web and to have each classification ordered alphabetically.

- **Atoms**

  An **atom** is a core component. **Atoms** wrap around native components or custom components in a very small structure. An **Atom** consists of **nuclei** and **neutrons**. A **nucleus** is a core component with its own pre-defined and stackable style, while a neutron is a common style applied on several **nuclei** to avoid styling duplications for **Atoms**. **Atoms** should not have their own state, and are pure components.

- **Molecules**

  A **molecule** is a component of two or more **Atoms**. **Molecules** are the smallest components which can have their own state. However, a **molecule** should only have UI-related states.

- **Organisms**

  An **Organism** is a component made of **Molecules**. It is not recommended for an **Organism** to directly use **Atoms**. **Organisms** are the smallest components that can connect to the **Store**.

- **Pagelets**

  A **Pagelet** is section of a page or screen. **Pagelets** may consist of **Organisms** or **Molecules**. **Molecules** are allowed to be in **pagelets**, since there may be cases where we need to directly use a **Molecule** outside of an **Organism**. Pagelets can connect to the **Store**, but you should avoid using one same state from a **Store** for multiple **Pagelets** inside a **page**. If this occurs, you should map the state as props to the **Page** instead.

- **Pages**

  Pages are the outer-most component, consists of **Pagelets**, **Organisms**, or **Molecules**. Both **Organisms** and **Molecules** are allowed to be in a page when the page is small enough to use a **pagelet**. Pages are the most recommended component which connects to the **store**.

  A **Page** is an outermost component, which consists of **Pagelets**, **Organisms**, or **Molecules**. Both **Organisms** and **Molecules** are allowed to be in a **Page** that is small enough, you don't need to use **Pagelets**. It is recommended to connect **Pages** to the **Store** instead of connecting each or several of its components.

### Store

Reena uses [Redux](http://redux.js.org/) for state management, and every state in the **store** uses [immutable data structure](https://facebook.github.io/immutable-js/) as a normalized object using [Normalizr](https://github.com/paularmstrong/normalizr). It is recommended to use Immutable records.

### Styling

Reena uses [Glamorous](http://glamorous.rocks/) for styling on atomic components, but you can easily replace it with any styling library you like or stack it with any custom styles.

It is recommended to always make every component, especially **Atoms** and **Molecules**, to have stackable styling. You can always update an **Atom** component's global style by modifying its **Neutrons**.

## Getting Started

### Setup

```bash
git clone https://github.com/adhywiranata/reena.git
cd reena
yarn install
react-native run-ios
```

### Changing App's Name

Spencer Carli's [awesome medium post](https://medium.com/the-react-native-log/how-to-rename-a-react-native-app-dafd92161c35) on how to change React Native's app name.

### Adding Third Party Components

When adding third party components, it is recommended to put them as an **Atom**.

## Feature Roadmap

### Third Party Integration

- [ ] Redux State Management
- [ ] ImmutableJS
- [ ] Flow static type checker
- [ ] CodePush
- [ ] Crashlitics
- [ ] Recompose

### Higher Order Components

- [x] Network connectivity HOC
- [x] Redux Connect Wrapper HOC
- [x] Loading HOC
- [ ] Dismiss Keyboard HOC
- [ ] GraphQL Connect Wrapper HOC

### Featured Components

- [ ] Activity Indicator Atom
- [ ] Keyboard Avoiding View Atom
- [ ] Lazy Loading Image Atom
- [ ] Picker Atom
- [ ] Gradient View Atom
- [ ] Error Boundary Molecule

### Social Login

- [ ] Facebook
- [ ] Twitter
- [ ] LinkedIn
- [ ] Github

## Debugging

For debugging and inspecting, Reena uses [Reactotron](https://github.com/infinitered/reactotron). It is a configurable React and Redux inspector. The Reactotron config is provided.

## Credits

Reena's component structure uses the awesome Brad Frost's [Atomic Design Principle](http://bradfrost.com/blog/post/atomic-web-design/) for React components structure.
