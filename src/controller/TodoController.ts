import { Delete, Get, JsonController, Param, Post, Put } from 'routing-controllers'
import { getRepository, Repository } from 'typeorm'
import { Todo } from '../entity/Todo'
import { EntityFromBody, EntityFromParam } from 'typeorm-routing-controllers-extensions'

@JsonController()
export class TodoController{
  repo: Repository<Todo>

  constructor(){
    this.repo = getRepository(Todo)
  }

  @Get("/todos")
  get(){
    return this.repo.find()
  }

  @Post("/todos")
  create(@EntityFromBody() todo: Todo){
    const newTodo = this.repo.create(todo)
    return this.repo.save(newTodo)
  }

  @Put("/todos/:id")
  update(@EntityFromParam("id") currentTodo: Todo, @EntityFromBody() updatedTodo: Todo ){
    return this.repo.save({...currentTodo, ...updatedTodo})
  }

  @Delete("/todos/:id")
  async delete (@EntityFromParam("id") todo: Todo) {

    await this.repo.delete(todo)
    return todo
  }
}
