angular.module('Morpion')
.component('morpionCell', {
    templateUrl: 'morpion-cell.template.html',
    bindings: {
        'index': '@',
        'currentPlayer': '<',
        'onMove': '&'
    },
    controller: function($scope) {
        var ctrl = this;
        ctrl.played = false;
        ctrl.playerClass = '';
        ctrl.play = () => {
            if (!ctrl.played) {
                ctrl.played = true;
                ctrl.playerClass = ctrl.currentPlayer;
                ctrl.onMove({index: ctrl.index});
            } else {
                console.warn('Impossible de jouer ici...');
            }
        };
        ctrl.reset = () => {
            ctrl.playerClass = '';
            ctrl.played = false;
        };
        ctrl.$onChanges = (changes) => {
            if (changes.currentPlayer.currentValue === ''
                && changes.currentPlayer.previousValue) {
                ctrl.reset();
            }
        };
    }
});

// angular.module('Morpion')
//     .component('morpionCell',{
        
//         templateUrl:'morpion-cell.template.html',
//         bindings:{
//             'index':'@'//pour signaler à angular c'est une constante
//         },
//         controller:function($scope,gameData){
//             var ctrl = this;
//             ctrl.playerClass='',
//             ctrl.played=false;

//             ctrl.play = ()=>{
//                 if(!ctrl.played){
//                     ctrl.played=true;
//                     ctrl.playerClass = gameData.players[gameData.current];
//                     gameData.switchPlayer();
//                     gameData.values[ctrl.index]=ctrl.playerClass;
                    
//                 }else{
//                     console.log('PLAYED !')
//                     console.log('Imposssible de jouer ici ...');
//                 };
                
//                 ctrl.reset = () =>{
//                     ctrl.playerClass = '';
//                     ctrl.played = false;
//                 };
//                 $scope.$on('morpion-start',ctrl.reset);//pas de parentese car la function sera appelé au moment de l'arriver de l'événement
//                 //c'est juste la definition de la function à éxécuter le moment venu
//                 //$scope.$on('morpion-start',ctrl.reset); === $scope.$on('morpion-start',() =>{
//                                                                                             //ctrl.playerClass = '';
//                                                                                             //ctrl.played = false;
//                                                                                         //});
//             }
//         }

// });