const USER_ID='admin';
const PASSWORD='admin123';

function login(){
    const userid=document.getElementById('userid').value;
    const password=document.getElementById('password').value;

    if(userid===USER_ID && password===PASSWORD){
        document.getElementById('loginContainer').classList.add('hidden');
        document.getElementById('appContainer').classList.remove('hidden');
        generateReceiptNumber();
    }else{
        document.getElementById('loginError').innerText='Invalid User ID or Password';
    }
}

function logout(){
    location.reload();
}

function generateReceiptNumber(){
    const now=new Date();

    const year=now.getFullYear();
    const month=String(now.getMonth()+1).padStart(2,'0');

    let counter=localStorage.getItem('receiptCounter');

    if(!counter){
        counter=1;
    }else{
        counter=parseInt(counter)+1;
    }

    localStorage.setItem('receiptCounter',counter);

    const receiptNo=`${year}${month}${String(counter).padStart(4,'0')}`;

    document.getElementById('receiptNumber').value=receiptNo;
}

function generateReceipt(){
    alert('Receipt Generated Successfully');
}

function downloadPDF(){
    const element=document.getElementById('receiptArea');

    html2pdf().from(element).save('Abyunnati_Receipt.pdf');
}
