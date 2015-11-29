import csv  
import json  
  
# Open the CSV  
f = open( 'services.csv', 'rU' )  
# Change each fieldname to the appropriate field name. 
reader = csv.DictReader( f)  

# Parse the CSV into JSON  
out = json.dumps( [ row for row in reader ], indent=4 )  
print "JSON parsed!"  
# Save the JSON  
f = open( 'services.json', 'w')  
f.write(out)  
print "JSON saved!"  
