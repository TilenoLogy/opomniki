stevilo = 1
element = "test" + stevilo
function Create(){
    const vsebina = document.getElementById("vsebina");
    const value = vsebina.value;
    console.log(value);
    
    const text = document.getElementById(element);
    document.cookie = ("test" + stevilo + "=" + value)
    document.cookie = ("stevilo" + "=" + stevilo)
    stevilo = stevilo+1
    element = "test" + stevilo
    
    
    text.innerHTML = value


    allCookies = document.cookie;
    
    
    console.log("Cookie", allCookies)




}




function DeleteAll(){
    stevilo = 1
    element = "test" + stevilo
    for (let i = 0; i<20; i++) {
        const vsebina = document.getElementById("vsebina");
        const value = vsebina.value;

        const text = document.getElementById(element);
        stevilo = stevilo+1
        element = "test" + stevilo
    
        text.innerHTML = ""
        const cookies = document.cookie.split(";");

    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    }
    stevilo = 1
    element = "test" + stevilo
}





function LoadCookies() {
    st = document.cookie.valueOf(stevilo)
    


    const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("stevilo="))
        ?.split("=")[1];


        if (cookieValue == null) {

        } 

        else{
            stevilo = 1
            for (let i = 0; i<cookieValue; i++){
                
                element = "test" + stevilo
                const value1 = document.cookie
                    .split("; ")
                    .find((row) => row.startsWith(element + "="))
                    ?.split("=")[1];
                const text = document.getElementById(element);
                text.innerHTML = value1
                stevilo++
            }
        

        }

        }

