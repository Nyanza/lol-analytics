import requests
import json
url = 'https://raw.githubusercontent.com/Nyanza/lol-analytics/master/scraping/champions.json';
g = requests.get(url)
host = "http://localhost:8000"
path = 'http://ddragon.leagueoflegends.com/cdn/img/champion'
square_path = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/img/champion'

from os import listdir
from os.path import isfile, join
json_path = './scraping/champstats/'
json_files = [f for f in listdir(json_path) if isfile(join(json_path, f))]

def load_json(path, file):
    with open(path+file) as data_file:
        return json.load(data_file)

import operator
sorted_champ = sorted(g.json().items(), key=operator.itemgetter(0))

def insert_to_db(name, info, counter):
    key = info['key'] #get champ key
    name = info['name'] #get champ name
    headers = {'Content-type': 'application/json', 'Accept': 'text/plain'} #set headers
    info['metrics'] = {} #init metrics
    metrics = load_json(json_path, json_files[counter])
    skill_images = metrics.pop('skillImages', None)
    info['metrics'] = metrics
    default_metrics = {}
    for lane in metrics["platplus"]:
        default_lane = lane
        break
    default_metrics['Win Rate'] = metrics["platplus"][default_lane]["stats"].pop('Win Rate', None)
    default_metrics['Play Rate'] = metrics["platplus"][default_lane]["stats"].pop('Pick Rate', None)
    default_metrics['Ban Rate'] = metrics["platplus"][default_lane]["stats"].pop('Ban Rate', None)
    info['defaultMetrics'] = default_metrics
    info['squareImg'] = square_path + '/' + key + '.png'
    skins = info['skins']
    for skin in skins:
        ext = key + '_' + str(skin['num'])  + '.jpg'
        skin['loading'] = path + '/loading/' + ext
        skin['splash'] = path + '/splash/' + ext
    info['skins'] = skins
    counter = 0
    spells = {'q': {}, 'w': {}, 'e': {}, 'r': {}}
    for spell in info['spells']:
        skill = 'qwer'[counter]
        spells[skill]['image'] = skill_images[counter]
        spells[skill]['description'] = spell['description']
        spells[skill]['name'] = spell['name']
        counter += 1
    info['spells'] = spells
    p = requests.post(host+"/api/v1/champions/", data=json.dumps(info), headers=headers)
    print(name)
    print(p)

counter = 0
for name, info in sorted_champ:
    insert_to_db(name, info, counter)
    counter += 1
