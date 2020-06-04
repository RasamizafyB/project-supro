//Time for the deal of the day

const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

setInterval(refresh, 1000)

function refresh() {
    let today = new Date();
    
    let todayHours = today.getHours();
    let todayMinutes = today.getMinutes();
    let todaySeconds = today.getSeconds();
    
    let hoursGap = 23 - todayHours;
    let minutesGap = 59 - todayMinutes;
    let secondsGap = 59 - todaySeconds;
    
    hour.innerHTML = hoursGap;
    minute.innerHTML = minutesGap;
    second.innerHTML = secondsGap;

    if (hour.textContent<10) {
        hour.textContent = "0" + hour.textContent;
    }
    if (minute.textContent<10) {
        minute.textContent = "0" + minute.textContent;
    }
    if (second.textContent<10) {
        second.textContent = "0" + second.textContent;
    }
}

//Change star classes !!! Has to be updated with a for loop or something

const allStar = document.querySelectorAll(".star")

for (let i = 0; i < allStar.length; i++) {

    let s1 = document.querySelector("#s1")
    let s2 = document.querySelector("#s2")
    let s3 = document.querySelector("#s3")
    let s4 = document.querySelector("#s4")
    let s5 = document.querySelector("#s5")

    
    s1.addEventListener("click", () => {
        s1.classList.add("y")
        s2.classList.remove("y")
        s3.classList.remove("y")
        s4.classList.remove("y")
        s5.classList.remove("y")
    })
    
    s2.addEventListener("click", () => {
        s1.classList.add("y")
        s2.classList.add("y")
        s3.classList.remove("y")
        s4.classList.remove("y")
        s5.classList.remove("y")
    })
    
    s3.addEventListener("click", () => {
        s1.classList.add("y")
        s2.classList.add("y")
        s3.classList.add("y")
        s4.classList.remove("y")
        s5.classList.remove("y")
    })
    
    s4.addEventListener("click", () => {
        s1.classList.add("y")
        s2.classList.add("y")
        s3.classList.add("y")
    s4.classList.add("y")
    s5.classList.remove("y")
    })

    s5.addEventListener("click", () => {
        s1.classList.add("y")
        s2.classList.add("y")
        s3.classList.add("y")
        s4.classList.add("y")
        s5.classList.add("y")
    })

    let s6 = document.querySelector("#s6")
    let s7 = document.querySelector("#s7")
    let s8 = document.querySelector("#s8")
    let s9 = document.querySelector("#s9")
    let s10 = document.querySelector("#s10")

    
    s6.addEventListener("click", () => {
        s6.classList.add("y")
        s7.classList.remove("y")
        s8.classList.remove("y")
        s9.classList.remove("y")
        s10.classList.remove("y")
    })
    
    s7.addEventListener("click", () => {
        s6.classList.add("y")
        s7.classList.add("y")
        s8.classList.remove("y")
        s9.classList.remove("y")
        s10.classList.remove("y")
    })
    
    s8.addEventListener("click", () => {
        s6.classList.add("y")
        s7.classList.add("y")
        s8.classList.add("y")
        s9.classList.remove("y")
        s10.classList.remove("y")
    })
    
    s9.addEventListener("click", () => {
        s6.classList.add("y")
        s7.classList.add("y")
        s8.classList.add("y")
        s9.classList.add("y")
        s10.classList.remove("y")
    })

    s10.addEventListener("click", () => {
        s6.classList.add("y")
        s7.classList.add("y")
        s8.classList.add("y")
        s9.classList.add("y")
        s10.classList.add("y")
    })

    let s11 = document.querySelector("#s11")
    let s12 = document.querySelector("#s12")
    let s13 = document.querySelector("#s13")
    let s14 = document.querySelector("#s14")
    let s15 = document.querySelector("#s15")

    
    s11.addEventListener("click", () => {
        s11.classList.add("y")
        s12.classList.remove("y")
        s13.classList.remove("y")
        s14.classList.remove("y")
        s15.classList.remove("y")
    })
    
    s12.addEventListener("click", () => {
        s11.classList.add("y")
        s12.classList.add("y")
        s13.classList.remove("y")
        s14.classList.remove("y")
        s15.classList.remove("y")
    })
    
    s13.addEventListener("click", () => {
        s11.classList.add("y")
        s12.classList.add("y")
        s13.classList.add("y")
        s14.classList.remove("y")
        s15.classList.remove("y")
    })
    
    s14.addEventListener("click", () => {
        s11.classList.add("y")
        s12.classList.add("y")
        s13.classList.add("y")
        s14.classList.add("y")
        s15.classList.remove("y")
    })

    s15.addEventListener("click", () => {
        s11.classList.add("y")
        s12.classList.add("y")
        s13.classList.add("y")
        s14.classList.add("y")
        s15.classList.add("y")
    })
    
    let s16 = document.querySelector("#s16")
    let s17 = document.querySelector("#s17")
    let s18 = document.querySelector("#s18")
    let s19 = document.querySelector("#s19")
    let s20 = document.querySelector("#s20")

    
    s16.addEventListener("click", () => {
        s16.classList.add("y")
        s17.classList.remove("y")
        s18.classList.remove("y")
        s19.classList.remove("y")
        s20.classList.remove("y")
    })
    
    s17.addEventListener("click", () => {
        s16.classList.add("y")
        s17.classList.add("y")
        s18.classList.remove("y")
        s19.classList.remove("y")
        s20.classList.remove("y")
    })
    
    s18.addEventListener("click", () => {
        s16.classList.add("y")
        s17.classList.add("y")
        s18.classList.add("y")
        s19.classList.remove("y")
        s20.classList.remove("y")
    })
    
    s19.addEventListener("click", () => {
        s16.classList.add("y")
        s17.classList.add("y")
        s18.classList.add("y")
        s19.classList.add("y")
        s20.classList.remove("y")
    })

    s20.addEventListener("click", () => {
        s16.classList.add("y")
        s17.classList.add("y")
        s18.classList.add("y")
        s19.classList.add("y")
        s20.classList.add("y")
    })

    let s21 = document.querySelector("#s21")
    let s22 = document.querySelector("#s22")
    let s23 = document.querySelector("#s23")
    let s24 = document.querySelector("#s24")
    let s25 = document.querySelector("#s25")

    
    s21.addEventListener("click", () => {
        s21.classList.add("y")
        s22.classList.remove("y")
        s23.classList.remove("y")
        s24.classList.remove("y")
        s25.classList.remove("y")
    })
    
    s22.addEventListener("click", () => {
        s21.classList.add("y")
        s22.classList.add("y")
        s23.classList.remove("y")
        s24.classList.remove("y")
        s25.classList.remove("y")
    })
    
    s23.addEventListener("click", () => {
        s21.classList.add("y")
        s22.classList.add("y")
        s23.classList.add("y")
        s24.classList.remove("y")
        s25.classList.remove("y")
    })
    
    s24.addEventListener("click", () => {
        s21.classList.add("y")
        s22.classList.add("y")
        s23.classList.add("y")
        s24.classList.add("y")
        s25.classList.remove("y")
    })

    s25.addEventListener("click", () => {
        s21.classList.add("y")
        s22.classList.add("y")
        s23.classList.add("y")
        s24.classList.add("y")
        s25.classList.add("y")
    })

    let s26 = document.querySelector("#s26")
    let s27 = document.querySelector("#s27")
    let s28 = document.querySelector("#s28")
    let s29 = document.querySelector("#s29")
    let s30 = document.querySelector("#s30")

    
    s26.addEventListener("click", () => {
        s26.classList.add("y")
        s27.classList.remove("y")
        s28.classList.remove("y")
        s29.classList.remove("y")
        s30.classList.remove("y")
    })
    
    s27.addEventListener("click", () => {
        s26.classList.add("y")
        s27.classList.add("y")
        s28.classList.remove("y")
        s29.classList.remove("y")
        s30.classList.remove("y")
    })
    
    s28.addEventListener("click", () => {
        s26.classList.add("y")
        s27.classList.add("y")
        s28.classList.add("y")
        s29.classList.remove("y")
        s30.classList.remove("y")
    })
    
    s29.addEventListener("click", () => {
        s26.classList.add("y")
        s27.classList.add("y")
        s28.classList.add("y")
        s29.classList.add("y")
        s30.classList.remove("y")
    })

    s30.addEventListener("click", () => {
        s26.classList.add("y")
        s27.classList.add("y")
        s28.classList.add("y")
        s29.classList.add("y")
        s30.classList.add("y")
    })

}