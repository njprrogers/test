## Instructions

1. Fork this repository to your own GitHub account.
2. Complete the exercise below and provide information on how to run the application as well anything else you deem worthy of explaining to the person reviewing your code.
3. When ready, submit a link to your fork by replying to the original email from Flow. Do not create a pull request back to the `flowcommerce` source.

## Requirements

Create a web application to operate on the master catalog of an organization using Flow Commerce REST API.

Your implementation should provide the following features:

* Ability to navigate through existing catalog items.
* Ability to view details for a catalog item.
* Ability to create a new catalog item.
* Ability to update an existing catalog item.
* Ability to delete an existing catalog item.
* Ability to search through existing catalog items.

Please avoid using libraries such as jQuery, Mootools, Prototype.js in your implementation.

### Bonus (Not Required)

* Provide tests for all of your work
* Show off your CSS skills. Make this look beautiful.

### Major Bonus (Not Required)

* Use React
* Use Redux

## Getting Started

All authentication to the Flow Commerce API is via HTTP Basic Authorization.

For this exercise, we have created the following API key for you to use in your implementation.

```
xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh
```

> Tip:
> You need to provide the Base64 encoded API token as the authorization header of your requests.
> Use the `-v` option in the cUrl commands below to see an example of the headers sent with each request.

Also, you will be using the `frontend-exercises` organization. An organization is used for grouping and identifying a set of module preferences and settings within an appropriate entity, such as a brand, site or company name.

### API Builder

For this exercise, you will be using [Flow Commerce API](https://app.apibuilder.io/flow/api/latest) specifications as reference, which can be accessed from [API Builder](https://www.apibuilder.io/) with your GitHub account. Below is a summary of the resources that you will be using to build your application:

### Flow Commerce Items API

Flow's representation of all items in a client's product catalog. Provides create, update, and delete (CRUD) operations as well as utility methods including item history. Refer to the [Flow Commerce Item API](https://app.apibuilder.io/flow/api/latest#resource-item) specifications for additional information.

#### `GET /:organization/catalog/items`
Search items. Always paginated.

##### Example Request:

```bash
curl -u xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh: 'https://api.flow.io/frontend-exercises/catalog/items'
```

#### `POST /:organization/catalog/items`
Add catalog item(s)

##### Example Request:

```bash
curl -X POST -d @body.json -u xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh: 'https://api.flow.io/frontend-exercises/catalog/items'
```

body.json:

```json
{
  "number": "1437867",
  "name": "3-Tier Ceramic Hanging Planter",
  "locale": "en_US",
  "price": 150,
  "currency": "USD"
}
```

##### Example Response

```json
{
  "id": "cit-7dc6d27773614e249bd0110b2d6f2e4d",
  "number": "1437867",
  "locale": "en_US",
  "name": "3-Tier Ceramic Hanging Planter",
  "price": {
    "amount": 150,
    "currency": "USD",
    "label": "$150.00"
  },
  "categories": [],
  "attributes": {},
  "dimensions": {},
  "images": []
}
```

#### `GET /:organization/catalog/items/:number`
Returns information about a specific item.

##### Example Request:

```bash
curl -u xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh: 'https://api.flow.io/frontend-exercises/catalog/items/1437867'
```

#### `PUT /:organization/catalog/items/:number`
Update item with the specified number, creating if it does not exist.


##### Example Request:

```bash
curl -X PUT -d @body.json -u xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh: 'https://api.flow.io/frontend-exercises/catalog/items/1437867'
```

body.json:

```json
{
  "number": "1437867",
  "name": "3-Tier Ceramic Hanging Planter",
  "locale": "en_US",
  "price": 150,
  "currency": "USD"
}
```

##### Example Response

```json
{
  "id": "cit-7dc6d27773614e249bd0110b2d6f2e4d",
  "number": "1437867",
  "locale": "en_US",
  "name": "3-Tier Ceramic Hanging Planter",
  "price": {
    "amount": 150,
    "currency": "USD",
    "label": "$150.00"
  },
  "categories": [],
  "attributes": {},
  "dimensions": {},
  "images": []
}
```

#### `DELETE /:organization/catalog/items/:number`
Delete the item with this number

```bash
curl -X DELETE -u xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh: 'https://api.flow.io/frontend-exercises/catalog/items/1437867'
```

### Flow Commerce Search API

Search API provides merchants with the ability to find items using basic queries or keywords followed by a `:` for any field contained in their product catalog. For example, `Category:Jeans` will result in all the products that belong to the Jeans category. Refer to the [Flow Commerce Search API](https://app.apibuilder.io/flow/api/latest#resource-document) specifications for additional information.

#### `GET /:organization/search/catalog`
Find items matching the specified query.

```bash
curl -u xoxWLyodJsCF9CBVlOTDC48XJxBTpH9rTOgWhcEQ2XdcO8PmzblIziwKHUMRwfVpD7eqHAtPN1HekgVzyGW3mLUQpQmBkgm6PVPlFm2sBmpROiR8ZFlCThKSeNinvsPh: 'https://api.flow.io/frontend-exercises/search/catalog?q=category%3Ahandbag'
```

The value for the `q` query parameter can consist of one or more of the following options:

* A basic query (e.g. an incomplete item name)
* An item category keyword (e.g. `?q=category:handbag`, `?q=category:"Home & Garden"`, etc)
* An item number (e.g. `?q=1437867`, `?q=number:1437867`, etc)
* An item attribute keyword (e.g. `?q=brand:gucci`)

## Expectations

We expect that you will at minimum complete the `Requirements`. Completing the bonus requirements would be expected of more senior engineers.

We're looking to see how well you write code.

* How well is it organized? Is it easy to maintain?
* Did you fully comprehend the requirements?
* Can you be creative (the CSS bonus requirement) visually?
* How easy was it to install / run the application?

Don't feel overwhelmed with the exercise. If you find that it's too much, make decisions on which features are most important. Above all else, do what you can to show us how well you understand web technologies.

Good luck!
