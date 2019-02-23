<template>
  <section class="container">
    <div>
      <h1 class="title">
        Things To Do
      </h1>
      <h2 class="subtitle">
        To do List made with Nuxt.js
      </h2>
      <h2 class='subtitle' style='cursor: pointer; font-size: 2em;' v-if='!addNewTodo' @click='addNewTodo = true'>+New</h2>
      <div v-if='addNewTodo' class='todo-add'>
        <b-form-input class='todo-add-input'  v-model='text' @keyup.enter='newTodo'/>
        <b-btn variant='outline-secondary' class='todo-add-button' @click='newTodo'>Add</b-btn>
      </div>
      <div class='todo-container'>
        <div v-for='todo in todos' :class='todo.completed ? "todo-todo completed":"todo-todo"'  :key='todo.id'>
          <div class='todo-content'>
            <div>{{ todo.item }}</div>
            <input type='checkbox' v-model='todo.completed'>
          </div>
          <div style='width: 95%; height: 1px; background-color: lightgrey;'></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  components: {
    
  },
  data: function () {
    return {
      addNewTodo: false,
      id: 6,
      text: '',
      todos: [
        {
          id: 1,
          item: 'Eat breakfast.',
          completed: false,
        },
        {
          id: 2,
          item: 'Put clothing in the washer.',
          completed: false,
        },
        {
          id: 3,
          item: 'Put clothing in the dryer.',
          completed: false,
        },
        {
          id: 4,
          item: 'Fold and put away laundry.',
          completed: false,
        },
        {
          id: 5,
          item: 'Eat lunch.',
          completed: false,
        },
      ]
    }
  },
  computed: {
    todoClass: function () {
      return this.completed ? 'todo-todo completed' : 'todo-todo'
    }
  },
  methods: {
    newTodo: function () {
      let item = {
        id: this.id,
        item: this.text,
        completed: false
      }
      this.todos.push(item)
      this.id++
      this.text = ''
      this.addNewTodo = false
    }
  }
}
</script>

<style>
.container {
  margin: 0px;
  margin-right: 0px;
  width: 100%;
  max-width: 100% !important;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  background-image: linear-gradient(rgb(208, 234, 243), rgb(248, 242, 242));
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  margin-top: 50px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.scrollbar {
  background-color: white;
}
.links {
  padding-top: 15px;
}
.todo-container {
  width: 100%;
  height: 300px;
  background-color: white;
  box-shadow: 5px 5px 16px 3px rgba(0,0,0,0.61);
  border-radius: 5px;
  overflow: scroll;
  padding-top: 3px;
  margin-bottom: 3px;
  /* border: 1px solid lightgrey; */
}
.todo-add {
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  margin-bottom: 20px;
  border-radius: 5px;
  overflow: hidden;
}
.todo-add-input {
  height: 100%;
  border-radius: 5px 0px 0px 5px;
}
.todo-add-button {
  width: 15%;
  font-weight: 500;
  font-size: 18px;
  border-radius: 0px 6px 6px 0px;
}
.todo-todo {
  width: 100%;
  height: 40px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.todo-content {
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7px;
}
.completed {
  text-decoration: line-through;
}
</style>
