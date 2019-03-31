Todo API for ADP

* NodeJs with Typescript
* Uses TypeORM to manage relationship
* Uses RoutingControllers to simplify routing (build on express)

Types
--

Todo

```typescript
class Todo {
  id: number
  title: string
  description: string
  completed: boolean
}

```

Routes
--

`GET /todos`
Returns all todos

`PUT /todos/:id` Takes a Todo object (or partial Todo) and updates in the DB

`DELETE /todos/:id` Deletes a Todo from the DB

`POST /todos` Creates a new Todo


