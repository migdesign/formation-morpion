angular.module('Morpion')
.component('morpion', {
    templateUrl: 'morpion.template.html',
    bindings: {
        'onStop': '&',
        'playing': '<'
    },
    controller: function($scope, gameData) {
        var ctrl = this;
        ctrl.currentPlayer = gameData.players[gameData.current];
        ctrl.doMove = (index) => {
            gameData.values[index] = ctrl.currentPlayer;
            if (!ctrl.checkWin()) {
                gameData.switchPlayer();
                ctrl.currentPlayer = gameData.players[gameData.current];
            }
        };
        let checkCase = (c1, c2, c3) => {
            return c1 ? c1 === c2 && c1 === c3 : false;
        };
        ctrl.checkWin = () => {
            // Vérification des cases jouées.
            let result = false;
            for (let i = 0; i < 9; ++i) {
                if (i % 3 == 0) {
                    // Lignes
                    result = result || checkCase(
                        gameData.values[i],
                        gameData.values[i+1],
                        gameData.values[i+2]);
                }
                if (i < 3) {
                    // Colonnes
                    result = result || checkCase(
                        gameData.values[i],
                        gameData.values[i+3],
                        gameData.values[i+6]);
                }
            }
            // Diagonales
            result = result || checkCase(
                    gameData.values[0],
                    gameData.values[4],
                    gameData.values[8]);
            result = result || checkCase(
                    gameData.values[2],
                    gameData.values[4],
                    gameData.values[6]);
            let isDraw = !result && Object.keys(gameData.values).length === 9;
            if (result || isDraw) {
                gameData.status.isDraw = isDraw;
                $scope.$emit('morpion-stop');
                return true;
            } else {
                return false;
            }
        };
        $scope.$on('morpion-start', () => {
            // gameData.players.reverse();
            // gameData.current = 0;
            gameData.values = [];
            gameData.status.isDraw = false;
            gameData.status.playing = false;
            gameData.status.winner = '';
        });
    }
});
// angular.module('Morpion')
//     .component('morpion',{//morpion sera le selector a mettre dans le html 
        
//         templateUrl:'morpion.template.html',
//         controller:function($scope,gameData){//prend pour paramétre le service gamedata qui permet l'infection de donnée
//             var ctrl=this;
//             let checkCase = (c1,c2,c3)=>{
//                 return c1 ? c1 === c2 && c1 === c3 : false;
//             };

//             ctrl.checkWin = () =>{
//                 console.log(gameData.values);
//                 console.log(gameData);

//                 let result = false;
//                 //Verification des cases jouées
//                 for(let i = 0; i <9 ;++i){
//                     if(i % 3 == 0){
//                         //lignes
//                         result=result || checkCase(
//                             gameData.values[i],
//                             gameData.values[i+1],
//                             gameData.values[i+2]);

//                         console.log('result lignes - cell '+i+' : ' + result);
//                     }
//                     if(i < 3 ){
//                         //colonnes
//                         result=result || checkCase(
//                             gameData.values[i],
//                             gameData.values[i+3],
//                             gameData.values[i+6]);

//                         console.log('result colonne - cell '+i+': ' + result);
//                     }
//                 }
//                 result = result || checkCase( 
//                         gameData.values[0],
//                         gameData.values[4],
//                         gameData.values[8]);

//                 result= result || checkCase(
//                         gameData.values[2],
//                         gameData.values[4],
//                         gameData.values[6]);

//                 console.log('result diag -  : ' + result);
//                 //ctrl.result=result;
//                 //pas de gagnant et que le tableau est plein
//                 let isDraw = !result && Object.keys(gameData.values).length === 9;
//                 if(result || isDraw){
//                     gameData.status.isDraw =isDraw;
//                     $scope.$emit('morpion-stop');

//                 }
//             };
//             //quand on intercepte l'événement "morpion-start" on éxécute la fonction callback
//             $scope.$on('morpion-start',()=>{
//                 //on réinitialise les valeurs
//                 gameData.players.reverse();
//                 gameData.values=[];
//                 gameData.status.isDraw = false;
//                 gameData.status.playing = false;
//                 gameData.status.winner = '';
//             });


//         }

// });