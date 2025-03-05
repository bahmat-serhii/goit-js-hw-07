const categoriesList = document.querySelector("#categories");
const categoriesEl = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryEl = category.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryEl}`);
});
categoriesEl.forEach((category) => {
  const classTitle = category.querySelector("h2");
  classTitle.classList.add("list-item-title");
});
const classEl = document.querySelectorAll("ul li ul li");
classEl.forEach((item) => item.classList.add("list-item-list-item"));
const classItem = document.querySelectorAll("ul li ul");
classItem.forEach((item) => item.classList.add("list-item-list"));
categoriesList.classList.add("list");
