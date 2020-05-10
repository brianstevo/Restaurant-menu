function dm(amount)
{
string = "" + amount;
dec = string.length - string.indexOf('.');
if (string.indexOf('.') == -1)
return string + '.00';
if (dec == 1)
return string + '00';
if (dec == 2)
return string + '0';
if (dec > 3)
return string.substring(0,string.length-dec+3);
return string;
}

function calculate()
{

   QtyA = 0; QtyB = 0; QtyC = 0;QtyD=0;QtyE=0;QtyF=0;QtyG=0;QtyH=0;QtyI=0;QtyJ=0;QtyK=0;QtyL=0;
   TotA = 0; TotB = 0; TotC = 0;TotD=0;TotE=0;TotF=0;TotG=0;TotH=0;TotI=0;TotJ=0;TotL=0;TotL=0;

   PrcA =10; PrcB =10; PrcC =10;PrcD=10;PrcE=10;PrcF=10;PrcG=10;PrcH=10;PrcI=10;PrcJ=10;PrcK=10;PrcL=10;



   if (document.ofrm.qtyA.value > "")
      { QtyA = document.ofrm.qtyA.value };
   document.ofrm.qtyA.value = eval(QtyA);
    
   if (document.ofrm.qtyB.value > "")
      { QtyB = document.ofrm.qtyB.value };
   document.ofrm.qtyB.value = eval(QtyB);

   if (document.ofrm.qtyC.value > "")
      { QtyC = document.ofrm.qtyC.value };
   document.ofrm.qtyC.value = eval(QtyC);
    
   if (document.ofrm.qtyD.value > "")
      { QtyD = document.ofrm.qtyD.value };
   document.ofrm.qtyD.value = eval(QtyD);

    if (document.ofrm.qtyE.value > "")
      { QtyE = document.ofrm.qtyE.value };
   document.ofrm.qtyE.value = eval(QtyE);

    if (document.ofrm.qtyF.value > "")
      { QtyF = document.ofrm.qtyF.value };
   document.ofrm.qtyF.value = eval(QtyF);

    if (document.ofrm.qtyG.value > "")
      { QtyG = document.ofrm.qtyG.value };
   document.ofrm.qtyG.value = eval(QtyG);

    if (document.ofrm.qtyH.value > "")
      { QtyH = document.ofrm.qtyH.value };
   document.ofrm.qtyH.value = eval(QtyH);

    if (document.ofrm.qtyI.value > "")
      { QtyI = document.ofrm.qtyI.value };
   document.ofrm.qtyI.value = eval(QtyI);

    if (document.ofrm.qtyJ.value > "")
      { QtyJ = document.ofrm.qtyJ.value };
   document.ofrm.qtyJ.value = eval(QtyJ);
        
    if (document.ofrm.qtyK.value > "")
      { QtyK = document.ofrm.qtyK.value };
   document.ofrm.qtyK.value = eval(QtyK);
        
    if (document.ofrm.qtyL.value > "")
      { QtyL = document.ofrm.qtyL.value };
   document.ofrm.qtyL.value = eval(QtyL);




    TotA = QtyA * PrcA;
   document.ofrm.totalA.value = dm(eval(TotA));
   
    TotB = QtyB * PrcB;
   document.ofrm.totalB.value = dm(eval(TotB));

    TotC = QtyC * PrcC;
   document.ofrm.totalC.value = dm(eval(TotC));
    
    TotD = QtyD * PrcD;
   document.ofrm.totalD.value = dm(eval(TotD));
    
    TotE = QtyE * PrcE;
   document.ofrm.totalE.value = dm(eval(TotE));

    TotF = QtyF * PrcF;
   document.ofrm.totalF.value = dm(eval(TotF));

    TotG = QtyG * PrcG;
   document.ofrm.totalG.value = dm(eval(TotG));

    TotH = QtyH * PrcH;
   document.ofrm.totalH.value = dm(eval(TotH));

    TotI = QtyI * PrcI;
   document.ofrm.totalI.value = dm(eval(TotI));

    TotJ = QtyJ * PrcJ;
   document.ofrm.totalJ.value = dm(eval(TotJ));

    TotK = QtyK * PrcK;
   document.ofrm.totalK.value = dm(eval(TotK));

    TotL = QtyL * PrcL;
   document.ofrm.totalL.value = dm(eval(TotL));




   Totamt =
       eval(TotA) +
       eval(TotB) +
       eval(TotC) +
       eval(TotD) +
       eval(TotE) +
       eval(TotF) +
       eval(TotG) +
       eval(TotH) +
       eval(TotI) +
       eval(TotJ) +
       eval(TotK) +
       eval(TotL);

   document.ofrm.GrandTotal.value = dm(eval(Totamt));

}