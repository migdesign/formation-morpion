'use strict'
//value = stock un objet c'est comme une factory
//le module est obligatoire
//le module est un contenair
let gameData={//service gameDate du fait qu'il soit défini dans le value du module 
    players:['red','blue'],//Tableau des joueurs
    current:0,//indice joueur courant
    values:[],//Tableau de l'historique des cellules joué
    status:{
        isDraw:false,//drapeau match NUL
        winner:'',//booleen match VICTOIRE
        playing:false//booleen est en train de joué
    },
    switchPlayer:()=>gameData.current=(gameData.current + 1)%2//inverse l'indice du joueur courant
};

angular.module('Morpion',[])
    .value('gameData',gameData
    );

