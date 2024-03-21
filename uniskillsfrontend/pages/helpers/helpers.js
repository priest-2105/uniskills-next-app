// eslint-disable-next-line no-undef
window.globalVariable = null;





/* Function to help us dynamically search for a index of an array and remove that index/value while returning a new array not containing the removed indexe housing the removed value
 * usage => (" var result = arrayRemoveItemByIndex(array, 6);") */
export function arrayRemoveItemByIndex(arr, index){
    /* perform array by value filter operation here. */
    arr.splice(index, 1);
    return arr;
}






// NOT TESTED YET
/* Function to help us dynamically search for a value inside an array and remove that value while returning a new array not containing the removed indexe housing the removed value
 * usage => (" var result = arrayRemoveItemByValue(array, 6);") */
export function arrayRemoveItemByValue(arr, value){
    /* perform array by value filter operation here. */
    return arr.filter(function(ele){
        return ele !== value;
    });
}







/* Function to help us dynamically append our <script> tags to the head (after the page has been loaded) and force the execution order of our JavaScripts (perhaps using asynchronous 
 * function queuing or something like ControlJS). Using javascript to create the "async" effect as though we are using it through the "<script>" html tag "async" attribute, this is
 * the only way we can simulate the "<script>" html tag "async" attribute effect without bothering ourself with browsers/mobile-browsers zsupport, it just works everywhere.
 * use the "appendWhere" paramenter, setting it to either "head" or "body", which in turns tells where our script should be appended to. 
 * USAGE => "loadScript('//cdnjs.com/some/library.js')"    */
/* var loadScript = function(src) { */
export function loadScript(src, appendWhere = "body"){
    var tag = document.createElement('script');
    tag.async = false;
    tag.src = src;
    document.getElementsByTagName(appendWhere).appendChild(tag);
}





 
/* HERE WE CREATE A FUNCTION TO TAKE ADVANTAGE OF JAVASCRIPT PROMISE, CALL ANY API AND WAIT FOR THE RESPONSE BEFORE EXECUTING ANYTHING ELSE. */
export async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, *same-origin, omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'     // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}






/* JAVASCRIPT FUNCTION TO HELP REMOVE WHITE SPACES FROM THE TWO SIDES OF A STRING.  */
export function TRIM(STR){
    /* There is a way javascript trim function works that it fails and throws errors, if the string value supplied are numbers as strings, therefore we shall run this test to affirm
     * in truely the supplied value is a string or not, if its a string then we trim and return but if its not, we just return back the supplied data untouched. */
    if(isNaN(STR - parseFloat(STR))){
        return STR.trim();
    }else{
        return STR.toString().trim();
    }
};







/* A function to help make a textarea scroll-bar or the scroll-bar of a div, it makes them automatically scrolled to the TOP. Use the "SELECTED_ELEMENT" parameter to dynamically
 * select (by ID) the element to apply this on or ensure to set the id-name to "window" so this function can work.  */
export function SCROLL_TO_TOP(SELECTED_ELEMENT = "window"){
    /* select the div or textarea by there ID. */
    var div = document.getElementById(SELECTED_ELEMENT);
    /* perform the sweet bottom scroll operation using javascript "scrollHeight" */
    div.scrollTop = 0;
}








/* A function to help make a textarea scroll-bar or the scroll-bar of a div, it makes them automatically scrolled to the bottom. Use the "SELECTED_ELEMENT" parameter to dynamically
 * select (by ID) the element to apply this on or ensure to set the id-name to "window" so this function can work.  */
export function SCROLL_TO_BOTTOM(SELECTED_ELEMENT = "window"){
    /* select the div or textarea by there ID. */
    var div = document.getElementById(SELECTED_ELEMENT);
    /* perform the sweet bottom scroll operation using javascript "scrollHeight" */
    div.scrollTop = 9999 * div.clientHeight;
}











/* A function to help reverse an array content. */
export function REVERSE_ARRAY(INPUTE_ARRAY){
    /* perform operation smoothly and quickly here.   */
    return INPUTE_ARRAY.reverse();
}






/* Function to help us convert words to their capital letters equivalent.  */
export function CAPITALIZE(DATA){
    return _Upper_Case(DATA);
};




/* Function to help us print out the values of an array.  */
export function ARRAY_DUMP(ARR){
    ARR.splice(0, ARR.length);
};





/* JAVASCRIPT FUNCTION TO HELP US GET THE TOTAL NUMBER OF ELEMENTS INSIDE AN ARRAY.  */
export function COUNT(ARRAY_DATA){
    return ARRAY_DATA.length;
};





/* JAVASCRIPT FUNCTION TO HELP REMOVE A STRING FROM INSIDE ANOTHER STRING.  */
export function STRING_REPLACE(STRING_TO_LOOK_OUT_FOR, REPLACEMENT, MAIN_STRING){
    return MAIN_STRING.replace(STRING_TO_LOOK_OUT_FOR, REPLACEMENT);
};





