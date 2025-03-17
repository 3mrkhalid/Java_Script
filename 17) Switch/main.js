// Prompt the user to input their role
let role = prompt("what is your role?");

// Use a switch statement to handle different roles
switch (role) {
  // If the role is 'admin', display admin privileges
  case "admin":
    document.writeln("update, create, delete");
    break;

  // If the role is 'moderator', display moderator privileges
  case "moderator":
    document.writeln("update, create");
    break;

  // If the role is neither 'admin' nor 'moderator', default to this message
  default:
    document.writeln("hello user");
    break;
}
