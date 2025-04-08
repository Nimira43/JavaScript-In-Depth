import xml.dom.minidom as m

doc = m.parse(r'C:\Users\arimi\Project-8\JavaScript\The-New-52\JavaScript-In-Depth\02-the-dom\Part-01\example.xml')
title_list = doc.getElementsByTagName('title')

for title in title_list:
    print(title.firstChild.data)
