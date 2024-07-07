const locations = [
    {
        title: "Location 1",
        address: "123 Main Street, City 1, State 1"
    },
    {
        title: "Location 2",
        address: "456 Elm Street, City 2, State 2"
    },
    {
        title: "Location 3",
        address: "789 Oak Street, City 3, State 3"
    }
];

const json = JSON.stringify(locations, null, 2);

console.log(json);