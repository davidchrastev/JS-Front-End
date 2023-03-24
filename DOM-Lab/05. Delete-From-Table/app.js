function deleteByEmail() {
  const customersTable = document.querySelector("#customers");
  const emailInput = document.querySelector('input[name="email"]');
  let result = document.getElementById("result");

  const searchTerm = emailInput.value;

  for (let i = 0; i < customersTable.rows.length; i++) {
    const row = customersTable.rows[i];
    const email = row.cells[1].textContent;
    if (email === searchTerm) {
      row.parentNode.removeChild(row);
      result.textContent = "Deleted.";
      return;
    }
  }

  result.textContent = "Not found.";
}
