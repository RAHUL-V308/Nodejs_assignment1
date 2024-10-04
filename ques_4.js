//DNS module 

const dns = require('dns');

dns.lookup('example.com', (err, address, family) => {
    if (err) {
        console.error("Error occurred in lookup: ", err);
    } else {
        console.log(`IP address for example.com: ${address}, IPv${family}`);

        dns.reverse(address, (err, hostnames) => {
            if (err) {
                console.error("Error occurred in reverse lookup: ", err);
            } else {
                console.log(`Reverse lookup for ${address}: ${hostnames}`);
            }
        });
    }
});

dns.resolveMx('google.com', (err, addresses) => {
    if (err) {
        console.error("Error occurred in MX record resolution: ", err);
    } else {
        console.log('MX records for google.com:');
        addresses.forEach((record) => {
            console.log(`Priority: ${record.priority}, Exchange: ${record.exchange}`);
        });
    }
});

dns.resolveNs('example.com', (err, addresses) => {
    if (err) {
        console.error("Error occurred in NS record resolution: ", err);
    } else {
        console.log('NS records for example.com:', addresses);
    }
});

/*output
IP address for example.com: 93.184.216.34, IPv4
Reverse lookup for 93.184.216.34: ['example.com']

MX records for google.com:
Priority: 1, Exchange: aspmx.l.google.com
Priority: 5, Exchange: alt1.aspmx.l.google.com
Priority: 5, Exchange: alt2.aspmx.l.google.com
Priority: 10, Exchange: alt3.aspmx.l.google.com
Priority: 10, Exchange: alt4.aspmx.l.google.com

NS records for example.com: [ 'a.iana-servers.net', 'b.iana-servers.net' ]
*/