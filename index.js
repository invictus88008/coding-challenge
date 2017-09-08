/** Data you will be inserted into html **/
var data = [
    //item 1
    {
        "name":  "CARNITAS",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$4.99"
    },
    //item 2
    {
        "name": "CHICKEN MOLE VERDE",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 3
    {
        "name": "ENCHILLADAS",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 4
    {
        "name": "GREEN SAUCE",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 5
    {
        "name":  "CARNITAS",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$4.99"
    },
    //item 6
    {
        "name": "CHICKEN MOLE VERDE",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 7
    {
        "name": "ENCHILLADAS",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
    //item 8
    {
        "name": "GREEN SAUCE",
        "description": "woke semiotics poke, tofu lyft pork belly cornhole",
        "price": "$14.99"
    },
]

//container for all menu items, may be a good place to append some columns
var menuContainer = $('#menuContainer');

for( var i = 0; i < data.length; i++) {
    //bootstrap column needed
    var column = document.createElement('div');
        $(column).addClass('col-md-3');

    var title = document.createElement('h4');
        title.innerHTML = data[i].name;
        $(title).addClass('menu-item-name')
        column.append(title);

    var container = document.createElement('div');
        $(container).addClass('description-container')

    var description = document.createElement('p');
        description.innerHTML = data[i].description;
        $(description).addClass('description');
        container.append(description);

    var price = document.createElement('p');
        price.innerHTML = data[i].price;
        $(price).addClass('price');
        container.append(price);

        column.append(container);

        menuContainer.append(column);

}