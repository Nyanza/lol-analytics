import requests
import json
import pandas as pd
url = 'https://raw.githubusercontent.com/Nyanza/lol-analytics/master/scraping/champions.json';
g = requests.get(url)
host = "http://localhost:8000"
path = '/assets'

leagues = ["bronze", "silver", "gold", "plat", "platplus"]
x = {}
for league in leagues:
    x[league] = pd.read_csv('scraping/'+league+".csv")

for champ in g.json():
    key = g.json()[champ]['key']
    name = g.json()[champ]['key']
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    championData = g.json()[champ]
    championData['metrics'] = {}
    for league in leagues:
        df = x[league][x[league]["Champion"] == name]
        if df.empty:
            continue
        metrics = {}
        metrics["role"] = df.iloc[-1]["Role"]
        metrics["winPercent"] = df.iloc[-1]["Win Percent"]
        metrics["playPercent"] = df.iloc[-1]["Play Percent"]
        metrics["banRate"] = df.iloc[-1]["Ban Rate"]
        championData['metrics'][league] = metrics
        #p4 = requests.post(host+'/api/v1/stats/', data=json.dumps(stats), headers=headers)
    print(championData['metrics'])
    p = requests.post("http://localhost:8000/api/v1/champions/", data=json.dumps(championData), headers=headers)
    champId = p.json()["id"]
    urls = { 'square': '', 'loading': [], 'splash': []}
    urls['square'] = path + '/square/' + key + '.png'
    for skin in g.json()[champ]['skins']:
        ext = key + '_' + str(skin['num'])  + '.jpg'
        urls['loading'].append(path + '/loading/' + ext)
        urls['splash'].append(path + '/loading/' + ext)
    p2 = requests.post(host+'/api/v1/assets/images/champions/', data=json.dumps({'championId':champId, 'name':key, 'loading': urls['loading'], 'square': urls['square'], 'splash': urls['splash']}), headers=headers)
    for spell in g.json()[champ]['spells']:
        spell['championId'] = champId
        p3 = requests.post(host+'/api/v1/spells/', data=json.dumps(spell), headers=headers)
    print(name)
    print(p3)
