// Calculadora - JS

function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        inicia() {
            this.cliqueBotoes();
        },

        clearDisplay() {
            this.display.value = ''
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta) // Eval realiza contas passadas numa string
                if (!conta) {
                    alert("Conta inválida");
                    return
                }
                this.display.value = String(conta)
            } catch (e) {
                alert("Conta Inválida!")
                return;
            }
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }

            })
        }
    }
}

const calculadora = criaCalculadora(); // Armazenar a Factory Function
calculadora.inicia(); // Iniciar Calculadora