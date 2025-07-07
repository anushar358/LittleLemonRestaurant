window.fetchAPI = function(date) {
  // return different times for different dates if needed
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

window.submitAPI = function(formData) {
  // Just simulate success for now
  console.log("Form submitted:", formData);
  return true;
};