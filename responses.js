const cars = ["video consult","inclinic consult","lab test"];
const db=["search doctors","search hospital","search symptoms"]
const g=["characteristics", "features", "properties", "specifications", "traits", "qualities", "aspects","what can this app do"]
const g2=["emi","EMI","Emi"]
const g3=["active plans"]
const g4=["Health plans","health plans"]
const g5=["consult a doctor","search for hospital"]
function getBotResponse(input) {
    
  
    if (cars.includes(input)) {
        return "Scroll to top of the app..you can see the details.";


  
    }if (db.includes(input)) {
        return "If you go to the top of the app, you can find space to enter, below your name";
    }if (g.includes(input)) {
        return "1.My ABHA  2.My health Plans 3.My Notifications 4.My Appointments 5.Lab Bookings 6.Ask a free Question 7.Medicards and many more";
    }if (g2.includes(input)) {
        return "Emi option in bottom --> Buy Card --> Add Benefits";}
    if (g3.includes(input)) {
            return "Active plans option in bottom --> Explore Health plans --> Choose the plan --> Work it out";}
    if (g4.includes(input)) {
                return "Health plans option in bottom --> Explore Health plans --> Choose the plan --> Work it out";}
    if (g4.includes(input)) {
                    return "Scroll to top --> Search for the hospital nearby --> Choose the hospital --> Get the contacts and approach";}
    

    // Simple responses
    if (input == "hello"||input=="hi") {
        return "Hello there! What can I do for you?";
    } else if (input == "goodbye"||input=="Bye"||input=="bye") {
        return "Have a nice day!";
    } else {
        return "Please try entering valid words and in lower case";
    }
}