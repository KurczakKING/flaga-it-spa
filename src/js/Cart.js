const main = document.querySelector("main");
const section = document.createElement("section");

section.innerHTML = `
        <h2>Cart</h2>
        <p>Oto zawartość Twojego koszyka:</p>
    `;
main.append(section);

const table = document.createElement("table");
table.classList.add("table");

const tableHead = document.createElement("tr");
tableHead.innerHTML = `
        <th>Name</th>
        <th>Price</th>
        <th></th>
    `;

const tableFooter = document.createElement("tr");
tableFooter.innerHTML = `
            <td></td>
            <td>
                <strong>${cartManager.getTotal().toFixed(2)} PLN</strong>
            </td>
            <td></td>
        `;

table.append(tableHead, ...tableRows, tableFooter);
section.append(table);

/*
    const tableRows = cartManager.getAllItems().map(item => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} PLN</td>
            <td></td>
        `;

        tr.lastElementChild.append(RemoveFromCartButton(item));

        return tr;
    });
    */