/* JAVASCRIPT EQUIVALENT OF PHP EXPLODE FUNCTION.  */
export function EXPLODE(DELIMITER, STR){
    return STR.split(DELIMITER);
};








export function REMOVE_TAGS(STR){
    return STR.replace(/<[^>]*>/g, '');
};







export function PRICE_FORMATTER(x){
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};





/* JAVASCRIPT FUNCTION TO HELP US CHECK IF AN OBJECT OR VARIABLE IS AN ARRAY OR NOT. THIS FUNCTION RETURNS TRUE IF THE VARIABLE IN QUESTION IS AN ARRAY.  */
export function ISARRAY(POTENTIAL_ARRAY){
    return Array.isArray(POTENTIAL_ARRAY);
};






/* JAVASCRIPT FUNCTION TO HELP US CHECK FOR A STRING INSIDE AN ARRAY. THIS FUNCTION RETURNS TRUE IF THE SEARCHED STRING IS INSIDE THE INPUTE ARRAY. THIS FUNCTION IS CASE SENSITIVE.  */
export function INARRAY(MAIN_ARRAY, SEARCHED_STRING){
    return MAIN_ARRAY.includes(SEARCHED_STRING);
};





/* JAVASCRIPT FUNCTION TO HELP US VALIDATE IF AN EMAIL IS IN IT CORRECT FORMATE. */
export function validateEmail(email){
    // eslint-disable-next-line
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};






/* A function to find the number equivalent of the percentage of a parent number. all number supplied to this function should be integers, it returns the result as integer aswell.
 * Take for example the 20% of 500 is 100, to use this function to know the 20% of 500, 500 will go into the "Parent_Number" parameter, while 20 will go into the "Percentage"
 * parameter, hence the function would return 100. */
export function Percentage_To_Number_Equivalent(Parent_Number, Percentage){
    /* perform operation smoothly and quickly here.   */
    return ((parseFloat(Parent_Number) / 100) * parseFloat(Percentage));
}





/* A function to find the Percentage equivalent of a Percentage Value Number. all number supplied to this function should be integers, it returns the result as integer aswell. what 
 * ever value returned is the percentage equivalent. Take for example we have 500 as the main number and we also have another number which is 100, if we want to know the percentage 
 * of 100 in 500, then we shall be dividing 100 with 500 and multiplying the resultant number with 100 which gives us 20, meaning the percentage of 100 in 500 is 20%, therefore so in
 * this function, 500 will go into the "Parent_Number" parameter, while 100 will go into the "Percentage_Value_number" parameter, hence the function would return 20. */
export function Number_To_Percentage_Equivalent(Parent_Number, Percentage_Value_number){
    /* perform operation smoothly and quickly here.   */
    return ((parseFloat(Percentage_Value_number) / parseFloat(Parent_Number)) * 100);
}







/* A function to help us merge two arrays together as one and in a new array. */
export function ARRAY_MERGE(ARRAY_DATA_1, ARRAY_DATA_2){
    /* We use the "concat" javascript inbuilt function to join this two arrays together as one inside a new array instance, then return this new array instance.  */
    return ARRAY_DATA_1.concat(ARRAY_DATA_2);
}








/* A function to help us EXTEND ARRAY A WITH DATAS FROM ARRAY B. note that array B must not be huge, keep it under about 100, 000 items/elements. */
export function ARRAY_BOTTOM_EXTENDER(MAIN_ARRAY_DATA, EXTENTION_ARRAY_DATA){
    /* here we opt to use an ES5 method instead of the ES6 method, just to ensure that this code runs thesame wayu on all browsers. */
    Array.prototype.push.apply(MAIN_ARRAY_DATA, EXTENTION_ARRAY_DATA);
}









/*  */
export function IFYCOOOL_INTEGER_ARRAY_EXTENDER(MAIN_ARRAY_DATA, EXTENTION_ARRAY_DATA){
    let Result = [];
    /**/
    let counter = 0;
    let index;
    /**/
    const all_array_count = MAIN_ARRAY_DATA.length + EXTENTION_ARRAY_DATA.length;
    /* In a bid to creating a loop that counts from the top backwards, we get the total count of the data we want to read from and use it data to show displays. */
    let MAIN_ARRAY_last_index = (MAIN_ARRAY_DATA.length - 1);
    
    for (index = 0; index < all_array_count; index++){
        if(index <= MAIN_ARRAY_last_index){
            Result[index] = MAIN_ARRAY_DATA[index];
        }else{
            Result[index] = EXTENTION_ARRAY_DATA[counter++];
        }
    }
    
    /**/
    return Result;
}









/*  A function to help us divide a string to its individual build up characters.   */
export function __String_To_Chars_Splitter(Operating_String, Case = null){
    /* here we use the Case variable to automate the output string of this function, as to wether the string to be splitted should be uppercased or lowercased. We then return the 
     * output characters in array either as a complete lower case or higher case, or just forgets about case and use the case on the string as that.  */
    if(Case === "lower"){
        return _Lower_Case(Operating_String).split("");
    }else if(Case === "higher"){
        return _Upper_Case(Operating_String).split("");
    }else if(Case === null){
        return TRIM(Operating_String).split("");
    }
}









