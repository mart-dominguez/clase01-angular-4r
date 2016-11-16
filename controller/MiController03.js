angular.module('app01').controller("MiController03",
	['$scope',function($scope){
		$scope.tituloAlta = "Alta de tareas";
		$scope.tituloLista = "Lista de tareas";		
		// definimos un objeto que almacena la tarea
		$scope.tareaActual = {};
		// definimos un arreglo que almacenará las listas de tareas.
		$scope.listaTareas = [];

		// funcion que guarda una tarea
		$scope.agregarTarea = function(){
			console.log($scope.tareaActual);
			$scope.listaTareas.push($scope.tareaActual);
			console.log($scope.listaTareas);
		}

		// funcion que guarda una tarea
		$scope.nuevaTarea = function(){
			console.log($scope.tareaActual);		
			$scope.tareaActual = {};
			console.log($scope.tareaActual);			
		}
	}]
);