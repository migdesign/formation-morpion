angular.module('Morpion')
    .controller('MorpionController',function($rootScope,$scope,gameData){
        this.playing = false;//booleen partie commencé oui ou non
        this.results=false;
        this.isDraw=false;
        this.winner;
        this.start = ()=>{
            this.playing=true;
            $rootScope.$Broadcast('morpion-start');//emission de l'événement "morpion-start" en broadcast
        };
        $scope.$on('morpion-stop', ()=>{
            this.results=true;
            gameData.switchPlayer();
            this.isDraw=gameData.status.isDraw;
            this.winner=gameData.players[gameData.current];
            this.playing=false;
        });
});