/*  A function to help us convert a string to it upper case formate   */
export function _Upper_Case(Operating_String){
    /* here we extract the supplied string, and trim it. */
    const trimmed_string = (TRIM(Operating_String));
    /*  Convert to uppercase and return final Result  */
    return trimmed_string.toUpperCase();
}










/*  A function to help us convert the first letter of a string to it upper case formate   */
export function _FirstLetter_Upper_Case(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}










/*  A function to help us convert a string to it lower case formate   */
export function _Lower_Case(Operating_String){
    /* here we extract the supplied string, and trim it. */
    const trimmed_string = (TRIM(Operating_String));
    /*  Convert to lowercase and return final Result  */
    return trimmed_string.toLowerCase();
}










/* A function to help divide a string to the right side using a supplied integer which denotes the indexes of the characters inside the string to divide. note that this integer 
 * counting starts from zero. therefore this function Returns a part of a string. lets see an example here; i.e [  echo substr("Hello world",6);  ] <-------- this example returns 
 * 'world' as the divided to the right path string.  */
export function __STRING_DIVIDER(MAIN_String, BREAKER){
    /*  Return Result  */
    return MAIN_String.substr(BREAKER);
}










export function quickDateFormater(date){
    /*  Return Result  */
    return new Date(date).toLocaleDateString()
}











/* function to help us construct a full date but in a format that is suitable for an html/css inner chat box modal. */
export function CHAT_BOX_DATE_Formater(){
    /* Create an instance of javascript date class. */
    const date = new Date();
    /* get the current date integer data in accordance with the supplied timezone. */
    let current_day = date.getDate();
    /* In a bid to ensure that the day string doesn't have a zero infront, we use the "__String_To_Chars_Splitter" function to split the string into characters in array and we
     * get only the first character of the date string and check if this character is equals to zero. */
    if(__String_To_Chars_Splitter(current_day)[0] === "0"){
        /* if the control gets here it mean this first character is zero, therefore we use the "__STRING_DIVIDER" function to chop of this first character. */
        current_day = __STRING_DIVIDER(current_day, 1);
    }
    
    /* get the current year, according to time zone. */
    const current_year = date.getFullYear();
    
    /* get the full current time, according to time zone. */
    const current_time = formatTIME(date);
    
    /* finally we compile the final result. */
    return Month_Formater()+" "+current_day+", "+current_year+" "+current_time; 
}








/* A FUNCTION TO HELP US GET THE CURRENT MONTH ACCORDING TO THE SUPPLIED TIMEZONE, THEN GO ALL THE WAY TO INTERPRETE THE INTEGER MONTH DATA TO HUMAN LANGUAGE. */
export function Month_Formater(MONTH_LENGHT = "SHORT"){
    /* here we create an array we shall be using to invert between the integer data gotten from the Date class and the month data to be stored in here later. */
    let TESTING_TUBE = null;
    /* Create an instance of javascript date class. */
    const date = new Date();
    /* get the current month integer data in accordance with the supplied timezone. */
    const current_month = date.getMonth();
    
    /* Check to affirm if user wants the months returned full or short. */
    if(MONTH_LENGHT === "SHORT"){
        /* Here we create an array of which contains the SHORT string of the months in human language, arranged in an ascending order. Note that the integer index of this array
         * starts from zero, and we shall be using this index to compare and test with the integer data returned by the date function. */
        TESTING_TUBE = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
    }else{
        /* Here we create an array of which contains the FULL string of the months in human language, arranged in an ascending order. Note that the integer index of this array
         * starts from zero, and we shall be using this index to compare and test with the integer data returned by the date function. */
        TESTING_TUBE = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }
    
    /* We dont need to add or subtract any value from the "current_month" variable unlike php, because the data stored in the "current_month" variable is done via the "getMonth" 
     * function and the "getMonth" function represents the months with integers between (0-11), thats why we dont need to do any addition or subtraction but instead we just use the
     * data directly against out "TESTING_TUBE" array.  */
    return TESTING_TUBE[ current_month ];
}









/* JAVASCRIPT FUNCTION TO FORMAT LOCAL TIME, USING THE 12 HOURS SYSTEM AND ALSO AM/PM FORMATE. */
export function formatTIME(date){
    /* get the current hour via date object. */
    var hours = date.getHours();
    /* get the current minute via date object. */
    var minutes = date.getMinutes();
    /* figure out if our time should be a "pm" or "am", store result for this test inside the "ampm" variable.  */
    var ampm = hours >= 12 ? 'pm' : 'am';
    /* set up a structure to affirm that hour is reverted to "12", in a case where by javascript date object returns zero for current hour.  */
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    /* this line ensures to ad a zero infront of the minutes integer, should it be less than 10. */
    minutes = minutes < 10 ? '0'+minutes : minutes;
    /* concate the final result. */
    var strTime = hours + ':' + minutes + ' ' + ampm;
    /* return the formated time.  */
    return strTime;
}









