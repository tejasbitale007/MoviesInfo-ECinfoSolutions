// export const nameValidation = (name:string.) =>{

// }

export const validPlaceholder = (value:string) =>{
    let message = '';
    if(value.length === 0){
        message =  'Please enter username';
    }
    else if(value.length > 0){
        message = '';
    }
    return message;
}

export const validPlaceholderforPassword = (value:string) =>{
    let message = '';
    if(value.length === 0){
        message =  'Please enter valid password';
    }
    else if(value.length > 0 ){
        message = '';
    }
    return message;
}

export const validConfirmPlaceholderforPassword = (value:string) =>{
    let message = '';
    if(value.length === 0){
        message =  'Please enter confirm password again';
    }
    else if(value.length > 0 ){
        message = '';
    }
    return message;
}