export default {
  isValidEmail: (email) => {
  // First check if any value was actually set
    if (!email || email.length === 0) return false;
    // Now validate the email format using Regex
    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(email);
  },
  isValidPassword: password => /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password),
};