/* Function to use standard screen size measurement and guaging to detect if a screen requesting content is mobile or desktop. If this function returns treu then the screen 
 * requesting content is a mobile screen but if it returns false then the screen requesting content is not a mobile, probably a tablet or PC. Note that this system uses a standard 
 * screen measurement to decide wich is mobile or desktop, this function doesn't use useragent or any other means with great precision */
export function MOBILE_SCREEN_DETECTOR(){
    /* Here we carry out check to affirm if the screen requesting for contents is a mobile screen or desktop. */
    if(window.innerWidth < 480){
        return true;
    }else{
        return false;
    }
}








/* JAVASCRIPT FUNCTION TO HELP US CONVERT AN OBJECT TO ARRAY. EXAMPLE OF OBJECT DATA => var obj = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0} 
 * THE FIRST PARAMETER IS THE OBJECT DATA WHILE THE SECOND PARAMETER IS THE CONTROLLER, IF IT IS DOPED WITH "BOTH" THEN THIS FUNCTION WILL RETURN THE ARRAY EQUIVALENT IN THIS
 * FORM => "[key, value]", BUT WHEN DOPED WITH "VALUES", THEN THIS FUNCTION WILL RETURN ONLY THE VALUES OF THE RESULTANT ARRAY.   */
export function OBJECT_TO_ARRAY(OBJECT, RETURN_STYLE = "VALUES"){
    /* check the functions controller to see what kind of operation user wants from this function.   */
    if(RETURN_STYLE === "VALUES"){
        return Object.values(OBJECT);
    }else if(RETURN_STYLE === "BOTH"){
        return Object.entries(OBJECT);
    }
};








/* JAVASCRIPT FUNCTION TO HELP US GET THE LAST DATA AT THE END OF A URL.  */
export function LINK_LAST_DATA(LINK, DELIMITER){
    /* explode into an array the url using the given delimiter. */
    const data_box = EXPLODE(DELIMITER, LINK);
    /* guess the index of the last data inside our array, and then use that guessed index to purge out the last data and returns it. `*/
    return data_box[(COUNT(data_box) - 1)];
};






/* FUNCTION TO HELP US TRUNCATE A STRING.  */
export function TRUNCATE_STRING(str, num, end_characters = '...') {
  // If the length of str is less than or equal to num, just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }
  
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + end_characters;
}







/* FUNCTION TO HELP US TRUNCATE A STRING.  */
export function truncate(str, num, end_characters = '...') {
    TRUNCATE_STRING(str, num, end_characters);
}







/* JAVASCRIPT FUNCTION TO HELP US COUNT THE NUMBER OF WORDS IN A SENTENCE. */
export function countWords(s){
    s = s.replace(/\n/g,' '); // newlines to space
    s = s.replace(/(^\s*)|(\s*$)/gi,''); // remove spaces from start + end
    s = s.replace(/[ ]{2,}/gi,' '); // 2 or more spaces to 1
    return s.split(' ').length; 
};






/* JAVASCRIPT FUNCTION TO HELP US REMOVE SPECIAL CHARACTERS AND LETTERS.  */
export function REMOVE_SPECIAL_CHARACTERS_AND_LETTERS(DATA){
    //eslint-disable-next-line
    return DATA.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/A-Za-z]/gi, '');
}







/* JAVASCRIPT FUNCTION TO HELP US REMOVE SPECIAL CHARACTERS.  */
export function REMOVE_SPECIAL_CHARACTERS(DATA){
    //eslint-disable-next-line
    return DATA.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
}






/* JAVASCRIPT FUNCTION TO HELP NOTIFY IF A SENTENCE CONTAINS ONLY NUMBERS. THIS FUNCTION RETURNS TRUE IF IT CONTAINS ONLY NUMBERS BUT RETURNS FALSE OTHERWISE.  */
export function PERMIT_ONLY_NUMBERS(DATA){
    var numbers = /^[0-9 ]+$/;
    if(DATA.match(numbers)){
        return true;
    }else{
        return false;
    }
}





/* JAVASCRIPT FUNCTION TO HELP NOTIFY IF A SENTENCE CONTAINS ONLY ALPHABETS. THIS FUNCTION RETURNS TRUE IF IT CONTAINS ONLY ALPHABETS BUT RETURNS FALSE OTHERWISE.  */
export function PERMIT_ONLY_LETTERS(DATA){
    const letters = /^[A-Za-z ]+$/;
    if(DATA.match(letters)){
        return true;
    }else{
        return false;
    }
}




