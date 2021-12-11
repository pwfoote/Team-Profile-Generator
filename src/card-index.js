// Card template function
const cardIndex = (cards) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
  </head>
  <body class="pb-5">
    
    <!-- Header -->
    <header class="bg-danger py-4 mb-5">
      <h1 class="text-center text-white">
        <i class="fas fa-users mr-1"></i>
        Team Profile
      </h1>
    </header>
    <!-- Profile Cards Container -->
    <main>
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">   
          ${cards}       
        </div>
      </div>
    </main>
  </body>
  </html>
`;

module.exports = cardIndex;