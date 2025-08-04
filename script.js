function addItem() {
  const input = document.getElementById("itemInput");
  const text = input.value.trim();
  if (text === "") return;

  const ul = document.getElementById("itemList");

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("span");
  label.textContent = text;

  checkbox.addEventListener("change", () => {
    li.classList.toggle("checked", checkbox.checked);
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  ul.appendChild(li);

  input.value = "";
}

function filterList() {
  const filter = document.getElementById("searchInput").value.toLowerCase();
  const items = document.querySelectorAll("#itemList li");

  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? "" : "none";
  });
}

function clearList() {
  document.getElementById("itemList").innerHTML = "";
}

function checkAll(state) {
  const checkboxes = document.querySelectorAll('#itemList input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = state;
    checkbox.parentElement.classList.toggle("checked", state);
  });
}
