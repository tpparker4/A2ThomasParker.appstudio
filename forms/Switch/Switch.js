let firstName = prompt("Please enter your first name")

let userState = prompt("Please enter your state's 2 letter abreviation capitalized")

let userTemperature = prompt("Please enter your state's temperature")

let userMessages =["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

switch (true) {
  case (userTemperature < 32 && userState == "NE"):
    console.log(`${firstName}, ${userMessages[0]}`);
    break;
    
  case(userTemperature >= 32 && userTemperature < 50 && userState == "NE"):
  console.log(`${firstName}, ${userMessages[1]}`)
  break;
  
 case(userTemperature >= 32 && userTemperature < 50 && userState == "FL"):
  console.log(`${firstName}, ${userMessages[2]}`)  
  break;

  case(userTemperature >= 50 && userTemperature < 70 && userState == "FL"):
  console.log(`${firstName}, ${userMessages[3]}`)
  break;
}
