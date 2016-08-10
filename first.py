hours =int(input('enter Hours:'))
amount =int(input('enter rate:'))

if hours > 40:
   exhours=hours-40
   expay=exhours*1.5*amount
   pay=40*amount+expay
   print ('total pay =',pay)

else: 
   normalpay=hours*amount
   print ('total pay =',normalpay)


def computepay( hours,rate):
    actualpay =hours*rate
    print (actualpay)


computepay(20,40)