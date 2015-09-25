# query

> Declarative and expressive database queries.

## Idea

Nested queries are awful to write in most programing languages.
This query builder aims very specific needs. Imagine a case where
someone has always to fetch a certain `document` in order to fetch another one.

We want to do this in a `declarative` way and also allow functional programing.
In all cases, `callback` or any other evaluation is prohibited.

## Examples

Query a document, populate all documents at path `users`, select the user level
and lookup levels by id, reduce than by level value.

```js
query()
  .use('groups')
  .find({id: 1})
  .populate('users')
  .select('level')
  .use('levels')
  .find('level.id')
  .reduce((total, level) => total += level.val, 0)
```

Delete all nested `documents` that match a certain `criteria`.

```js
query()
  .use('users')
  .find({role: 'EDITOR'})
  .remove()
```

Delete all users that match a certain `criteria` in a sub-document.

```js
query()
  .use('users')
  .find({'role.name': 'EDITOR'})
  .delete()
```
