const dns = require('dns');  
dns.lookup('www.javatpoint.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
});

dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {  
  console.log(hostname, service);  
    // Prints: localhost  
});  