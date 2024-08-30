/**

   Real usecases:

    - mega sales going on ecommerce web apps.
    - OTP send
    - online tests

    Requiremnts:
        must have features:
            - you need a timer HH: MM: SS
            - play and pause the timer
            - reset the timer with values 00 : 00
        Good to have:
            - you can validate the input fields so that negative are not allowed
*/

class Timer {

    constructor(minMSB, minLSB, secMSB, secLSB, start, stop, reset, display ){

        this.minMSB = document.getElementById(minMSB);
        this.minLSB = document.getElementById(minLSB);
        this.secMSB = document.getElementById(secMSB);
        this.secLSB = document.getElementById(secLSB);
        this.startBtn = document.getElementById(start);
        this.stopBtn = document.getElementById(stop);
        this.resetBtn = document.getElementById(reset);
        this.display = document.getElementById(display);

        this.submittBtn = document.querySelector('form button');

        // all the methods will be bind here
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);

        this.minutes = 0;
        this.seconds = 0;
        this.intervalId  = null;

        // Listenting the events on btn elements
        this.startBtn.addEventListener('click', (event)=>{
            this.startTimer();
        });

        this.stopBtn.addEventListener('click', ()=>{
            this.stopTimer();
        });

        this.resetBtn.addEventListener('click', (event)=>{
            this.onReset(event);
        });

        this.display.addEventListener('input', (event)=>{
            this.onInput(event);
        })
        
    }

    startTimer(){
        // console.log(event);
        this.setTime();

        if(this.minutes ===0 && this.seconds ===0) return;

        this.setControls(true, false);
        this.display.classList.add('progress');

    
        this.intervalId = setInterval(()=>{
            this.seconds -= 1;

        
            if(this.seconds < 0) {
                this.seconds = 59
                this.minutes -=1;
            }

            if(this.minutes === 0 && this.seconds === 0){
                this.stopTimer();
                this.resetTimer();
            }

            // console.log(this.seconds);

            this.setDisplay(this.minutes, this.seconds);

        }, 1000); // 1s
    }

    stopTimer(){
        this.setControls(false, true);
        this.display.classList.remove('progress');
        clearInterval(this.intervalId);
    }

    setTime() {
        this.minutes = parseInt(this.minMSB.value) * 10 + parseInt(this.minLSB.value);
        this.seconds = parseInt(this.secMSB.value) * 10 + parseInt(this.secLSB.value);
    }

    onReset(event){
        console.log(event)

    }

    resetTimer() {
        this.minMSB.value = '0';
        this.minLSB.value = '0';
        this.secMSB.value = '0';
        this.secLSB.value = '0';
    }

    setControls(startStatus = false, stopStatus = false) {
        this.startBtn.disabled = startStatus;
        this.stopBtn.disabled = stopStatus;

        this.minMSB.disabled = startStatus;
        this.minLSB.disabled = startStatus;
        this.secMSB.disabled = startStatus;
        this.secLSB.disabled = startStatus;
    }

    onInput(event){

        const val = event.data;
        console.log(val);
        // if(this.minMSB < 0 && this.minLSB < 0) {
        //     this.minMSB.value = '0';
        //     this.minLSB.value = '0';
        // }

    }

    setDisplay(mins, secs){

        this.minMSB.value = String(Math.floor(mins / 10)); // 05/10 = 0, remainder =5
        this.minLSB.value = String(mins % 10);
        this.secMSB.value = String(Math.floor(secs / 10)); // 05/10 = 0, remainder =5
        this.secLSB.value = String(secs % 10);

    }
}

new Timer('minMSB', 'minLSB', 'secMSB', 'secLSB', 'start', 'stop', 'reset', 'display');

// doubt session

/**

    Which of the following scenarios is most suitable for using event capture in JavaScript? p.s. capture phase is used in focus event only 
    Ans: Handling input events on a form and validating user input before it reaches the form submit event.

     <form method="POS" action="">
          <input type="=text" name="username" />
          <button>Submit</button>
        </form>

    this.submitBtn.addEventListener('input', (event)=>{
        event.preventDefault();
    })


 */