const dynamicSort = (property) => {
  const sortOrder = 1;
  return (a, b) => {
    let result = 0;
    if (a[property] < b[property]) result = -1;
    else if (a[property] > b[property]) result = 1;
    return result * sortOrder;
  };
};

export default class Tasks {

   list = [];

  populateStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  add(description) {
    const task = {
      description,
      completed: false,
      index: this.list.length + 1,
    };
    this.list.push(task);
    this.populateStorage();
  }

  remove(indx) {
    this.list.splice(indx, 1);
    this.populateStorage();
    this.list.forEach((t) => {
      if (t.index > indx) {
        t.index -= 1;
      }
    })
  }

  edit(index, task) {
    this.list[index].description = task.description;
    this.list[index].completed = task.completed;
    this.list[index].index = task.index;
    this.list.sort(dynamicSort('index'));
    this.populateStorage();
  }

  clear() {
    this.list = this.list.filter((task) => task.completed === false);
    for (let i = 0; i < this.list.length; i += 1) {
      this.list[i].index = i + 1;
    }
    this.populateStorage();
  }

  getTasks() {
    return this.list;
  }

  setTasks() {

     this.list = JSON.parse(localStorage.getItem('tasks'));
  }
}
