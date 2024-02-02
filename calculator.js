class Calculator{

    constructor(previousOp, currentOp){
        this.currentInput = '0';
        this.operator = null;
        this.previousInput = null;
        this.screen = document.querySelector('.number');
        this.bindEvents();
    }

    bindEvents(){
        const keys = document.querySelectorAll('.key');
        
        keys.forEach(k => {
            k.addEventListener('click', () => this.handleKeyPress(k.textContent))
        })
    }

    handleKeyPress(key){
        switch(key){
            case '+':
            case '-':
            case '/':
            case 'x':
            case '=':
            case 'DEL':
                this.delete()
            break;
            case 'RESET':
                this.reset();
            break;
            default:
                this.appendToScreen(key);
        }
    }

    appendToScreen(value){
        if(this.currentInput === '0'){
            this.currentInput = value
        }else{
            this.currentInput += value
        }

        this.updateScreen()
    }

    updateScreen(){
        this.screen.textContent = this.currentInput;
    }

    delete(){
        this.currentInput = this.currentInput.slice(0,-1)

        if(this.currentInput === ''){
            this.currentInput = '0';
        }

        this.updateScreen()
    }
}

var calc = new Calculator();

