
function insert(num) {
    document.form.textview.value = document.form.textview.value + num;
    
    }
    
    function clean() {
        document.form.textview.value = "";
    
    }
    
     function equal() {
     let exp =  document.form.textview.value;
    if(exp) { document.form.textview.value = eval(exp);
    
    }
    
    
     }
    
     function signn() {
        document.form.textview.value = (-1)*(document.form.textview.value);
    
     }
    
     function persent()
     {
    
        let a = '';
        let b = '';
        
        let sign = '';
        let sum = '';
        let raznica = '';
        let multi = '';
        let defet = '';
        let proto = '';
        
        let m = '';
        
       
        let number = document.form.textview.value;
    
        for(let i=0; i<(number.length); i++) 
    
        {       
            if(number[0]=='-')
            m=1;
        }
    
        if(m=='')
        {
    
            for(let i=0; i<(number.length-1); i++)  
              {
                        
                if(b == '' && number[i] !== '+' && number[i] !== '-' && number[i] !== '*' && number[i] !== '/') 
                
                {a = a + number[i];}
                 
                  else
                
                  {b = b + number[i+1];}              
                             
              }
              b = (a*b)/100;
    
        }
        
              
        if(m==1) 
              
          {
    
            
             for(let i=1; i<(number.length-1); i++)
              { 
               if(b == '' && number[i] !== '+' && number[i] !== '-' && number[i] !== '*' && number[i] !== '/') 
                     
               {a = a + number[i];}
                  
               
               
                else
                {b = b + number[i+1];} 
         
               }
            
          a = -a;
          b = ((-a)*b)/100; 
           
          }
    
    
    
          // определяем знак
          for(let i=0; i<(number.length); i++)
    
             
           {
           
             
           if(number[i] == '+')
           {sign = "+"}
           
           
           if(number[i] == '-' && i!==0)
           {sign = "-"}
           
           
           
           
           
           if(number[i] == '*')
           {sign = '*'}
           
           
           
           if(number[i] == '/')
           {sign = '/'}
           
             }
    
    
    
    
    
    
    
    //  производим вычисления
    
        if(i=(number.length))
                                {
                         
                                  switch (sign) {
                                
                                    case '+':
                                    sum = (+a)+(+b);
                                    proto = sum;
                                    break;
                                
                                    case '-':
                                    raznica = (a)-(b);
                                    proto = raznica;
                                    break;
                         
                                    case '*':
                                    multi = (a)*(b);
                                    proto = multi;
                                    break;
                         
                                    case '/':
                                    defet = (a)/(b);
                                    proto = defet;
                                    break;
                                                  }
                                 }
                                             
                                 
                                
                                 document.form.textview.value = proto;                          
    
          
    
         }
        // function persent
    
     
    
    
    
    
    
    