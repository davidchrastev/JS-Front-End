# JS-Front-End
Leaning Java Script

<body>
    <table border="1" id="customers">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Eve</td>
          <td>eve@gmail.com</td>
        </tr>
        <tr>
          <td>Nick</td>
          <td>nick@yahooo.com</td>
        </tr>
        <tr>
          <td>Didi</td>
          <td>didi@didi.net</td>
        </tr>
        <tr>
          <td>Tedy</td>
          <td>tedy@tedy.com</td>
        </tr>
      </tbody>
    </table>
    <label>
      Email: <input type="text" name="email" />
      <button onclick="deleteByEmail()">Delete</button>
    </label>
    <div id="result"></div>
    <script>
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
    </script>
  </body>

