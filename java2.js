
var table=document.querySelector('table')
console.log(table);
var c=table.querySelectorAll("td");
var turn=1;
var tt=document.querySelector(".turn");
var board=[[0,0,0],[0,0,0],[0,0,0]];





function rowCrossed()
{
    for (var i=0; i<3; i++)
    {
        if (board[i][0] == board[i][1] &&
            board[i][1] == board[i][2] && 
            board[i][0] != 0)
            return (true);
    }
    return(false);
}
  
// A function that returns true if any of the column
// is crossed with the same player's move
function columnCrossed()
{
    for (var i=0; i<3; i++)
    {
        if (board[0][i] == board[1][i] &&
            board[1][i] == board[2][i] && 
            board[0][i] != 0)
            return (true);
    }
    return(false);
}
  
// A function that returns true if any of the diagonal
// is crossed with the same player's move
function diagonalCrossed()
{
    if (board[0][0] == board[1][1] &&
        board[1][1] == board[2][2] && 
        board[0][0] != 0)
        return(true);
          
    if (board[0][2] == board[1][1] &&
        board[1][1] == board[2][0] &&
         board[0][2] != 0)
        return(true);
  
    return(false);
}












table.addEventListener('click',function(e){

    if(rowCrossed()||columnCrossed()||diagonalCrossed())
    return; 
    
    
    x=e.target.cellIndex;
    y=e.target.parentElement.rowIndex;
    
    if(x!=undefined && y!=undefined ){
        var m=(table.querySelectorAll('tr')[y].querySelectorAll('td')[x]);
        if (m.innerHTML==''){
            console.log(board)
            if (turn==1){
                toX(m)
                board[y][x]=1
                turn=2
                tt.innerHTML="Turn of Player 2";
            }
            else{
            toz(m)
            turn=1
            board[y][x]=2
            tt.innerHTML="Turn of Player 1";
            }
            if(rowCrossed()||columnCrossed()||diagonalCrossed()){
                var q=false
               setTimeout(() => {  q=confirm("player "+turn+" lost") }, 500);
               console.log(q);
                
                

                
            }

        }
        
    }

});

var restart=document.querySelector("#but");
restart.addEventListener('click',function(t){
    for(var i=0;i<9;i++){
        tob(c[i])
    }
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){
            board[i][j]=0;
        }

    }
    turn=1
    tt.innerHTML="Turn of Player 1";

})



function toX(c) {
    
    c.innerHTML='X'
c.style.fontSize='62px';
c.style.paddingBottom='2px';
c.style.paddingLeft='26px';
  }


  function tob(c) {
    
c.innerHTML=''
c.style.fontSize='62px';
c.style.paddingBottom='2px';
c.style.paddingLeft='26px';
  }

  function toz(c) {
    
    c.innerHTML='O'
    c.style.fontSize='63px';
    c.style.paddingLeft='22px';
      }


