(angular => {
	angular.module("app", ["ngMaterial"])
	.directive('ngEnter', ()=>{
		return (scope, element, attrs) => {
        element.bind("keydown keypress",  event => {
            if (event.which === 13) {
                scope.$apply(function () {
                    scope.$eval(attrs.ngEnter);
                });
                event.preventDefault();
            }
        });
    };
	})
	.controller("ControladorPrincipal",["$scope","$mdToast","$mdDialog", ($scope, $mdToast, $mdDialog) => {
		$scope.modos = ["infinitivo", "pasado simple", "pasado participio"];
		
		$scope.todosLosVerbos = [
			{
				"infinitivo": "be",
				"pasado simple": "was",
				"pasado participio": "been",
				"español": "Ser, estar",
			},
			{
				"infinitivo": "become",
				"pasado simple": "became",
				"pasado participio": "become",
				"español": "Convertirse en, hacerse",
			},
			{
				"infinitivo": "begin",
				"pasado simple": "began",
				"pasado participio": "begun",
				"español": "Comenzar, empezar",
			},
			{
				"infinitivo": "bite",
				"pasado simple": "bit",
				"pasado participio": "bitten",
				"español": "Morder",
			},
			{
				"infinitivo": "blow",
				"pasado simple": "blew",
				"pasado participio": "blown",
				"español": "Soplar",
			},
			{
				"infinitivo": "break",
				"pasado simple": "broke",
				"pasado participio": "broken",
				"español": "Romper",
			},
			{
				"infinitivo": "bring",
				"pasado simple": "brought",
				"pasado participio": "brought",
				"español": "Traer, llevar",
			},
			{
				"infinitivo": "build",
				"pasado simple": "built",
				"pasado participio": "built",
				"español": "Construir",
			},
			{
				"infinitivo": "buy",
				"pasado simple": "bought",
				"pasado participio": "bought",
				"español": "Comprar",
			},
			{
				"infinitivo": "can",
				"pasado simple": "could",
				"pasado participio": "been able",
				"español": "Poder",
			},
			{
				"infinitivo": "catch",
				"pasado simple": "caught",
				"pasado participio": "caught",
				"español": "Coger, atrapar, tomar",
			},
			{
				"infinitivo": "choose",
				"pasado simple": "chose",
				"pasado participio": "choosen",
				"español": "Elegir, escoger",
			},
			{
				"infinitivo": "come",
				"pasado simple": "came",
				"pasado participio": "come",
				"español": "Venir",
			},
			{
				"infinitivo": "cost",
				"pasado simple": "cost",
				"pasado participio": "cost",
				"español": "Costar",
			},
			{
				"infinitivo": "cut",
				"pasado simple": "cut",
				"pasado participio": "cut",
				"español": "Cortar",
			},
			{
				"infinitivo": "do",
				"pasado simple": "did",
				"pasado participio": "done",
				"español": "Hacer",
			},
			{
				"infinitivo": "draw",
				"pasado simple": "drew",
				"pasado participio": "drawn",
				"español": "Dibujar",
			},
			{
				"infinitivo": "drink",
				"pasado simple": "drank",
				"pasado participio": "drunk",
				"español": "Beber",
			},
			{
				"infinitivo": "drive",
				"pasado simple": "drove",
				"pasado participio": "driven",
				"español": "Conducir",
			},
			{
				"infinitivo": "eat",
				"pasado simple": "ate",
				"pasado participio": "eaten",
				"español": "Comer",
			},
			{
				"infinitivo": "fall",
				"pasado simple": "fell",
				"pasado participio": "fallen",
				"español": "Caer",
			},
			{
				"infinitivo": "feel",
				"pasado simple": "felt",
				"pasado participio": "felt",
				"español": "Sentir",
			},
			{
				"infinitivo": "fight",
				"pasado simple": "fought",
				"pasado participio": "fought",
				"español": "Pelear, luchar",
			},
			{
				"infinitivo": "find",
				"pasado simple": "found",
				"pasado participio": "found",
				"español": "Encontrar",
			},
			{
				"infinitivo": "fly",
				"pasado simple": "flew",
				"pasado participio": "flown",
				"español": "Volar",
			},
			{
				"infinitivo": "forget",
				"pasado simple": "forgot",
				"pasado participio": "forgotten",
				"español": "Olvidarse",
			},
			{
				"infinitivo": "forgive",
				"pasado simple": "forgave",
				"pasado participio": "forgiven",
				"español": "Perdonar",
			},
			{
				"infinitivo": "freeze",
				"pasado simple": "froze",
				"pasado participio": "frozen",
				"español": "Congelar",
			},
			{
				"infinitivo": "get",
				"pasado simple": "got",
				"pasado participio": "gotten",
				"español": "Recibir, conseguir, llegar, etc",
			},
			{
				"infinitivo": "give",
				"pasado simple": "gave",
				"pasado participio": "given",
				"español": "Dar",
			},
			{
				"infinitivo": "go",
				"pasado simple": "went",
				"pasado participio": "gone",
				"español": "Ir",
			},
			{
				"infinitivo": "grow",
				"pasado simple": "grew",
				"pasado participio": "grown",
				"español": "Crecer",
			},
			{
				"infinitivo": "hang",
				"pasado simple": "hung",
				"pasado participio": "hung",
				"español": "Colgar",
			},
			{
				"infinitivo": "have",
				"pasado simple": "had",
				"pasado participio": "had",
				"español": "Tener",
			},
			{
				"infinitivo": "eat",
				"pasado simple": "ate",
				"pasado participio": "eaten",
				"español": "Comer",
			},
			{
				"infinitivo": "hide",
				"pasado simple": "hid",
				"pasado participio": "hidden",
				"español": "Esconder",
			},
			{
				"infinitivo": "hit",
				"pasado simple": "hit",
				"pasado participio": "hit",
				"español": "Pegar, golpear",
			},
			{
				"infinitivo": "eat",
				"pasado simple": "ate",
				"pasado participio": "eaten",
				"español": "Comer",
			},
			{
				"infinitivo": "hold",
				"pasado simple": "held",
				"pasado participio": "held",
				"español": "Sostener",
			},
			{
				"infinitivo": "hurt",
				"pasado simple": "hurt",
				"pasado participio": "hurt",
				"español": "Hacer daño",
			},
			{
				"infinitivo": "keep",
				"pasado simple": "kept",
				"pasado participio": "kept",
				"español": "Guardar, continuar",
			},
			{
				"infinitivo": "know",
				"pasado simple": "knew",
				"pasado participio": "known",
				"español": "Saber, conocer",
			},
			{
				"infinitivo": "lead",
				"pasado simple": "led",
				"pasado participio": "led",
				"español": "liderar, guiar, conducir",
			},
			{
				"infinitivo": "leave",
				"pasado simple": "left",
				"pasado participio": "left",
				"español": "Dejar, irse",
			},
			{
				"infinitivo": "lead",
				"pasado simple": "led",
				"pasado participio": "led",
				"español": "liderar, guiar, conducir",
			},
			{
				"infinitivo": "lend",
				"pasado simple": "lent",
				"pasado participio": "lent",
				"español": "Dejar prestado",
			},
			{
				"infinitivo": "let",
				"pasado simple": "let",
				"pasado participio": "let",
				"español": "Permitir, alquilar",
			},
			{
				"infinitivo": "lose",
				"pasado simple": "lost",
				"pasado participio": "lost",
				"español": "Perder",
			},
			{
				"infinitivo": "make",
				"pasado simple": "made",
				"pasado participio": "made",
				"español": "Hacer",
			},
			{
				"infinitivo": "mean",
				"pasado simple": "meant",
				"pasado participio": "meant",
				"español": "Significar, querer decir",
			},
			{
				"infinitivo": "meet",
				"pasado simple": "met",
				"pasado participio": "met",
				"español": "Conocer, reunirse, encontrarse",
			},
			{
				"infinitivo": "pay",
				"pasado simple": "paid",
				"pasado participio": "paid",
				"español": "Pagar",
			},
			{
				"infinitivo": "put",
				"pasado simple": "put",
				"pasado participio": "put",
				"español": "Poner, colocar",
			},
			{
				"infinitivo": "read",
				"pasado simple": "read",
				"pasado participio": "read",
				"español": "Leer",
			},
			{
				"infinitivo": "ride",
				"pasado simple": "rode",
				"pasado participio": "ridden",
				"español": "Montar (en transporte)",
			},
			{
				"infinitivo": "ring",
				"pasado simple": "rang",
				"pasado participio": "rung",
				"español": "Llamar, sonar",
			},
			{
				"infinitivo": "rise",
				"pasado simple": "rose",
				"pasado participio": "risen",
				"español": "Levantarse, alzarse, subir",
			},
			{
				"infinitivo": "run",
				"pasado simple": "ran",
				"pasado participio": "run",
				"español": "Correr",
			},
			{
				"infinitivo": "say",
				"pasado simple": "said",
				"pasado participio": "said",
				"español": "Decir, contar",
			},
			{
				"infinitivo": "see",
				"pasado simple": "saw",
				"pasado participio": "seen",
				"español": "Ver",
			},
			{
				"infinitivo": "sell",
				"pasado simple": "sold",
				"pasado participio": "sold",
				"español": "Vender",
			},
			{
				"infinitivo": "send",
				"pasado simple": "sent",
				"pasado participio": "sent",
				"español": "Enviar, remitir",
			},
			{
				"infinitivo": "set",
				"pasado simple": "set",
				"pasado participio": "set",
				"español": "Poner, colocar",
			},
			{
				"infinitivo": "show",
				"pasado simple": "showed",
				"pasado participio": "shown",
				"español": "Mostrar, enseñar",
			},
			{
				"infinitivo": "shut",
				"pasado simple": "shut",
				"pasado participio": "shut",
				"español": "Cerrar",
			},
			{
				"infinitivo": "sing",
				"pasado simple": "sang",
				"pasado participio": "sung",
				"español": "Cantar",
			},
			{
				"infinitivo": "sink",
				"pasado simple": "sank",
				"pasado participio": "sunk",
				"español": "Hundirse",
			},
			{
				"infinitivo": "sit",
				"pasado simple": "sat",
				"pasado participio": "sat",
				"español": "Sentarse",
			},
			{
				"infinitivo": "sleep",
				"pasado simple": "slept",
				"pasado participio": "slept",
				"español": "Dormir",
			},
			{
				"infinitivo": "speak",
				"pasado simple": "spoke",
				"pasado participio": "spoken",
				"español": "Hablar",
			},
			{
				"infinitivo": "spend",
				"pasado simple": "spent",
				"pasado participio": "spent",
				"español": "Gastar dinero, pasar tiempo",
			},
			{
				"infinitivo": "steal",
				"pasado simple": "stole",
				"pasado participio": "stolen",
				"español": "Robar",
			},
			{
				"infinitivo": "swim",
				"pasado simple": "swam",
				"pasado participio": "swum",
				"español": "Nadar",
			},
			{
				"infinitivo": "take",
				"pasado simple": "took",
				"pasado participio": "taken",
				"español": "Tomar, llevar",
			},
			{
				"infinitivo": "teach",
				"pasado simple": "taught",
				"pasado participio": "taught",
				"español": "Enseñar",
			},
			{
				"infinitivo": "teach",
				"pasado simple": "taught",
				"pasado participio": "taught",
				"español": "Enseñar",
			},
			{
				"infinitivo": "tell",
				"pasado simple": "told",
				"pasado participio": "told",
				"español": "Decir, contar",
			},
			{
				"infinitivo": "think",
				"pasado simple": "tought",
				"pasado participio": "tought",
				"español": "Pensar",
			},
			{
				"infinitivo": "throw",
				"pasado simple": "threw",
				"pasado participio": "thrown",
				"español": "Lanzar, tirar, arrojar",
			},
			{
				"infinitivo": "understand",
				"pasado simple": "understood",
				"pasado participio": "understood",
				"español": "Entender, comprender",
			},
			{
				"infinitivo": "wake",
				"pasado simple": "woke",
				"pasado participio": "woken",
				"español": "Despertarse",
			},
			{
				"infinitivo": "wear",
				"pasado simple": "wore",
				"pasado participio": "worn",
				"español": "Llevar puesto",
			},
			{
				"infinitivo": "win",
				"pasado simple": "won",
				"pasado participio": "won",
				"español": "Ganar",
			},
			{
				"infinitivo": "write",
				"pasado simple": "wrote",
				"pasado participio": "written",
				"español": "Escribir",
			}
		];
		
		$scope.agitarArreglo = array => {
			let currentIndex = array.length, temporaryValue, randomIndex;
			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
				currentIndex -= 1;
				temporaryValue = array[currentIndex];
				array[currentIndex] = array[randomIndex];
				array[randomIndex] = temporaryValue;
			}
			return array;
		};
		
		
		$scope.elegirModoAleatorio = ()=>{
			$scope.indiceModo = Math.floor(Math.random()*$scope.modos.length);
		};
		$scope.init = ()=>{
			var confirm = $mdDialog.prompt()
			  .title(`Actualmente hay ${$scope.todosLosVerbos.length} verbos.`)
			  .textContent('Elige un rango para practicar (ejemplo: 1, 20 para estudiar los primeros 20)')
			  .placeholder('Escribe el rango')
			  .ariaLabel('Escribe el rango')
			  .initialValue('1,20')
			  .ok('Practicar')
			  .cancel('Cerrar');

			$mdDialog.show(confirm).then(
				rangoString => {
				rangoString = rangoString.replace(" ", "").trim();
				let i = rangoString.indexOf(",");
				if(i !== -1){
					let rangos = rangoString.split(",");
					if(rangos.length > 0){
						let inicio = rangos[0],
							fin = rangos[1];
						if(inicio > 0 && fin <= $scope.todosLosVerbos.length && fin >= inicio){
							$scope.verbos = $scope.agitarArreglo($scope.todosLosVerbos.slice(inicio - 1, fin));
							$scope.elegirModoAleatorio();
							$scope.indiceVerbo = 0;
							$scope.numAciertos = 0;
							$scope.numReactivos = $scope.verbos.length;
							$scope.enfocar();
							return;
						}
					}
				}
				$scope.indicarRangoErroneo();					
				$scope.init();
			}, ()=>{			
				$scope.init();
			});
		};
		
		$scope.indicarRangoErroneo = ()=>{
			$mdToast.show(
                            $mdToast
                                .simple()
                                .textContent("Rango erróneo. Por favor reintenta")
                                .position("bottom left")
                                .hideDelay(1500)
                        );
		};
		
		
		$scope.avanzar = ()=>{
			$scope.elegirModoAleatorio();
			if($scope.indiceVerbo < $scope.verbos.length - 1) $scope.indiceVerbo++;
			else $scope.mostrarResultados();
		};
		
		$scope.mostrarResultados = ()=>{
			$mdDialog.show(
			  $mdDialog.alert()
				.clickOutsideToClose(true)
				.title('Resultados')
				.textContent(`Has terminado. Conseguiste ${$scope.numAciertos} aciertos de ${$scope.numReactivos} reactivos`)
				.ariaLabel('Resultados')
				.ok('Cerrar')
			).then(()=>{
				$scope.init();
			});
		};
		
		
		$scope.enfocar = () =>{
			document.querySelector("#principal").focus();
			$scope.respuesta = {"respuesta": ""};
		};
		
		$scope.intentarResolver = respuesta => {
			if(respuesta){
				respuesta = respuesta.toLowerCase().trim();
				let respuestaCorrecta = $scope.verbos[$scope.indiceVerbo][$scope.modos[$scope.indiceModo]];
				if(respuestaCorrecta === respuesta) $scope.indicarAcierto();
				else $scope.indicarError(respuestaCorrecta);
				$scope.avanzar();
			}else $scope.enfocar();
		};
		
		$scope.indicarAcierto = ()=>{
			$mdToast.show(
                            $mdToast
                                .simple()
                                .textContent("Respuesta correcta")
                                .position("bottom left")
                                .hideDelay(1500)
                        );
			$scope.numAciertos++;
			$scope.enfocar();
		};
		
		$scope.indicarError = respuestaCorrecta =>{
			$scope.enfocar();
			$mdToast.show(
                            $mdToast
                                .simple()
								.action('ACEPTAR')
      							.highlightAction(true)
                                .textContent("Respuesta incorrecta. La respuesta correcta es: " + respuestaCorrecta)
                                .position("bottom left")
                                .hideDelay(0)
                        );
		};
		
		$scope.init();
	}]);
})(angular);