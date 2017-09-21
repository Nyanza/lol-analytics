import requests
import json
url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=allytips&tags=enemytips&tags=image&tags=info&tags=lore&tags=partype&tags=skins&tags=spells&tags=stats&tags=tags&dataById=false&api_key=RGAPI-dff83d82-3d67-4fc6-b7d6-7fd74f7cbb8c'
#can only run this 10 in one hour
g = requests.get(url)
host = "http://localhost:8000"
path = '/assets'

for champ in g.json()['data']:
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    p = requests.post("http://localhost:8000/api/v1/champions/", data=json.dumps(g.json()['data'][champ]), headers=headers)
    champId = p.json()["id"]
    key = p.json()['key']
    urls = { 'square': '', 'loading': [], 'splash': []}
    urls['square'] = host + path + '/square/' + key + '.png'
    for skin in g.json()['data'][champ]['skins']:
        ext = key + '_' + str(skin['num'])  + '.jpg'
        urls['loading'].append(host + path + '/loading/' + ext)
        urls['splash'].append(host + path + '/loading/' + ext)
    p2 = requests.post(host+'/api/v1/assets/images/champions/', data=json.dumps({'championId':champId, 'name':key, 'loading': urls['loading'], 'square': urls['square'], 'splash': urls['splash']}), headers=headers)
    for spell in g.json()['data'][champ]['spells']:
        spell['championId'] = champId
        p3 = requests.post(host+'/api/v1/spells/', data=json.dumps(spell), headers=headers)
