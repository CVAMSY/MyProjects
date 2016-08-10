count =dict()

word=input('enter line of text?')

text=word.split(',')

for words in text:
	count[words]=count.get(words,0)+1

print (count)