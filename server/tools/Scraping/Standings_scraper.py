from bs4 import BeautifulSoup
import requests
import json

def scrap_tables(url,id):
    reponse = requests.get(url)
    html = reponse.content


    soup = BeautifulSoup(html,"html.parser")
    rows = soup.find_all(class_="standing-table__row")

    table=[]
    for row in rows:
        content = row.text
        row_data = content.strip().split('\n')
        #i found that the data is not clean : ['1', '', 'Barcelona', '', '38', '30', '6', '2', '95', '21', '74', '96']
        clean_data = [item for item in row_data if item.strip() != '']
        #now clead_data contains a clean lists : ['1', 'Barcelona', '38', '30', '6', '2', '95', '21', '74', '96']
        table.append(clean_data)

    # convert the tow-dim list to a dict
    # the header contains a hidden rows, we need just the first 10 ones
    keys = table[0][:10]
    # I want to change # to rank 
    keys[keys.index("#")] = 'rank'
    # getting table values
    values = table[1:]
    if len(values[1]) >10:
        values = [i[:10] for i in values]
    standingTable = []
    for value in values:
        standingTable.append(dict(zip(keys,value)))

    #now we need to convert the list of dicts to a json file
    a = url.split('/')
    file_name = "../../Json/Standings/"+id+'/'+a[-1]+".json"
    with open(file_name,"w") as f:
        json.dump(standingTable, f, indent=4)
leagues = ['premier-league-table/','la-liga-table/','serie-a-table/','bundesliga-table/','ligue-1-table/']
for league in leagues:
    for year in range(2010,2023):
        url = "https://www.skysports.com/" + league+str(year)
        id = ['en','es','de','it','fr']
        scrap_tables(url,id[leagues.index(league)])