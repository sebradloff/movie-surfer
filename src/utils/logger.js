/* eslint-disable */
export default function loggger(level, message, error = null) {
  if (process.env.NODE_ENV !== 'test') {
    if (error !== null) {
      console[level](message, error);
    } else {
      console[level](message);
    }
  }
}
