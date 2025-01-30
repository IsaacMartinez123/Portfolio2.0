const validate = (form) => {
    let errors = {};
    
    if (!/\S+@\S+.\S+/.test(form.email)) { 
        errors.email = "El correo no es válido";
    }

    if (!form.email) {
        errors.email = "El correo es obligatorio";
    }

    if (!form.subject) {
        errors.subject = "El nombre es obligatorio";
    }

    if (!form.message) {
        errors.message = "El mensaje es obligatorio";
    }

    if (form.email.length > 35) {
        errors.email = "El correo no puede tener más de 35 caracteres";
    }

    if (form.subject.length < 3) {
        errors.subject = "El nombre debe tener al menos 3 caracteres";
        
    }

    if (form.message.length < 3) {
        errors.message = "El mensaje debe tener al menos 3 caracteres";
        
    }

    return errors;
};

export default validate;