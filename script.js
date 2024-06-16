//var 
var cre,base,c_no_d,tp,inp,amount,but,ap,amo,dis,ADD,day_0,year,y,int,close_d,close_int
var tamount=0,tproduct=0,tdays=0     
var array=[],products=[],amounts=[],days=[]  //save values to arrays


//first action
cre=document.getElementById('submit');
cre.addEventListener('click',create);

function create()//like a main
{ 
  getinp()

  if(c_no_d ===''){
  alert('Please enter How many due date you have') 
  }
  else if(base === '')
  {
    alert('Please enter a base date')
  }
 else
 {
   
  cre.style.visibility = 'hidden'
  d_a()
  ncreate()
  c_dodo()
 

 }
 
  console.log('hi')
}
function getinp()//get a base && num of due date
{
 base=document.getElementById('base_d').value;
 c_no_d=document.getElementById('no').value;
 
 console.log()
}
function d_a()
{
  for(var i=0;i<c_no_d;i++)
  {
      
      var tb=document.getElementById("tb");
     var inp =document.createElement('input');
     inp.setAttribute('type','date')
      inp.setAttribute('class','day')
      inp.setAttribute('placeholder','Due date')

      
     var amount =document.createElement('input');
     amount.setAttribute('type','number')
      amount.setAttribute('class','amount') 
      amount.setAttribute('placeholder','Amount')
      
      var br=document.createElement('br')


      tb.append(inp);
      tb.append(amount);
     // tb.append(br);
      }

}
function c_dodo()
{
  var dodo=document.createElement('button')
    dodo.setAttribute('id','dodo')
   
    dodo.innerText='Submit'
    tb.append(dodo)
    
  but=document.getElementById('dodo');
  but.addEventListener('click',dodos);
}

function dodos()
{

  array.length=0
  amounts.length=0
  products.length=0
  
    
    var days=document.getElementsByClassName('day');

    var amount=document.getElementsByClassName('amount');
    for(var i=0;i<days.length;i++)//Dates
    {
    ap=days[i].value;
    amo=Number(amount[i].value);
    array.push(ap)//
    amounts.push(amo)
   sun(ap)
    }
    if(ap ==='')
    {
      //console.log(ap)
      alert('enter a date')
      // this.style.color='red'
    }
    else if(amo =='')
    {
      //console.log(amo[i])
      alert('enter a amounts')
    }
    else
    {
      
      but.style.visibility='hidden'
      dayscul()
      product()
      total()
      display()
      add()
      interest()
    }
    
    //console.table("it is arrray :"+array)
    //console.table('it is amounts:'+amounts)
  }
function dayscul()
{
 base=new Date(base);
 year=base.getFullYear()

 for(var i=0;i<array.length;i++)//no of days
 {
  var tempDay=new Date(array[i])
 
  // To calculate the time difference of two dates
var Difference_In_Time = tempDay.getTime() - base.getTime();
      
// To calculate the no. of days between two dates
var Difference_In_Days =Difference_In_Time / (1000 * 3600 * 24);
  

days.push(Difference_In_Days)


}
//console.log(base)

//console.table("it is DifferenceDays"+days)
leapch()
}
function product()
{

  for(var i=0;i<amounts.length;i++)
  {
    var mul_pro=days[i]*amounts[i]
    products.push(mul_pro)
  }
//console.table(products)
}
function total()
{
for(var i=0;i<amounts.length;i++)
{
 tamount+=amounts[i];
 tproduct+=products[i];
 tdays+=days[i];
}
//console.log(tamount)
//console.log(tproduct)
//console.log(tdays)
}

function display()
{
  dis=document.getElementById('display');
  var table='<table><tr><th>Date</th><th>Amount</th><th>Num of days</th><th>Product</th></tr>'

    
   dis.innerHTML=table
   for(var i=0;i<array.length;i++)
   {
      table+='<tr><td>'+array[i]+'</td><td>'+amounts[i]+'</td><td>'+days[i]+'</td><td>'+products[i]+'</td></tr>'
    dis.innerHTML=table
   }
   table+='<tr><td colspan="2">Total amount = '+tamount+'</td><td colspan="2">Total product = '+tproduct+'</td></tr>'
  dis.innerHTML=table
}
function add()
{
 ADD=Math.round(tproduct/tamount);

  let DATE=new Date(base)
  DATE.setHours(24*ADD)
  let fur=document.getElementById('formula');
  fur.innerText='ADD = Base date +|- Total Product / Total Amount ';
  let subs=document.getElementById('sub');
  subs.innerText='ADD = '+base_d.value+' +|- '+tproduct+' / '+tamount;
  let result=document.getElementById('result')
  result.innerText='ADD = '+ADD+'days (or) '+DATE
  int =new Date(DATE)
}
function interest()
{
  close_d=document.getElementById('close_d').value;
 close_int=new Date(close_d)
  var Difference_In_Time_int = close_int.getTime() - int.getTime();
  var Difference_In_Days_int=Difference_In_Time_int / (1000 * 3600 * 24);
  console.log(Difference_In_Days_int)
var inte=document.getElementById('int').value;
var interest=tamount*(inte/100)*(Math.round(Difference_In_Days_int)/y);
var dint=document.getElementById('interest').innerText='The interest = '+interest;
console.log(Math.round(Difference_In_Days_int))
}
function sun(ap)
{
 day_0=new Date(ap)
 d=day_0.getDay()
 
 
 if(d===0)
 {
   alert('you enter a sunday it is ok')
 }
 
}
function leapch(){

console.log(y)
if(0 == year%4)
{
  y=366
}
else
{
  y=365
}
}
function ncreate()
{
  var ncre=document.createElement('button')
  ncre.setAttribute('id','ncrea')
  ncre.innerText='create new'
  tb.append(ncre)
  var ncrea=document.getElementById('ncrea')
  ncrea.addEventListener('click',re)
  
}
function re()
{
  window.location.reload()
}
var tog=document.getElementById('tog');
var moon=document.getElementById('tog').src;
tog.addEventListener('click',() =>{
 
 if(tog.src===moon)
 {
  document.getElementById('tog').src='./moon.jpeg'
  
 }
 else if(!moon)
 {
   document.getElementById('tog').src='./images.jpeg'
 }


})

