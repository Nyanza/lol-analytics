import requests
import json
import pandas as pd
url = 'https://raw.githubusercontent.com/Nyanza/lol-analytics/master/scraping/champions.json';
#can only run this 10 in one hour
g = requests.get(url)
host = "http://localhost:8000"
path = '/assets'

leagues = ["bronze", "silver", "gold", "plat", "platplus"]
x = {}
for league in leagues:
    x[league] = pd.read_csv(league+".csv")
    
for champ in g.json()['data']:
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    p = requests.post("http://localhost:8000/api/v1/champions/", data=json.dumps(g.json()['data'][champ]), headers=headers)
    champId = p.json()["id"]
    key = p.json()['key']
    urls = { 'square': '', 'loading': [], 'splash': []}
    urls['square'] = path + '/square/' + key + '.png'
    for skin in g.json()['data'][champ]['skins']:
        ext = key + '_' + str(skin['num'])  + '.jpg'
        urls['loading'].append(path + '/loading/' + ext)
        urls['splash'].append(path + '/loading/' + ext)
    p2 = requests.post(host+'/api/v1/assets/images/champions/', data=json.dumps({'championId':champId, 'name':key, 'loading': urls['loading'], 'square': urls['square'], 'splash': urls['splash']}), headers=headers)
    for spell in g.json()['data'][champ]['spells']:
        spell['championId'] = champId
        p3 = requests.post(host+'/api/v1/spells/', data=json.dumps(spell), headers=headers)

    for league in leagues:
        df = x[league][x[league]["Champion"] == key]
        stats = {}
        stats["champion"] = df.iloc[-1]["Champion"]
        stats["role"] = df.iloc[-1]["Role"]
        stats["winPercent"] = df.iloc[-1]["Win Percent"]
        stats["playPercent"] = df.iloc[-1]["Play Percent"]
        stats["banRate"] = df.iloc[-1]["Ban Rate"]
        stats["league"] = league
        stats["championId"] = champId
        p4 = requests.post(host+'/api/v1/stats/', data=json.dumps(stats), headers=headers)