/* JAVASCRIPT FUNCTION TO HELP NOTIFY IF A SENTENCE CONTAINS ONLY ALPHABETS AND NUMBERS. THIS FUNCTION RETURNS TRUE IF IT CONTAINS THEM BUT RETURNS FALSE OTHERWISE.  */
export function PERMIT_ONLY_LETTERS_AND_NUMBERS(DATA){
    const letters = /^[A-Za-z0-9 ]+$/;
    if(DATA.match(letters)){
        return true;
    }else{
        return false;
    }
}




/* JAVASCRIPT FUNCTION TO HELP NOTIFY IF A SENTENCE CONTAINS ONLY ALPHABETS. THIS FUNCTION RETURNS TRUE IF IT CONTAINS ONLY ALPHABETS BUT RETURNS FALSE OTHERWISE.  */
export function onlyAlphabets(e){
    try {
        var charCode = null;
        if (window.event) {
            charCode = window.event.keyCode;
        }
        else if (e) {
            charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode === 32){
            return true;
        }else{
            return false;
        }
    }
    catch (err) {
        alert(err.Description);
    }
};










/* A function to help EXECUTE ANY FUNCTION after a certain period of time (in secounds or milli-seconds). Use the "TIME_IN_SECONDS_OR_MILLISECONDS" parameter to set the wait secounds 
 * or milli-seconds. Despit the fact that this function uses javascript "setInterval" inbuilt function which runs continuosly for the setted time, This function was so built that it 
 * ensures that it runs only once, hence taking good care of the continuos running of the "setInterval" function. NOTE WHEN DOPING THIS FUNCTION, DO IT IN THIS MANNER TO AVOID CODE
 * CRASHING, THEREFORE IF THE FUNCTION TO BE EXECUTED COLLECTS PARAMETERS USE LIKE THIS => "TIMED_BOMB(() => SCROLL_TO_BOTTOM("window"), 100)", BUT IN A CASE WHEREBY THE FUNCTION
 * DOES NOT COLLECT ANY PARAMETER YOU CAN SAVE TIME BY USING OUR "TIMED_BOMB" FUNCTION LIKE THIS => "TIMED_BOMB(SCROLL_TO_BOTTOM, 100)"       */
export function TIMED_BOMB(FUNCTION_TO_RUN, TIME_IN_SECONDS_OR_MILLISECONDS = 1000){
    
    /* Now we create the "timerOperation" sub function of the "TIMED_BOMB" function, whose sole purpose is DO WHATEVER USER HAVE PROGRAMMED, even though we are using a timer, this 
     * function must run after the setted time and after running just once must the prevent any further running afterwards. .*/
    var timerOperation = function(){
        /* INVOKE THE FUNCTION TO BE EXECUTED HERE. */
        FUNCTION_TO_RUN();
    };
    
    /* Here is where its all getting executed within the setted time. NOTE, MAKE SURE NOT TO SAFE TIMER ID TO "window.globalVariable" GLOBAL VARIABLE. */
    setTimeout(timerOperation, TIME_IN_SECONDS_OR_MILLISECONDS);
}












/* A function to help EXECUTE ANY FUNCTION after a certain period of time (in secounds or milli-seconds). Use the "TIME_IN_SECONDS_OR_MILLISECONDS" parameter to set the wait secounds 
 * or milli-seconds. Despit the fact that this function uses javascript "setInterval" inbuilt function which runs continuosly for the setted time, This function was so built that it 
 * ensures that it runs only once, hence taking good care of the continuos running of the "setInterval" function. NOTE WHEN DOPING THIS FUNCTION, DO IT IN THIS MANNER TO AVOID CODE
 * CRASHING, THEREFORE IF THE FUNCTION TO BE EXECUTED COLLECTS PARAMETERS USE LIKE THIS => "TIMED_BOMB(() => SCROLL_TO_BOTTOM("window"), 100)", BUT IN A CASE WHEREBY THE FUNCTION
 * DOES NOT COLLECT ANY PARAMETER YOU CAN SAVE TIME BY USING OUR "TIMED_BOMB" FUNCTION LIKE THIS => "TIMED_BOMB(SCROLL_TO_BOTTOM, 100)"       */
