
const goalBtn = document.getElementById("liveToastBtn"); // ekle butonunu seçtim.
goalBtn.addEventListener('click', addGoal); //ekle'ye tıklayınca addGoal fonksiyonu çalışır.


function addGoal() {
    let goal = document.getElementById("task").value.trim(); //inputtaki değeri alıp boşluları sildim.
    let list = document.getElementById("list");

    if (!goal) { //eğer hedef kısmı boş bırakılırsa uyarı verdim.
        $(".error").toast("show");
    } else { 
        let newGoal = document.createElement("li");
        newGoal.textContent = goal;
        
        const exit = document.createElement("span");
        exit.textContent ="x";
        exit.className ="close";
        newGoal.appendChild(exit); 
        
        list.appendChild(newGoal); //listenin en altına yeni hedefi yazdım.
        $(".success").toast("show"); //işlem başarılı mesajı verdim.
        document.getElementById("task").value = ""; //hedef içeriği temizledim.
    }
}

const selectList = document.getElementById("list"); 
selectList.addEventListener('click', (event) => { //hedef listesine tıkladığımda;
    
    if(event.target.tagName=="LI"){ //li elementine tıklanırsa ilgili satır seçilir.
        console.log("çalıştı")
        const li = event.target;
        li.classList.toggle("checked");

    }else if(event.target.className=="close"){ //çarpı'ya tıklanırsa hedefi siler.
        event.target.parentElement.remove();
    }
});





