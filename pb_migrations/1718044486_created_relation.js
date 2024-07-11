/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "z87tdyeceghuz3i",
    "created": "2024-06-10 18:34:46.611Z",
    "updated": "2024-06-10 18:34:46.611Z",
    "name": "relation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wh1gdabz",
        "name": "father",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "hpopvrio",
        "name": "children",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("z87tdyeceghuz3i");

  return dao.deleteCollection(collection);
})
