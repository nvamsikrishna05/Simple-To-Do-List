function Task(data){
	var self = this;
	self.task = ko.observable(data.task);
	self.isDone = ko.observable(false);
}

function TodoList(){
	var self = this;
	self.taskText = ko.observable("");
	self.taskList = ko.observableArray();
	self.addTask = function(){
		if(self.taskText() != ""){
			self.taskList.push(new Task({task: self.taskText()}));
			self.taskText("");
		}
	}
	self.removeTask = function(todo){
		self.taskList.remove(todo);
	}
}

ko.applyBindings(new TodoList());
