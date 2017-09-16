import requests
import json
url = 'https://na1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&tags=allytips&tags=enemytips&tags=image&tags=info&tags=lore&tags=partype&tags=skins&tags=spells&tags=stats&tags=tags&dataById=false&api_key=RGAPI-d68b07d1-cbf6-4c39-a907-69475ee570a3'
#can only run this 10 in one hour
g = requests.get(url)
for champ in g.json()['data']:
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    p = requests.post("http://localhost:8000/api/champions/", data=json.dumps(g.json()['data'][champ]), headers=headers)