export function TIMED_BOMB_2(FUNCTION_TO_RUN, TIME_IN_SECONDS_OR_MILLISECONDS = 1000){
    /* Here we create a timer ID variable, to later be used to store the timing ID as returned from the "setInterval" javascript inbuilt function. */
    let timerID = null;
    /* Here we create a counter variable to be used to track the number of times the "setInterval" javascript inbuilt function, have executed the "timerOperation" function. */
    let timerExecutionCounter = 0;
    /* Now we create the "timerOperation" sub function of the "TIMED_BOMB" function, whose sole purpose is DO WHATEVER USER HAVE PROGRAMMED, even though we are using a timer, this 
     * function must run after the setted time and after running just once must the prevent any further running afterwards. .*/
    var timerOperation = function(){
        /* We expect the "timerExecutionCounter" variable to be zero at first so that the operation inside this clause can run successfully before changing this variables data in a
         * bid to prevent this clause operation from running again. so we run this test to achieve this. */
        if(timerExecutionCounter === 0){
            /* control in here means our main operation is running the first time and we carry the first step of altering the data inside the "timerExecutionCounter" variable so that
             * control would never get in here again. */
            timerExecutionCounter++;
            /* INVOKE THE FUNCTION TO BE EXECUTED HERE. */
            FUNCTION_TO_RUN();
        }else{
            /* control in here means our main operation has attempted to run the second time but have failed simply because of the alteration of the "timerExecutionCounter" variable 
             * therefore we clear this timer to prevent any further attempt to run the main function by the system timer. */
            clearInterval(timerID);
        }
    };
    
    /* Here is where its all getting executed within the setted time. */
    timerID = setInterval(timerOperation, TIME_IN_SECONDS_OR_MILLISECONDS);
}











/* A function to help EXECUTE ANY FUNCTION CONTINUOSLY WITH a certain period of time (in secounds or milli-seconds) BETWEEN THE EXECUTION CYCLES. Use the 
 * "TIME_IN_SECONDS_OR_MILLISECONDS" parameter to set the wait secounds or milli-seconds, Embed the function to be continuously executed via the "FUNCTION_TO_RUN" parameter. NOTE 
 * THAT THIS FUNCTION USES A SUPER GLOBAL VARIABLE "window.globalVariable" CREATED AT THE BEGINNING OF THE "LIBRARY.JS" FILE TO STORE THE TIMER-ID FOR THIS FUNCTION, THEREFORE TO 
 * STOP THIS CONTINUOUS EXECUTION OF CODE, RUN THIS CODEC => "clearInterval(window.globalVariable)" IN ANY DESIRED PART OF YOUR SCRIPT TO PUT AN END TO THE CONTINUOUS EXECUTION OF 
 * CODE. ALSO WHEN DOPING THIS FUNCTION, DO IT IN THIS MANNER TO AVOID CODE CRASHING, THEREFORE IF THE FUNCTION TO BE EXECUTED COLLECTS PARAMETERS USE LIKE THIS => 
 * "RUSHING_TIMED_BOMB(() => SCROLL_TO_BOTTOM("window"), 100)", BUT IN A CASE WHEREBY THE FUNCTION DOES NOT COLLECT ANY PARAMETER YOU CAN SAVE TIME BY USING OUR "TIMED_BOMB" FUNCTION 
 * LIKE THIS => "RUSHING_TIMED_BOMB(SCROLL_TO_BOTTOM, 100)"       */
export function RUSHING_TIMED_BOMB(FUNCTION_TO_RUN, TIME_IN_SECONDS_OR_MILLISECONDS = 1000){
    /* Now we create the "timerOperation" sub function of the "RUSHING_TIMED_BOMB" function, whose sole purpose is DO WHATEVER USER HAVE PROGRAMMED, even though we are using a timer, this 
     * function must run after the setted time and after running will continue to run.*/
    var timerOperation = function(){
        /* INVOKE THE FUNCTION TO BE EXECUTED HERE. */
        FUNCTION_TO_RUN();
    };
    
    /* Here is where its all getting executed within the setted time. */
    window.globalVariable = setInterval(timerOperation, TIME_IN_SECONDS_OR_MILLISECONDS);
}









/* A FUNCTION TO HELP US RESET THE TIMER FOR A CODE SETTED TO RUN CONTINUOUSLY, THIS FUNCTION RESETS THE TIME TO START AGAIN. Use the "TIME_IN_SECONDS_OR_MILLISECONDS" parameter to 
 * set the wait secounds or milli-seconds, Embed the function to be continuously executed via the "FUNCTION_TO_RUN" parameter, lastly use the "PREVIOUS_TIMER_ID" parameter to supply
 * to this function the timer-ID of the previous timed execution you wish this function to reset the time to the begining. NOTE THAT THIS FUNCTION USES A SUPER GLOBAL VARIABLE 
 * "window.globalVariable" CREATED AT THE BEGINNING OF THE "LIBRARY.JS" FILE TO STORE THE TIMER-ID FOR THIS FUNCTION, THEREFORE TO STOP THIS CONTINUOUS EXECUTION OF CODE, RUN THIS 
 * CODEC => "clearInterval(window.globalVariable)" IN ANY DESIRED PART OF YOUR SCRIPT TO PUT AN END TO THE CONTINUOUS EXECUTION OF CODE. ALSO WHEN DOPING THIS FUNCTION, DO IT IN THIS 
 * MANNER TO AVOID CODE CRASHING, THEREFORE IF THE FUNCTION TO BE EXECUTED COLLECTS PARAMETERS USE LIKE THIS => "RUSHING_TIMED_BOMB(() => SCROLL_TO_BOTTOM("window"), 100)", BUT IN A CASE 
 * WHEREBY THE FUNCTION DOES NOT COLLECT ANY PARAMETER YOU CAN SAVE TIME BY USING OUR "TIMED_BOMB" FUNCTION LIKE THIS => "RUSHING_TIMED_BOMB(SCROLL_TO_BOTTOM, 100)"       */
