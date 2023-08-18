const CalculateBtn=document.getElementById('CalculateBtn');
CalculateBtn.addEventListener('click',(event)=>{
    event.preventDefault()
    const incomeBlance=document.getElementById('incomeBlance').value;
    const newIncBlnc=parseFloat(incomeBlance);
    document.getElementById('incomeBlance').innerHTML=newIncBlnc.toFixed(2);
    if (isNaN(newIncBlnc) || newIncBlnc < 0) {
        alert("Income balance cannot be negative or empty.");
        return;
    }
  

    const DesktopInput=document.getElementById('DesktopInput').value;
    const bookInput=document.getElementById('bookInput').value;
    const penInput=document.getElementById('penInput').value;
    const totall=parseFloat(DesktopInput)+parseFloat(bookInput) +parseFloat(penInput);
    if (parseFloat(DesktopInput) < 0) {
        alert(" negative value is not allow");
        return;
    }else if(parseFloat(bookInput) < 0){
        alert(" negative value is not allow");
        return;
    }else if(parseFloat(penInput) < 0){
        alert(" negative value is not allow");
        return;
    };
    if(DesktopInput == '' || bookInput == '' || penInput == ''){
        return DesktopInput,bookInput,penInput
    }

    const totallExpenses=document.getElementById('totallExpenses').innerHTML;
    const newTotalExpenses=parseFloat(totallExpenses);
    document.getElementById('totallExpenses').innerHTML=totall.toFixed(2);
    const lessBlance=newIncBlnc-totall;
    if (lessBlance < 0) {
        alert("Expenses exceed income balance!");  
    }

    const blance=document.getElementById('blance').innerHTML;
    const newBlance=parseFloat(blance);
    document.getElementById('blance').innerHTML=lessBlance.toFixed(2);

});


    // saveing area
    const saveBtn=document.getElementById('saveBtn');
    saveBtn.addEventListener('click',()=>{
        const saveInput=document.getElementById('saveInput').value;
        const newSaveInput=parseFloat(saveInput);
        if(saveInput==""){
          const saveInput=0;
          return saveInput
        }
        document.getElementById('saveInput').value='';

        const blance=document.getElementById('blance').innerHTML;
        const newBlance=parseFloat(blance);
        const remainder=blance % newSaveInput;
        const subtractionBlance=blance-remainder;
        document.getElementById('blance').innerHTML=subtractionBlance.toFixed(2);

        const savingAmount=document.getElementById('savingAmount').innerHTML;
        const newsavingAmount=parseFloat(savingAmount);
        document.getElementById('savingAmount').innerHTML=remainder.toFixed(2);

        const remaingAmount=document.getElementById('remaingAmount').innerHTML;
        const newRemaingAmount=parseFloat(remaingAmount);
        document.getElementById('remaingAmount').innerHTML=subtractionBlance.toFixed(2);
        

    });
