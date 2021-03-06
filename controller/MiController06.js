angular.module('app01').controller("MiController06",
	['$scope',function($scope){
		$scope.tituloAlta = "Alta de tareas";
		$scope.tituloLista = "Lista de tareas";		
		// definimos un objeto que almacena la tarea
		$scope.tareaActual = {
			fechaFin:new Date()
		};
		// definimos un arreglo que almacenará las listas de tareas.
		$scope.listaTareas = [];

		// funcion que guarda una tarea
		$scope.agregarTarea = function(){
			console.log($scope.tareaActual);
			$scope.listaTareas.push($scope.tareaActual);
			console.log($scope.listaTareas);
			//cada vez que se agrega una tarea borramos la variable tareaactual
			$scope.tareaActual={};
		};

		// funcion que guarda una tarea
		$scope.nuevaTarea = function(){
			console.log($scope.tareaActual);		
			$scope.tareaActual = {
				fechaFin:new Date()
			};
			console.log($scope.tareaActual);			
		};

		// funcion que borra una tarea
		$scope.borrarTarea = function(filaBorrar){
            $scope.listaTareas.splice(filaBorrar,1);
		};

		$scope.prioridades = [
			{
				id:1,
				titulo:"Urgente"
			},
			{
				id:2,
				titulo:"Alta"
			},
			{
				id:3,
				titulo:"Media"
			},
			{
				id:4,
				titulo:"Baja"
			}
		];
	}]
);