export function RESET_RUSHING_TIMED_BOMB(FUNCTION_TO_RUN, PREVIOUS_TIMER_ID, TIME_IN_SECONDS_OR_MILLISECONDS = 1000){
    /* Since running this function means that javascript "setInterval" have been runned before and it has created a time-ID, so in a bid to reset this timer we first destroy the
     * previous instance from via this line of code.  */
    clearInterval(PREVIOUS_TIMER_ID);
    
    /* After destroying the old instance, we now recreate it using the "RUSHING_TIMED_BOMB" function. */
    RUSHING_TIMED_BOMB(FUNCTION_TO_RUN, TIME_IN_SECONDS_OR_MILLISECONDS);
}










/* When react javascript "setInterval" function is used to orchestrate a timed action in react that inturns update a react state per execution cycle and is initially started via 
 * react "useEffect" hook, what happens is that after the first execution cycle the call-back function will not be able to work with the updated version of the state as a result of
 * the fact that the "useEffect" hook is only called once, so we invented this function to help us solve this problem. When you run this function it automatically starts a React
 * "useEffect" hook for you (SO THEREFORE YOU MUST NOT RUN THIS FUNCTION INSIDE A REACT "useEffect" hook), and also create a timed execution of the function you shall be inputing
 * in this functions "callback" parameter, you also input the delay through this functions "delay" parameter. This function does well to execute the function inputed into it in a timed
 * way and STILL MANAGES TO REMEMBER THE UPDATED VERSION OF ANY NUMBER OF STATES THE INPUTED FUNCTION IS CREATED TO MODIFY, AND ONCE THE COMPONENT RUNNING THIS FUNCTION IS UNMOUNTED
 * THIS FUNCTION TIMER DIES IMMEDIATELY WITHOUT ERROR, but you can manually stop the timer by doing a "window.clearInterval()" on the object that this function shall be returning,
 * change the delay at any point in time to restart the timer or maybe kill timer. This function is simply using the "RESETING THE INTERVAL" tweak to force javascript to genuinly
 * repeat the process which in turns force the system to always get current state updates. */
export function REACT_USE_EFFECT_AND_TIMED_BOMBING(callback, delay){
    const intervalRef = React.useRef();
    const callbackRef = React.useRef(callback);

    /* Remember the latest callback: Without this, if you change the callback, when setInterval ticks again, it will still call your old callback. If you add `callback` to 
     * useEffect's deps, it will work fine but the interval will be reset. */
    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    /* Here is our second "useEffect" hook for this function and we shall be using it to set up the interval. */
    React.useEffect(() => {
        /* before we create interval, we need first affirm that the data entered into the "delay" parameter of this function is a number, this measure was taken to avert code crashing. */
        if (typeof delay === 'number') {
            /* Here we create and set our timer execution via javascript "setInterval" function and we make sure that at the callback section of the "setInterval" function we are 
             * running the current callback function (still the same call back function but running afresh each new time we reset the timer), also we assigning the refID too. */
            intervalRef.current = window.setInterval(() => callbackRef.current(), delay);
            /* Clear interval if the components is unmounted or the delay changes */
            return () => window.clearInterval(intervalRef.current);
        }
    }, [delay]);

    /* Returns a ref to the interval ID in case you want to clear it manually */
    return intervalRef;
}













/* THIS VERSION WILL RUN THE FIRST TIMER EXECUTION ALMOST IMMEDIATELY WHILE THE REST OF THE EXECUTION WILL OBEY THE TIMER SETTED BY USER.              */
/* When react javascript "setInterval" function is used to orchestrate a timed action in react that inturns update a react state per execution cycle and is initially started via 
 * react "useEffect" hook, what happens is that after the first execution cycle the call-back function will not be able to work with the updated version of the state as a result of
 * the fact that the "useEffect" hook is only called once, so we invented this function to help us solve this problem. When you run this function it automatically starts a React
 * "useEffect" hook for you (SO THEREFORE YOU MUST NOT RUN THIS FUNCTION INSIDE A REACT "useEffect" hook), and also create a timed execution of the function you shall be inputing
 * in this functions "callback" parameter, you also input the delay through this functions "delay" parameter. This function does well to execute the function inputed into it in a timed
 * way and STILL MANAGES TO REMEMBER THE UPDATED VERSION OF ANY NUMBER OF STATES THE INPUTED FUNCTION IS CREATED TO MODIFY, AND ONCE THE COMPONENT RUNNING THIS FUNCTION IS UNMOUNTED
 * THIS FUNCTION TIMER DIES IMMEDIATELY WITHOUT ERROR, but you can manually stop the timer by doing a "window.clearInterval()" on the object that this function shall be returning,
 * change the delay at any point in time to restart the timer or maybe kill timer. This function is simply using the "RESETING THE INTERVAL" tweak to force javascript to genuinly
 * repeat the process which in turns force the system to always get current state updates. */
