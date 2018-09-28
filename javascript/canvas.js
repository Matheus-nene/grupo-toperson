function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // var charBody = canvas.getContext('2d');

    const PI = 3.14;

    ctx.beginPath();
    ctx.arc(340, 300, 20, 0, Math.PI * 2, true); // Círculo exterior
    ctx.fillStyle = "black"; //colorindo a porra da cabeça do personagem do canvas
    ctx.fill();

    ctx.beginPath();

    ctx.moveTo(340,320); // corpo
    ctx.lineTo(340,360);

//---------------------Braço Esquerdo------------------------------


    ctx.moveTo(340,320); // braço esquerdo
    ctx.lineTo(310,315); //passar o Line <<<

    ctx.moveTo(310,315); // ante-braço esquerdo
    ctx.lineTo(310,285);
    ctx.moveTo(295,305);
    ctx.lineWidth = 5;
    ctx.stroke();
//----------------------Foice--------------------------------------

    img = document.getElementById('zikuda');
    ctx.drawImage(img , 245, 140);

//---------------------Braço Direito-------------------------------
    ctx.beginPath();
    ctx.moveTo(340,320); // braço direito
    ctx.lineTo(310,325);

    ctx.moveTo(310,325); // ante-braço direito
    ctx.lineTo(305,295);



//---------------------Perna---------------------------------------

    ctx.moveTo(340,360); //perna esquerda
    ctx.lineTo(320,400);

    ctx.moveTo(340,360); //perna direita
    ctx.lineTo(360,400);

//-----------------------------------------------------------------
    ctx.lineWidth = 5;
    ctx.stroke();


    //Espada zika ;-;
    /*
    ctx.beginPath();
    ctx.moveTo(50,12.5);
    ctx.lineTo(62.5,25);
    ctx.lineTo(58,100);
    ctx.lineTo(80,98);
    ctx.lineTo(80,112);
    ctx.lineTo(55,110);
    ctx.lineTo(57,140);
    ctx.lineTo(45.5,140);
    ctx.lineTo(47.5,110);
    ctx.lineTo(20,112);
    ctx.lineTo(20,98);
    ctx.lineTo(42,100);
    ctx.lineTo(37.5,25);
    ctx.lineTo(50,12.5);
    ctx.fillStyle = "#3B3B3B";
    ctx.fill();
    

    ctx.beginPath();
    ctx.moveTo(295,305);
    ctx.lineTo(315,280);
    ctx.stroke();

    ctx.beginPath()
    ctx.moveTo(292,302);
    ctx.lineTo(312,277);
    ctx.strokeStyle = "#3B3B3B";
    ctx.stroke();


    var grad = ctx.createLinearGradient(314, 279, 380, 200);
    grad.addColorStop(0, "white");
    grad.addColorStop(1, "red");

    ctx.strokeStyle = grad;

    ctx.beginPath();
    ctx.moveTo(314,279);
    ctx.lineTo(380,200);
    ctx.lineWidth = 10;
    ctx.stroke();
    */

    ctx.moveTo(295,305);

    img = document.getElementById('zikuda');

    
    ctx.drawImage(img , 245, 140);

    function ataque(e){

        if()

    }

  }
}