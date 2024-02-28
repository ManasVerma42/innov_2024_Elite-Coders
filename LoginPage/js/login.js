class Login{
    constructor(form, fields){
        this.form = form;
        this.fields = fields;
        this.validateonSubmit();
    }


    async validateonSubmit(){
        let self = this;
        this.form.addEventListener("submit" , async (e) => {
            e.preventDefault();
            var error = 0; 
            self.fields.forEach((field) => {
                let input = document.querySelector(`#${field}`);
                if(self.validateFields(input) === false){
                    error++;
                }
            });
            if(error === 0){
                //login api here

                const data = {
                    email: document.querySelector(`#username`).value,
                    password: document.querySelector(`#password`).value
                };

                // console.log(data);
                let APIurl = "http://localhost:8000/"


                //const res = await axios.post((APIurl+"login"),data)
                try {
                    var res = await axios.post((APIurl + "login"), data);
                    if (res.statusText === "OK") {
                        window.location.replace('./Todo/todo.html');
                    } else {
                        console.log("Response not OK");
                    }
                } catch (error) {
                    console.error("Error", error);
                    self.setStatus(
                        document.querySelector(`#username`),
                        "Incorrect fields.",
                        "error"
                    );
                    self.setStatus(
                        document.querySelector(`#password`),
                        "Incorrect fields.",
                        "error"
                    );
                }
                
                

            }
        });
    }

    validateFields(field){
        if(field.value.trim() === ''){
            this.setStatus(
                field,
                `${field.previousElementSibling.innerText} cannot be blank`,
                "error"
            );
            return false;
        }
        else {
            if(field.type == "password"){
                if(field.value.length < 8){
                    this.setStatus(
                        field,
                        `${field.previousElementSibling.innerText} must be atleast 8 characters`,
                        "error"
                    );
                } else {
                    this.setStatus(field, null , "success");
                    return true;
                }
            } else {
                this.setStatus(field, null , "success");
                    return true;
            }
        }
    }

    setStatus(field , message , status){
        const errorMessage = field.parentElement.querySelector('.error-message');

        if(status === "success"){
            if(errorMessage){
                errorMessage.innerText = "";
            }
            field.classList.remove("input-error");
        }

        if(status === "error"){
            errorMessage.innerText = message;
            field.classList.add("input-error");
        }
    }

}

const form = document.querySelector('.login-form');
if(form){
    const fields = ["username" , "password" ];
    const validator = new Login(form, fields);
}