export function REACT_USE_EFFECT_AND_TIMED_BOMBING_2(callback, delay){
    const intervalRef = React.useRef();
    const callbackRef = React.useRef(callback);
    const DELAY_AUTOMATOR = React.useRef();
    /* we using this to ensure the first execution happens almost immediately, while the rest follow a common pattern. */
    DELAY_AUTOMATOR.current = 1;

    /* Remember the latest callback: Without this, if you change the callback, when setInterval ticks again, it will still call your old callback. If you add `callback` to 
     * useEffect's deps, it will work fine but the interval will be reset. */
    React.useEffect(() => {
        callbackRef.current = callback;
    }, [callback]);

    /* Here is our second "useEffect" hook for this function and we shall be using it to set up the interval. */
    React.useEffect(() => {
        /* before we create interval, we need first affirm that the data entered into the "delay" parameter of this function is a number, this measure was taken to avert code crashing. */
        if (typeof delay === 'number') {
            /* Here we create and set our timer execution via javascript "setInterval" function and we make sure that at the callback section of the "setInterval" function we are 
             * running the current callback function (still the same call back function but running afresh each new time we reset the timer), also we assigning the refID too. */
            intervalRef.current = window.setInterval(() => callbackRef.current(), DELAY_AUTOMATOR.current);
            /* At this junction we are already sure the first execution was a success, now right here we install the real delay time, for the rest of the execution to abide by. */
            DELAY_AUTOMATOR.current = delay;
            /* Clear interval if the components is unmounted or the delay changes */
            return () => window.clearInterval(intervalRef.current);
        }
    }, [delay]);

    /* Returns a ref to the interval ID in case you want to clear it manually */
    return intervalRef;
}









/**
 * @param num The number to round
 * @param precision The number of decimal places to preserve
 */
export function roundUp(num, precision) {
    precision = Math.pow(10, precision)
    return Math.ceil(num * precision) / precision
};










/* 
    const menu_style_pad = {  width: "auto", height: "auto", padding: ".325rem .5rem", color: "#666", backgroundColor: "hsla(0,0%,100%,.98)", lineHeight: "1.625rem", 
        visibility: "visible", opacity: "1", boxShadow: "0 0 0 1px rgba(20,20,31,.05),0 2px 7px 1px rgba(20,20,31,.16)", borderTopRightRadius: ".25rem", 
        borderBottomRightRadius: ".25rem"  };
*/

/* REDIRECTS WITH A FULL PAGE REFRESH. TAKES IN A PARAMETER, WHICH IS THE ROUTE THE FUNCTION WILL BE REDIRECTING TO, YOY CAN EITHER USE AN ABSOLUTE LINK OR RELATIVE IN IN HERE.  */
export function REDIRECT(ROUT){
    window.location.href = ROUT;
};





/* FULLY DELETES A SPECIFIED COOKIE. TAKES IN A PARAMETER, WHICH IS THE NAME OF THE COOKIE TO BE DELETED. A COOKIE IS DELETED BY SETTING IT EXPIRY TO AN OLD DATE.  */
export function Delete_cookie(cookie_name){
    document.cookie = cookie_name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = cookie_name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
    document.cookie = cookie_name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
};





/* CREATES A COOKIE. THE "cname" PARAMETER IS THE NAME OF THE COOKIE TO BE CREATED, WHILE THE "cvalue" PARAMETER IS THE DATA TO BE ASSIGNED INTO THIS NEWLY CREATED COOKIE. ALSO 
 * THE "exdays" PARAMETER IS THE NUMBER OF DAYS BEFORE THE COOKIE EXPIRES. .*/
export function setCookie(cname, cvalue, exdays){
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
};




/* FUNCTION TO GET A SPECIFIED COOKIE. TAKES IN A PARAMETER, WHICH IS THE NAME OF THE COOKIE ITS DATA NEEDS TO BE FETCHED.  */
export function getCookie(cname){
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1);
        if (c.indexOf(name) !== -1) return c.substring(name.length,c.length);
    }
    return "";
};




export function LOGIN_STATUS_CHECKER(COOKIE_NAME){
    var session_cookie = getCookie(COOKIE_NAME);
    if(session_cookie)
        return true;
    else
        return false;  
};









/*


function FETCH(URL) {
    
    return fetch('https://api.example.com/user', {
      mode: 'cors',
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ firstName: 'Fred', lastName: 'Flintstone' }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-XSRF-TOKEN': getCookieValue('XSRF-TOKEN')
      }
    }).then(response => {
      return response.json().then(data => {
        if (response.ok) {
          return data;
        } else {
          return Promise.reject({status: response.status, data});
        }
      });
    });
    
}



function axios_FETCH(details) {
  return axios.post('https://api.example.com/user', details);
}


*/