var p = fetch('https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817')
p.then((response) => {
    return response.json()
}).then((value2) => {
    console.log(value2);
    createTable(value2);
})

function createTable(result) {
    document.getElementById("body").innerHTML = Object.values(result.data).map((user) =>
        `<tr>
            <td> ${user.name} </td>
            <td> ${user.office} </td>
            <td> ${user.position} </td>
            <td> ${user.salary} </td>
        </tr>`
    ).join(" ");
}