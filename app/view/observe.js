const sectionAboutAndFAQ = document.querySelectorAll('.observe');

const settingOBServe = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) return; // Guard Clauses

  console.log(entry.target);
  entry.target.classList.remove('hidden');

  observe.unobserve(entry.target);
};
const observe = new IntersectionObserver(settingOBServe, {
  root: null,
  threshold: 0,
});

sectionAboutAndFAQ.forEach(value => {
  observe.observe(value);
});
