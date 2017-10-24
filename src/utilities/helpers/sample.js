export default {
  toCapital: str => str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' '),
};
